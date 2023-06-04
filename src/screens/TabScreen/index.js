import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { lavenderColor, secondaryColor } from '../../common/includes';
import TestScreen from '../TestScreen';
import WordListScreen from '../WordListScreen';
import HomeScreen from './../Homescreen';
import * as database from "./../../database/index"

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {
	const [words, setWords] = useState([]);

	const onAddNewWord = (title, description) => {
		const newWord = {
			title: title,
			description: description,
		};
		const updatedWord = [...words]
		updatedWord.push(newWord);
		setWords(updatedWord)
	}

	const onUpdateButtonPressed = async (id, title, description) => {
		const editWord = await database.updateWord(id, title, description)
		setWords(editWord)
	}

	const onDeleteWord = async (id) => {
		const data = await database.deleteWordById(id)
		setWords(data)
	}
	return (
		<Tab.Navigator>
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
				}}
			>
				{(props) => {
					return <WordListScreen
						{...props}
						words={words}
						onAddNewWord={onAddNewWord}
						onDeleteWord={onDeleteWord}
						onUpdateButtonPressed={onUpdateButtonPressed}
					/>;
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
						const icon = focused ? 'category' : 'category';
						return <MaterialIcons name={icon} size={size} color={color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}
