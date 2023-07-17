import {
	ActivityIndicator,
	Animated,
	Easing,
	Text,
	TouchableHighlight,
	View,
	Modal,
	Pressable,
} from 'react-native';
import styles from './styles';
import { useEffect, useRef, useState } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import * as database from '../../database/index';
import { secondaryColor } from '../../common/includes';

export default function QuizComponent(props) {
	const [list, setList] = useState([]);
	const predefinedList = [
		{
			title: 'Scripturient',
			defination: 'having a consuming passion to write',
		},
		{
			title: 'Abience',
			defination: 'strong urge to avoid someone or something',
		},
		{
			title: 'Abscond',
			defination: 'to secretly depart and hide oneself',
		},
		{
			title: 'Apricity',
			defination: 'the warmth of sun in the winter',
		},
		{
			title: 'Solivagant',
			defination: 'wandering alone',
		},
		{
			title: 'Sauhuta',
			defination: 'to give off smoke',
		},
		{
			title: 'Redolent',
			defination: 'having a strong distinctive fragrance',
		},
		{
			title: 'Fulminate',
			defination: 'cause to explode violently',
		},
		{
			title: 'Discarnate',
			defination: 'having no body',
		},
		{
			title: 'Irenic',
			defination: 'promoting peace',
		},
	];

	const slideAnim = useRef(new Animated.Value(0)).current;
	const [count, setCount] = useState(0);
	const [showNextBtn, setShowNextBtn] = useState(false);
	const [ansIndex, setAnsIndex] = useState(2);

	const quizLength = 5;

	const [word, setWord] = useState();
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	let [score, setScore] = useState({
		correct: 0,
		incorrect: 0,
	});
	const [modalVisible, setModalVisible] = useState(false);
	const [lengthInfoModalVisible, setLengthInfoModalVisible] = useState(false);

	useEffect(() => {
		(async () => {
			fetchData();
		})();
	}, []);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			let words = await database.getRandomWords(5);
			if (words.length < 5) {
				// show count message
				setLengthInfoModalVisible(true);
				// set predefined list because the length is less than 5
				words = [...predefinedList];
			}
			setList(words);
			updateWordAndOptions(words);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.error('Error fetching data:', error);
		}
	};

	const getOptions = (curWord, words) => {
		let opt = [];

		if (curWord) {
			opt.push(curWord);
			while (opt.length < 4) {
				const random = Math.floor(Math.random() * words.length);
				if (opt.findIndex((i) => i.title === words[random].title) === -1) {
					opt.push(words[random]);
				}
			}
			return shuffleArray(opt);
		}
		return [];
	};

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const handleButtonClick = () => {
		if (count < quizLength) {
			animateScreen();
			setTimeout(() => {
				updateWordAndOptions(list);
			}, 280);
		} else {
			// add quiz results to db
			addResults();
		}
		setShowNextBtn(false);
	};

	const addResults = async () => {
		await database.addScore(score.correct, score.incorrect);
		setModalVisible(true);
	}

	const updateWordAndOptions = (words) => {
		const currentWord = words[count];
		setCount(count + 1);
		setWord(currentWord);
		setOptions(getOptions(currentWord, words));
	};

	const animateScreen = () => {
		const outAnimation = Animated.timing(slideAnim, {
			toValue: 1,
			duration: 300,
			easing: Easing.ease,
			useNativeDriver: true,
		});
		const inAnimation = Animated.timing(slideAnim, {
			toValue: 0,
			duration: 300,
			easing: Easing.ease,
			useNativeDriver: true,
		});
		Animated.sequence([outAnimation, Animated.delay(200), inAnimation]).start();
	};

	const answerClick = (ans, index) => {
		setAnsIndex(index);
		updateScore(ans);
		setShowNextBtn(true);
	};

	const updateScore = (answer) => {
		if (answer.title === word.title) {
			setScore({
				correct: score.correct + 1,
				incorrect: score.incorrect,
			});
			return;
		}
		setScore({
			correct: score.correct,
			incorrect: score.incorrect + 1,
		});
	};

	const closeModal = () => {
		setModalVisible(!modalVisible);
		props.navigation.goBack();
	};

	return (
		<>
			{!isLoading ? (
				<>
					<View>
						<Animated.View
							style={[
								styles.container,
								{
									opacity: slideAnim.interpolate({
										inputRange: [0, 1],
										outputRange: [1, 0],
									}),
								},
							]}>
							<View>
								<View>
									<View style={styles.question}>
										<Text style={styles.questionText}>{word?.defination}</Text>
									</View>
								</View>
								<View style={styles.options}>
									{options?.map((opt, index) => {
										return (
											<TouchableHighlight
												disabled={showNextBtn}
												key={index}
												onPress={() => {
													answerClick(opt, index);
												}}>
												<View
													style={[
														styles.option,
														ansIndex === index &&
															word?.title === opt.title &&
															showNextBtn
															? styles.clickedCorrect
															: '',
														ansIndex === index &&
															word?.title !== opt.title &&
															showNextBtn
															? styles.clickedIncorrect
															: '',
														word?.title === opt.title && showNextBtn
															? styles.clickedCorrect
															: '',
													]}>
													<Text
														style={
															styles.optionText
														}>{`${String.fromCharCode(
															0x0041 + index
														)}:   ${opt.title}`}</Text>
													{word?.title === opt.title && showNextBtn && (
														<Ionicons
															name="checkmark-circle-outline"
															size={20}
															color="green"
														/>
													)}
													{ansIndex === index &&
														word?.title !== opt.title &&
														showNextBtn && (
															<Entypo
																name="circle-with-cross"
																size={20}
																color="red"
															/>
														)}
												</View>
											</TouchableHighlight>
										);
									})}
								</View>
							</View>
							{showNextBtn && (
								<View style={{ marginTop: 30 }}>
									<TouchableHighlight
										style={styles.nextBtn}
										onPress={handleButtonClick}>
										<Text style={styles.nextBtnText}>Next</Text>
									</TouchableHighlight>
								</View>
							)}
						</Animated.View>
					</View>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							Alert.alert('Modal has been closed.');
							setModalVisible(!modalVisible);
						}}>
						<View style={styles.centeredView}>
							<View style={styles.centeredView.modalView}>
								<Text style={styles.centeredView.modalView.modalHeader}>
									Your Results
								</Text>
								<View style={styles.centeredView.modalView.modalBody}>
									<View style={styles.centeredView.modalView.modalBody.box}>
										<Text>Correct</Text>
										<Text
											style={
												styles.centeredView.modalView.modalBody.box.text
											}>
											{score.correct}
										</Text>
									</View>
									<View style={styles.centeredView.modalView.modalBody.box}>
										<Text>Incorrect</Text>
										<Text
											style={
												styles.centeredView.modalView.modalBody.box.text
											}>
											{score.incorrect}
										</Text>
									</View>
								</View>
								<Pressable
									style={styles.centeredView.modalView.button}
									onPress={closeModal}>
									<Text style={styles.centeredView.modalView.button.textStyle}>
										OK
									</Text>
								</Pressable>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={lengthInfoModalVisible}
						onRequestClose={() => {
							setLengthInfoModalVisible(false);
						}}>
						<View style={styles.centeredView}>
							<View style={styles.centeredView.modalView}>
								<Text style={styles.centeredView.modalView.modalHeader}>
									Not Enough Words
								</Text>
								<View style={styles.centeredView.modalView.modalBody}>
									<Text>
										It seems you have less than 5 words in your database. The
										quiz needs at least 5 words so we have collected random
										words for you to practise.
									</Text>
								</View>
								<Pressable
									style={styles.centeredView.modalView.button}
									onPress={() => {
										setLengthInfoModalVisible(false);
									}}>
									<Text style={styles.centeredView.modalView.button.textStyle}>
										OK
									</Text>
								</Pressable>
							</View>
						</View>
					</Modal>
				</>
			) : (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color={secondaryColor} />
				</View>
			)}
		</>
	);
}
