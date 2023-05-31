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

const Stack = createNativeStackNavigator();

export default function App() {
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
					<Stack.Screen
						name="Memory"
						component={MemoryComponent}
					/>
				</Stack.Navigator>
			</View>
		</NavigationContainer>
    </Provider>
	);
}
