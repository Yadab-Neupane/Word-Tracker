import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestScreen from '../TestScreen';
import WordListScreen from '../WordListScreen';
import HomeScreen from './../HomeScreen';
import * as database from './../../database/index';
import NotificationScreen from '../NotificationScreen';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabScreen(props) {
<<<<<<< HEAD
	const { colors } = useTheme()

=======
>>>>>>> 781cf9551ce2c4f0ee06f8d4beb61ad26ce4aa4e
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
				tabBarStyle: { paddingBottom: 10, paddingTop: 5, height: 60, backgroundColor: colors.tab },
			}}>
			<Tab.Screen
				name="Home"
				options={{
					tabBarInactiveTintColor: colors.inactiveTab,
					tabBarActiveTintColor: colors.activeTab,
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
					tabBarInactiveTintColor: colors.inactiveTab,
					tabBarActiveTintColor: colors.activeTab,
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						const icon = focused ? 'appstore1' : 'appstore-o';
						return <AntDesign name={icon} size={size} color={color} />;
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
					tabBarInactiveTintColor: colors.inactiveTab,
					tabBarActiveTintColor: colors.activeTab,
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						const icon = focused ? 'ios-school' : 'ios-school-outline';
						return <Ionicons name={icon} size={size} color={color} />;
					},
				}}
			/>
			<Tab.Screen
				name="Settings"
				options={{
					tabBarInactiveTintColor: colors.inactiveTab,
					tabBarActiveTintColor: colors.activeTab,
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => {
						const icon = focused ? 'settings-sharp' : 'settings-outline';
						return <Ionicons name={icon} size={24} color={color} />;
					},
				}}>
				{(props) => {
					return <NotificationScreen {...props} words={words} />;
				}}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
