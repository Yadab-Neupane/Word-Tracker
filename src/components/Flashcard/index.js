import { Animated, Text, TouchableOpacity, View, Modal, Pressable, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as database from '../../database/index';
import { secondaryColor } from '../../common/includes';
import { useTheme } from '@react-navigation/native';

export default function Flashcard(props) {
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

	const quizLength = 5;

	const { colors } = useTheme()

	const [list, setList] = useState([]);

	let [count, setCount] = useState(0);
	let [flipValue, setFlipValue] = useState(new Animated.Value(0));
	let [word, setWord] = useState({});
	let [isFlipped, setIsFlipped] = useState(false);
	let [score, setScore] = useState({
		correct: 0,
		incorrect: 0,
	});
	const [modalVisible, setModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
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
			setWord(words[0])
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.error('Error fetching data:', error);
		}
	};

	const frontFlip = {
		transform: [
			{
				rotateY: flipValue.interpolate({
					inputRange: [0, 180],
					outputRange: ['0deg', '180deg'],
				}),
			},
		],
	};
	const backFlip = {
		transform: [
			{
				rotateY: flipValue.interpolate({
					inputRange: [0, 180],
					outputRange: ['180deg', '360deg'],
				}),
			},
		],
	};

	const flipDefToFront = () => {
		Animated.timing(flipValue, {
			toValue: 180,
			duration: 300,
			useNativeDriver: true,
		}).start();
		setIsFlipped(true);
	};

	const flipDefToBack = () => {
		Animated.timing(flipValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const changeScore = (win) => {
		if (win) {
			setScore({
				correct: score.correct + 1,
				incorrect: score.incorrect,
			});
		} else {
			setScore({
				correct: score.correct,
				incorrect: score.incorrect + 1,
			});
		}
		if (count + 1 < quizLength) {
			flipDefToBack();
			setTimeout(() => {
				setCount(count + 1);
				setWord(list[count + 1]);
			}, 100);
			setIsFlipped(false);
		} else {
			setModalVisible(true);
		}
	};

	const closeModal = () => {
		setModalVisible(!modalVisible);
		props.navigation.goBack();
	};

	const renderButtons = () => {
		if (isFlipped) {
			return (
				<View style={styles.scoreButtons}>
					<TouchableOpacity
						style={styles.like}
						onPress={() => {
							changeScore(true);
						}}>
						<AntDesign name="like2" size={40} color="white" />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.dislike}
						onPress={() => {
							changeScore(false);
						}}>
						<AntDesign name="dislike2" size={40} color="white" />
					</TouchableOpacity>
				</View>
			);
		}
		return (
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.show} onPress={flipDefToFront}>
					<Text style={styles.show.text}>Show</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<>
			{!isLoading ? (
				<View style={styles.container}>
					<View style={styles.flipView}>
						<Animated.View
							style={[
								{
									...frontFlip,
								},
								styles.flipFront,
							]}>
							<View>
								<Text style={styles.textFront}>{word?.title}</Text>
							</View>
						</Animated.View>
						<Animated.View
							style={[
								{
									...backFlip,
								},
								styles.flipBack,
							]}>
							<View>
								<Text style={styles.textBackTitle}>{word?.title} :</Text>
								<Text style={styles.textBackDef}>{word?.defination}</Text>
							</View>
						</Animated.View>
					</View>
					<View style={styles.bottomView}>{renderButtons()}</View>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							Alert.alert('Modal has been closed.');
							setModalVisible(!modalVisible);
						}}>
						<View style={styles.centeredView}>
							<View style={[styles.centeredView.modalView, { backgroundColor: colors.secondary }]}>
								<Text style={[styles.centeredView.modalView.modalHeader, { color: colors.text }]}>
									Your Results
								</Text>
								<View style={styles.centeredView.modalView.modalBody}>
									<View style={styles.centeredView.modalView.modalBody.box}>
										<Text style={{ color: colors.text }}>Correct</Text>
										<Text
											style={
												[styles.centeredView.modalView.modalBody.box.text, { color: colors.text }]
											}>
											{score.correct}
										</Text>
									</View>
									<View style={styles.centeredView.modalView.modalBody.box}>
										<Text style={{ color: colors.text }}>Incorrect</Text>
										<Text
											style={
												[styles.centeredView.modalView.modalBody.box.text, { color: colors.text }]
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
							<View style={[styles.centeredView.modalView, { backgroundColor: colors.secondary }]}>
								<Text style={[styles.centeredView.modalView.modalHeader, { color: colors.text }]}>
									Not Enough Words
								</Text>
								<View style={styles.centeredView.modalView.modalBody}>
									<Text style={{ color: colors.text }}>
										It seems you have less than 5 words in your database. The
										test needs at least 5 words so we have collected random
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
				</View>
			) : (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color={secondaryColor} />
				</View>
			)}
		</>
	);
}
