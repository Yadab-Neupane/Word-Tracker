import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import * as database from '../../database/index';

export default function Home(props) {
	const [data, setData] = useState({
		words: 0,
		quiz: 0,
		bookmark: 0,
	});

	useEffect(() => {
		(async () => {
			fetchData();
		})();
	}, []);

	const fetchData = async () => {
		try {
			let temp = {};
			let records = await database.getRecords();
			records.forEach((element) => {
				console.log(element.Count);
				switch (element.Description) {
					case 'Words':
						temp.words = element.Count;
						break;
					case 'Quiz':
						temp.quiz = element.Count;
						break;
					case 'Bookmark':
						temp.bookmark = element.Count;
						break;
				}
			});
			setData(temp);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const openBookmark = () => {
		props.navigation.push("Bookmark");
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.card1}>
					<View style={styles.verticalOrientation}>
						<Text style={styles.cardLabelsTitle}>Your Progress !</Text>
						<Text style={styles.cardLabels}>Total Words: {data.words}</Text>
						<Text style={styles.cardLabels}>Attempted Quiz: 1</Text>
						<Text style={styles.cardLabels}>Bookmarked Words: 40</Text>
					</View>
					<Image
						style={styles.image}
						source={require('../../../assets/artificial-intelligence.png')}
					/>
				</View>

				<View style={styles.card2}>
					<View style={styles.verticalOrientation}>
						<Text style={styles.cardLabelsTitle}>Quizzes</Text>
						<Text style={styles.cardLabels}>Attempted Quiz: {data.quiz}</Text>
					</View>
					<Image style={styles.image} source={require('../../../assets/quiz.png')} />
				</View>

				<TouchableHighlight style={{ borderRadius: 12 }} onPress={openBookmark}>
					<View style={styles.card3}>
						<View style={styles.verticalOrientation}>
							<Text style={styles.cardLabelsTitle}>Bookmarks</Text>
							<Text style={styles.cardLabels}>Bookmarked Words: {data.bookmark}</Text>
						</View>
						<Image style={styles.image} source={require('../../../assets/book.png')} />
					</View>
				</TouchableHighlight>
			</View>
		</ScrollView>
	);
}
