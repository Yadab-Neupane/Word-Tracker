import { StatusBar } from 'expo-status-bar';
import { View, Alert, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import mainStyle from './src/common/mainStyles';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MemoryComponent from './src/components/Memory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './src/screens/TabScreen';
import React, { useEffect, useState } from 'react';
import * as database from './src/database/index';
import QuizComponent from './src/components/Quiz';
import AppLightTheme from './src/themes/AppLightTheme'
import AppDarkTheme from './src/themes/AppDarkTheme'
import ThemeContext from './src/themes/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App() {
	const colorScheme = useColorScheme()
	const [theme, setTheme] = useState('light');
	const themeData = { theme, setTheme };
	useEffect(() => {
		(async () => {
			try {
				const [wordDbExists, TagDbExists, QuizDbExists] = await Promise.all([
					database.createWordDb(),
					database.createTagDb(),
					database.createQuizDb(),
					database.createGoalDb(),
				]);
				if (wordDbExists && TagDbExists && QuizDbExists) {
				} else {
					Alert.alert('Error', `Error connecting to db`, []);
				}
			} catch (error) {
				Alert.alert('Error', `Error connecting to db`, []);
			}
		})();
	}, []);

	const themeStyle = theme === 'light' ? AppLightTheme : AppDarkTheme

	return (
		<ThemeContext.Provider value={themeData}>
			<Provider store={store}>
				<NavigationContainer
					theme={themeStyle}
				>
					<View style={[mainStyle.container, themeStyle]}>
						<StatusBar style="auto" />
						<Header />
						<Stack.Navigator>
							<Stack.Screen
								name="Tab"
								component={TabScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen name="Memory">
								{(props) => {
									return <MemoryComponent {...props} />;
								}}
							</Stack.Screen>
							<Stack.Screen
								name="Quiz"
								options={{ headerBackVisible: false, gestureEnabled: false }}>
								{(props) => {
									return <QuizComponent {...props} />;
								}}
							</Stack.Screen>
						</Stack.Navigator>
					</View>
				</NavigationContainer>
			</Provider>
		</ThemeContext.Provider>
	);
}
