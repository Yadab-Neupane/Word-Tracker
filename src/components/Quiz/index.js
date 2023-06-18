import { ActivityIndicator, Animated, Easing, Text, TouchableHighlight, View, Modal, Pressable } from 'react-native';
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
			definition: 'having a consuming passion to write',
		},
		{
			title: 'Abience',
			definition: 'strong urge to avoid someone or something',
		},
		{
			title: 'Abscond',
			definition: 'to secretly depart and hide oneself',
		},
		{
			title: 'Apricity',
			definition: 'the warmth of sun in the winter',
		},
		{
			title: 'Solivagant',
			definition: 'wandering alone',
		},
		{
			title: 'Sauhuta',
			definition: 'to give off smoke',
		},
		{
			title: 'Redolent',
			definition: 'having a strong distinctive fragrance',
		},
		{
			title: 'Fulminate',
			definition: 'cause to explode violently',
		},
		{
			title: 'Discarnate',
			definition: 'having no body',
		},
		{
			title: 'Irenic',
			definition: 'promoting peace',
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
	const [newList, setNewList] = useState([]);
	let [score, setScore] = useState({
		correct: 0,
		incorrect: 0,
	});
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		(async () => {
			fetchData();
		})();
	}, []);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			let words = await database.getRandomWords(10);
			if (words.length < 5) {
				// TODO: show message
				// set predefined list because the length is less than 5
				words = [...predefinedList];
			}
			setList(words);
			setNewList(words);
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

	const handleButtonClick = (clickedAnswer) => {
		if (count + 1 < quizLength) {
			setCount(count + 1);
			animateScreen();
			setTimeout(() => {
				updateWordAndOptions(newList);
			}, 280);
		} else {
			setModalVisible(true);
		}
		setShowNextBtn(false);
	};

	const updateWordAndOptions = (words) => {
		const currentWord = getRandomWord(words);
		setWord(currentWord);
		setOptions(getOptions(currentWord, list.length > 0 ? list : words));
	};

	const getRandomWord = (words) => {
		if (word) {
			setNewList(words.filter((i) => i.title !== word.title));
		}
		const newWord = words[Math.floor(Math.random() * words.length)];
		return newWord;
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
								<Text style={styles.centeredView.modalView.modalHeader}>Your Results</Text>
								<View style={styles.centeredView.modalView.modalBody}>
									<View style={styles.centeredView.modalView.modalBody.box}>
										<Text>Correct</Text>
										<Text style={styles.centeredView.modalView.modalBody.box.text}>
											{score.correct}
										</Text>
									</View>
									<View style={styles.centeredView.modalView.modalBody.box}>
										<Text>Incorrect</Text>
										<Text style={styles.centeredView.modalView.modalBody.box.text}>
											{score.incorrect}
										</Text>
									</View>
								</View>
								<Pressable style={styles.centeredView.modalView.button} onPress={closeModal}>
									<Text style={styles.centeredView.modalView.button.textStyle}>OK</Text>
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
