import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { lavenderColor, secondaryColor } from '../../common/includes';
import TestScreen from '../TestScreen';
import WordListScreen from '../WordListScreen';
import HomeScreen from './../HomeScreen';
import * as database from './../../database/index';
import { View } from 'react-native';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {
	// useEffect(() => {
	// 	async () => {
	// 		try {
	// 			const data = await database.getAllWords()
	// 		}
	// 		catch (e) {
	// 			console.log("Error", e)
	// 		}
	// 	}
	// }, [])
	const [words, setWords] = useState([]);

	const onAddNewWord = (title, description) => {
		const newWord = {
			title: title,
			description: description,
		};
		const updatedWord = [...words];
		updatedWord.push(newWord);
		setWords(updatedWord);
	};

	const onUpdateButtonPressed = async (id, title, description) => {
		const editWord = await database.updateWord(id, title, description);
		setWords(editWord);
	};

	const onDeleteWord = async (id) => {
		const data = await database.deleteWordById(id);
		setWords(data);
	};
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { paddingBottom: 10, paddingTop: 5, height: 60 },
			}}>
			<Tab.Screen
				name="Home"
				options={{
					tabBarInactiveTintColor: lavenderColor,
					tabBarActiveTintColor: secondaryColor,
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						const icon = focused ? 'ios-home-sharp' : 'home-outline';
						return <Ionicons name={icon} size={24} color={color} />;
					},
				}}>
				{(props) => {
					return <HomeScreen {...props} words={words} />;
				}}
			</Tab.Screen>

			<Tab.Screen
				name="Word"
				options={{
					tabBarInactiveTintColor: lavenderColor,
					tabBarActiveTintColor: secondaryColor,
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						const icon = focused ? 'category' : 'category';
						return <MaterialIcons name={icon} size={size} color={color} />;
					},
				}}>
				{(props) => {
					return (
						<WordListScreen
							{...props}
							words={words}
							onAddNewWord={onAddNewWord}
							onDeleteWord={onDeleteWord}
							onUpdateButtonPressed={onUpdateButtonPressed}
						/>
					);
				}}
			</Tab.Screen>
			<Tab.Screen
				name="Test"
				component={TestScreen}
				options={{
					tabBarInactiveTintColor: lavenderColor,
					tabBarActiveTintColor: secondaryColor,
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						const icon = !focused ? 'book-search-outline' : 'book-search';
						return <MaterialCommunityIcons name={icon} size={size} color={color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}
