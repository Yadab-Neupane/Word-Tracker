import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { lavenderColor, secondaryColor } from '../../common/includes';
import TestScreen from '../TestScreen';
import WordListScreen from '../WordListScreen';
import HomeScreen from './../Homescreen';
import uuid from 'react-uuid';

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {
	const [words, setWords] = useState([
		{
			id: uuid(),
			title: 'Car',
			description: 'a four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.',
			tags: ["bmw", "mercedesssss"]
		},
		{
			id: uuid(),
			title: 'Dog',
			description: 'a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, nonretractable claws, and a barking, howling, or whining voice.',
			tags: ["bmw", "mercedesssss"]
		},
		{
			id: uuid(),
			title: 'Cat',
			description: 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.',
			tags: ["bmw", "mercedesssss"]
		},
	]);

	const onAddNewWord = (title, description) => {
		const newWord = {
			id: uuid(),
			title: title,
			description: description,
		};
		const updatedWord = [...words]
		updatedWord.push(newWord);
		setWords(updatedWord)
	};

	const onEditWord = (value, id) => {
		const editWord = words.map((word) => {
			if (word.id === id) {
				word.title = value
			}
			return word
		})
		setWords(editWord)

	}
	const onEditDescription = (value, id) => {
		const editWord = words.map((word) => {
			if (word.id === id) {
				word.description = value
			}
			return word
		})
		setWords(editWord)

	}

	const onDeleteWord = (id) => {
		const deleteWord = words.filter((word) => word.id !== id)
		setWords(deleteWord)
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
						onEditWord={onEditWord}
						onEditDescription={onEditDescription}
						onDeleteWord={onDeleteWord}
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
