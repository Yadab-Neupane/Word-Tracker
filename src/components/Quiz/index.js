import { Animated, Easing, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';
import { useEffect, useRef, useState } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import * as database from "../../database/index";


export default function QuizComponent(props) {
	let  list = [
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
	let newList = [...list];

	const slideAnim = useRef(new Animated.Value(0)).current;
	const [count, setCount] = useState(0);
	const [showNextBtn, setShowNextBtn] = useState(false);
	const [ansIndex, setAnsIndex] = useState(2);

	const quizLength = 5;

	const getOptions = (wor) => {
		let opt = [];

		opt.push(wor);
		while (opt.length < 4) {
			const random = Math.floor(Math.random() * list.length);
			if (opt.findIndex((i) => i.title === list[random].title) === -1) {
				opt.push(list[random]);
			}
		}
		return shuffleArray(opt);
	};

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const handleButtonClick = () => {
		if (count + 1 < quizLength) {
			setCount(count + 1);
			animateScreen();
			updateWordAndOptions();
		} else {
			// show results
		}
		setShowNextBtn(false);
	};

	const updateWordAndOptions = () => {
		setTimeout(() => {
			const currentWord = getRandomWord();
			setWord(currentWord);
			setOptions(getOptions(currentWord));
		}, 280);
	};

	const getRandomWord = () => {
		if (word) {
			newList = newList.filter((i) => i.title !== word.title);
		}
		return newList[Math.floor(Math.random() * newList.length)];
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
		setShowNextBtn(true);
	};

	useEffect(() => {
		console.log('asdf')
		fetchData(); // Call the API when the component mounts
	  }, []);
	
	  const fetchData = async () => {
		try {
			const words = await database.getRandomWords(1);
			list = words;
			newList = [...list];
			console.log(list)
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };

	const [word, setWord] = useState(getRandomWord());
	const [options, setOptions] = useState(getOptions(word));

	return (
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
						<Text style={styles.questionText}>{word?.definition}</Text>
					</View>
				</View>
				<View style={styles.options}>
					{options?.map((opt, index) => {
						return (
							<TouchableHighlight
								key={index}
								onPress={() => {
									answerClick(opt, index);
								}}>
								<View
									style={[
										styles.option,
										ansIndex === index &&
										word.title === opt.title &&
										showNextBtn
											? styles.clickedCorrect
											: '',
										ansIndex === index &&
										word.title !== opt.title &&
										showNextBtn
											? styles.clickedIncorrect
											: '',
										word.title === opt.title && showNextBtn
											? styles.clickedCorrect
											: '',
									]}>
									<Text style={styles.optionText}>{`${String.fromCharCode(
										0x0041 + index
									)}:   ${opt.title}`}</Text>
									{word.title === opt.title && showNextBtn && (
										<Ionicons name="checkmark-circle-outline" size={20} color="green" />
									)}
									{(ansIndex === index &&
										word.title !== opt.title &&
										showNextBtn) && 
										(
											<Entypo name="circle-with-cross" size={20} color="red" />
										)}
								</View>
							</TouchableHighlight>
						);
					})}
				</View>
			</View>
			{showNextBtn && (
				<View style={{ marginTop: 30 }}>
					<TouchableHighlight style={styles.nextBtn} onPress={handleButtonClick}>
						<Text style={styles.nextBtnText}>Next</Text>
					</TouchableHighlight>
				</View>
			)}
		</Animated.View>
	);
}
