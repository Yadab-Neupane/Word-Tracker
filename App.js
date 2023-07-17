import { StatusBar } from 'expo-status-bar';
import { View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import mainStyle from './src/common/mainStyles';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MemoryComponent from './src/components/Memory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './src/screens/TabScreen';
import { useEffect } from 'react';

import * as database from './src/database/index';
import QuizComponent from './src/components/Quiz';

const Stack = createNativeStackNavigator();

export default function App() {
	useEffect(() => {
		(async () => {
			try {
				// to create or check if db exist
				const [wordDbExists, TagDbExists, QuizDbExists] = await Promise.all([
					database.createWordDb(),
					database.createTagDb(),
					database.createQuizDb(),
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

	return (
		<Provider store={store}>
			<NavigationContainer>
				<View style={mainStyle.container}>
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
	);
}
