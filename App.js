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
import { useEffect, useState } from 'react';
import WordList from './src/components/WordList';
import FormScreen from './src/screens/FormScreen'
// import RNFS from 'react-native-fs';

const Tab = createBottomTabNavigator();

export default function App() {

  const [words, setWords] = useState([
    {
      title: "Car",
      description: "1 four wheel vehicle lorem ipsum hehahahah lorem lorem",
    },
    {
      title: "Dog",
      description: "2 four wheel vehicle lorem ipsum hehahahah lorem lorem",
    },
    {
      title: "Cat",
      description: "3 four wheel vehicle lorem ipsum hehahahah lorem lorem",
    },
  ])


  // const writeToJSONFile = async (data) => {
  //   data = {
  //     title: title,
  //     description: description
  //   }
  //   const path = RNFS.DocumentDirectoryPath + '/db.json';

  //   try {
  //     await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
  //     console.log('Data written to the file successfully!', data);
  //   } catch (error) {
  //     console.log('Error writing to the file:', error);
  //   }
  // };

  const onAddNewWord = (title, description) => {
    const newWord = {
      title: title,
      description: description
    }
    words.push(newWord)
    console.log("New Word ", newWord)
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
                // writeToJSONFile={writeToJSONFile}
                />
              )
            }}
          </Tab.Screen>
        </Tab.Navigator>

      </View >
    </NavigationContainer >

  );
}