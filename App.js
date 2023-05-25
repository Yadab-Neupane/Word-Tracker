import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './src/screens/Homescreen';
import WordListScreen from './src/screens/WordListScreen';
import mainStyle from './src/common/mainStyles';
import { Ionicons } from '@expo/vector-icons';
import { lavenderColor, secondaryColor } from './src/common/includes';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './src/components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={mainStyle.container}>
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator>
          <Tab.Screen
            name='Home'
            component={Homescreen}
            options={{
              tabBarInactiveTintColor: lavenderColor,
              tabBarActiveTintColor: secondaryColor,
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                const icon = focused ? "ios-home-sharp" : "home-outline"
                return <Ionicons name={icon} size={24} color={color} />
              }
            }}
          >
            {/* {(props) => {
              return (
                <Homescreen
                  {...props}
                />
              )
            }} */}

          </Tab.Screen>

          <Tab.Screen
            name='Word'
            component={WordListScreen}
            options={{
              tabBarInactiveTintColor: lavenderColor,
              tabBarActiveTintColor: secondaryColor,
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                const icon = focused ? "category" : "category"
                return <MaterialIcons name={icon} size={size} color={color} />
              }
            }}
          >
          </Tab.Screen>
        </Tab.Navigator>

      </View >
    </NavigationContainer >

  );
}