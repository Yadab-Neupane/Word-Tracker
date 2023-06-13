import { Animated, Easing, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';
import { useEffect, useRef, useState } from 'react';

export default function QuizComponent(props) {
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
							<TouchableHighlight key={index}>
								<View style={styles.option}>
									<Text style={styles.optionText}>{`A: ${opt.title}`}</Text>
								</View>
							</TouchableHighlight>
						);
					})}
				</View>
			</View>
			<View style={{ marginTop: 30 }}>
				<TouchableHighlight style={styles.nextBtn} onPress={handleButtonClick}>
					<Text style={styles.nextBtnText}>Next</Text>
				</TouchableHighlight>
			</View>
		</Animated.View>
	);
}
