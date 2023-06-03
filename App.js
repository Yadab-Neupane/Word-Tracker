import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
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

const Stack = createNativeStackNavigator();

export default function App() {

	useEffect(() => {
		//database.deleteDb();
		const db = database.createDb();

		(async () => {

			//to delete word
			//let del = await database.deleteAllWords();
			//console.log("Delete", del);

			//to add word
			// const addData1 = await database.addWord("bmw", "its a carr");
			// console.log(addData1);

			//to add word
			// const addData2 = await database.addWord("cat", "meowwww");
			// console.log(addData2);

			//to get all the words
			//const getAllData = await database.getAllWords();
			//console.log(getAllData);

			//to get word by id
			//const getDataById = await database.getWordById('ac59e31b-e429-4689-ba12-84b622081d8d');
			//console.log(getDataById);

			//to udpate word
			//const updateData = await database.updateWord('ac59e31b-e429-4689-ba12-84b622081d8d', 'chicken', 'I am a chicken');
			//console.log(updateData);

			//to get word
			//const getUpdatedDataById = await database.getWordById('ac59e31b-e429-4689-ba12-84b622081d8d');
			//console.log(getUpdatedDataById);
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
					</Stack.Navigator>
				</View>
			</NavigationContainer>
		</Provider>
	);
}
