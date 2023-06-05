import {
	Animated,
	Text,
	TouchableOpacity,
	View,
	Modal,
	Pressable
} from 'react-native';
import styles from './styles';
import { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Flashcard(props) {
	const list = [
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
	];
	let [index, setIndex] = useState(0);
	let [flipValue, setFlipValue] = useState(new Animated.Value(0));
	let [word, setWord] = useState(list[index]);
	let [isFlipped, setIsFlipped] = useState(false);
	let [score, setScore] = useState({
		correct: 0,
		incorrect: 0,
	});
	const [modalVisible, setModalVisible] = useState(false);

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
		if (index + 1 < list.length) {
			flipDefToBack();
			setTimeout(() => {
				setIndex(index + 1);
				setWord(list[index + 1]);
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
						<Text style={styles.textFront}>{word.title}</Text>
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
						<Text style={styles.textBackTitle}>{word.title} :</Text>
						<Text style={styles.textBackDef}>{word.definition}</Text>
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
					<View style={styles.modalView}>
						<Text style={styles.modalView.modalHeader}>Your Results</Text>
						<View style={styles.modalView.modalBody}>
							<View style={styles.modalView.modalBody.box}>
								<Text>Correct</Text>
								<Text style={styles.modalView.modalBody.box.text}>
									{score.correct}
								</Text>
							</View>
							<View style={styles.modalView.modalBody.box}>
								<Text>Incorrect</Text>
								<Text style={styles.modalView.modalBody.box.text}>
									{score.incorrect}
								</Text>
							</View>
						</View>
						<Pressable style={styles.modalView.button} onPress={closeModal}>
							<Text style={styles.modalView.button.textStyle}>OK</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
