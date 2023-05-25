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
import { useState } from 'react';
import WordList from './src/components/WordList';
import FormScreen from './src/screens/FormScreen'

const Tab = createBottomTabNavigator();

export default function App() {

  const [words, setWords] = useState([
    {
      title: "Car",
      description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
    },
    {
      title: "Dog",
      description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
    },
    {
      title: "Cat",
      description: "four wheel vehicle lorem ipsum hehahahah lorem lorem",
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


  ])

  const onAddNewWord = (title, description) => {
    const newWord = {
      title: title,
      description: description
    }
    words.push(newWord)
    console.log("New Word ", title)
  }

  return (
    <NavigationContainer>
      <View style={mainStyle.container}>
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator>
          <Tab.Screen
            name='Home'

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
            {(props) => {
              return (
                <Homescreen
                  {...props}
                  words={words}
                />
              )
            }}

          </Tab.Screen>

          <Tab.Screen
            name='Word'

            options={{
              tabBarInactiveTintColor: lavenderColor,
              tabBarActiveTintColor: secondaryColor,
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                const icon = focused ? "category" : "category"
                return <MaterialIcons name={icon} size={size} color={color} />
              }
            }}
          // component={WordListScreen}
          >
            {(props) => {
              return (
                <WordListScreen
                  {...props}
                  words={words}
                  onAddNewWord={onAddNewWord}
                />
              )
            }}
          </Tab.Screen>
        </Tab.Navigator>

      </View >
    </NavigationContainer >

  );
}