import { Dimensions, Image, ScrollView, Text, RefreshControl, View, useColorScheme } from 'react-native';
import styles from './styles';
import React, { useEffect, useState } from 'react';
import * as database from '../../database/index';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { useTheme } from '@react-navigation/native';

export default function Home(props) {
	const { colors } = useTheme()

	const [data, setData] = useState({
		words: 0,
		quiz: 0,
		bookmark: 0,
	});
	const [wordGraphData, setWordGraphData] = useState();
	const [quizGraphData, setQuizGraphData] = useState();
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		fetchData();
	}, []);

	useEffect(() => {
		(async () => {
			setTimeout(() => {
				fetchData();
			});
		})();
	}, []);

	const fetchData = async () => {
		try {
			let temp = {};
			let records = await database.getRecords();
			let wordData = await database.getWordCountByDay();
			let quizData = await database.getQuizResults();

			setRefreshing(false);

			populateWordGraph(wordData);
			populateQuizGraph(quizData);

			records.forEach((element) => {
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

	const populateWordGraph = (wordCount) => {
		const wordGraphTemp = {
			labels: [],
			datasets: [
				{
					data: [],
				},
			],
		};
		wordCount.forEach((i) => {
			const date = new Date(i.date);
			wordGraphTemp.labels.push([date.getMonth() + 1, date.getDate()].join('/'));
			wordGraphTemp.datasets[0].data.push(i.words);
		});
		setWordGraphData(wordGraphTemp);
	};

	const populateQuizGraph = (quizData) => {
		const quizGraphTemp = {
			labels: [],
			datasets: [
				{
					data: [],
				},
			],
		};
		quizData.forEach((i, index) => {
			quizGraphTemp.labels.push(`Q ${index + 1}`);
			quizGraphTemp.datasets[0].data.push((i.correct / 5) * 100);
		});
		setQuizGraphData(quizGraphTemp);
	};

	return (
		<ScrollView
			refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
			<View style={[styles.container, { backgroundColor: colors.background }]}>
				<View style={styles.card}>
					<View style={styles.card.infoHeader}>
						<View style={styles.card.info}>
							<Text style={styles.cardLabelsTitle}>Progress !</Text>
							<Text style={styles.cardLabels}>Total Words: {data.words}</Text>
						</View>
						<Image
							style={styles.image}
							source={require('../../../assets/artificial-intelligence.png')}
						/>
					</View>

					{wordGraphData && wordGraphData.labels.length > 0 ? (
						<View
							style={{
								marginTop: 15,
							}}>
							<Text style={styles.cardLabels}>Last 5 Additions</Text>
							<BarChart
								style={{
									marginTop: 15,
									marginLeft: -50
								}}
								data={wordGraphData}
								width={Dimensions.get('window').width - 50}
								height={180}
								chartConfig={{
									backgroundGradientFrom: '#000',
									backgroundGradientFromOpacity: 0,
									backgroundGradientTo: '#000',
									backgroundGradientToOpacity: 0,
									color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
									barPercentage: 0.7,
								}}
								withInnerLines={false}
								fromZero={true}
								showValuesOnTopOfBars={true}
								withHorizontalLabels={false}
							/>
						</View>
					) : (
						<View
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 20,
							}}>
							<Text style={styles.cardLabels}>No Data</Text>
						</View>
					)}
				</View>
				<View style={styles.card}>
					<View style={styles.card.infoHeader}>
						<View style={styles.card.info}>
							<Text style={styles.cardLabelsTitle}>Quizzes</Text>
							<Text style={styles.cardLabels}>Attempted Quiz: {data.quiz}</Text>
						</View>
						<Image style={styles.image} source={require('../../../assets/quiz.png')} />
					</View>

					{quizGraphData && quizGraphData.labels.length > 0 ? (
						<View
							style={{
								marginTop: 15,
							}}>
							<Text style={{ color: 'white' }}>Last 5 Quiz</Text>
							<LineChart
								style={{
									marginTop: 15,
								}}
								data={quizGraphData}
								width={Dimensions.get('window').width - 90}
								height={180}
								chartConfig={{
									yAxisSuffix: '%',
									backgroundGradientFrom: '#000',
									backgroundGradientFromOpacity: 0,
									backgroundGradientTo: '#000',
									backgroundGradientToOpacity: 0,
									color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								}}
								yAxisSuffix="%"
								withInnerLines={false}
								fromZero={true}
								verticalLabelRotation={0}
							/>
						</View>
					) : (
						<View
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: 20,
							}}>
							<Text style={styles.cardLabels}>No Data</Text>
						</View>
					)}
				</View>

				<View style={styles.card}>
					<View style={styles.card.infoHeader}>
						<View style={styles.card.info}>
							<Text style={styles.cardLabelsTitle}>Bookmarks</Text>
							<Text style={styles.cardLabels}>Bookmarked Words: {data.bookmark}</Text>
						</View>
						<Image style={styles.image} source={require('../../../assets/book.png')} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
