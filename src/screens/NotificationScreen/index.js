import Notification from "../../components/Notification";
import { createStackNavigator } from '@react-navigation/stack';
import RadioButton from "../../components/RadioButton";


const Stack = createStackNavigator();

export default function NotificationScreen({ words, data }) {
    return (
        <Stack.Navigator>

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name='Notification'
            >
                {(props) => {
                    return (
                        <Notification
                            {...props}
                            words={words}
                            data={data}

                        />
                    )
                }}

            </Stack.Screen>

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="RadioButton"
            >
                {(props) => {
                    return (
                        <RadioButton
                            data={data} />
                    )
                }}

            </Stack.Screen>
        </Stack.Navigator >

    )
}