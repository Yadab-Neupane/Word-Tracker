import Detail from "../../components/Detail";
import Form from "../../components/Form";
import Notification from "../../components/Notification";
import WordList from "../../components/WordList";
import ShareWords from "../../components/ShareWords";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function WordListScreen({ words, onAddNewWord, onEditWord, onEditDescription, onDeleteWord, onUpdateButtonPressed }) {
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
                            onDeleteWord={onDeleteWord}
                        />
                    )
                }}
            </Stack.Screen>

            <Stack.Screen
                name="Detail"
                options={({ route }) => ({
                    headerTitle: "Definition",
                    headerRight: () => (
                        <ShareWords word={route.params.word} />
                    ),
                })}
            >
                {(props) => {
                    return <Detail
                        {...props}
                        onEditWord={onEditWord}
                        onEditDescription={onEditDescription}
                        onDeleteWord={onDeleteWord}
                        onUpdateButtonPressed={onUpdateButtonPressed}
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

            {/* <Stack.Screen
                name="Notification"
            >
                {(props) => {
                    return <Notification
                        {...props}
                    />
                }}

            </Stack.Screen> */}

        </Stack.Navigator >
    )
}