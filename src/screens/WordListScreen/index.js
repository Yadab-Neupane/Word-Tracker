import Detail from "../../components/Detail";
import Form from "../../components/Form";
import WordList from "../../components/WordList";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function WordListScreen({ words, onAddNewWord }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='WordLists'

            >
                {(props) => {
                    return (
                        <WordList
                            {...props}
                            words={words}

                        />
                    )
                }}
            </Stack.Screen>

            <Stack.Screen
                name="Detail"
                options={{
                    headerTitle: "Description of word"
                }}
            >
                {(props) => {
                    return <Detail
                        {...props}
                        words={words}
                    />
                }}
            </Stack.Screen>


            <Stack.Screen
                name="Forms"
            >
                {(props) => {
                    return <Form
                        {...props}
                        onAddNewWord={onAddNewWord}
                    />
                }}
            </Stack.Screen>

        </Stack.Navigator >
    )
}