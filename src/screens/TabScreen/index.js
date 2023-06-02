import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { lavenderColor, secondaryColor } from '../../common/includes';
import TestScreen from '../TestScreen';
import WordListScreen from '../WordListScreen';
import HomeScreen from './../Homescreen';

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {


	const [words, setWords] = useState([
		{
			title: 'Car',
			description: 'four wheel vehicle lorem ipsum hehahahah lorem lorem',
			tags: ["bmw", "mercedesssss"]
		},
		{
			title: 'Dog',
			description: 'four wheel vehicle lorem ipsum hehahahah lorem lorem',
			tags: ["bmw", "mercedesssss"]
		},
		{
			title: 'Cat',
			description: 'four wheel vehicle lorem ipsum hehahahah lorem lorem',
			tags: ["bmw", "mercedesssss"]
		},
		// {
		//   word: "Cow",
		//   description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
		// },
		// {
		//   word: "Hair",
		//   description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
		// },
		// {
		//   word: "Phone",
		//   description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
		// },
		// {
		//   word: "Mobile",
		//   description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
		// },
	]);

	const onAddNewWord = (title, description) => {
		const newWord = {
			title: title,
			description: description,
		};
		words.push(newWord);
		console.log('New Word ', title);
	};

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
			// component={WordListScreen}
			>
				{(props) => {
					return <WordListScreen {...props} words={words} onAddNewWord={onAddNewWord} />;
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
