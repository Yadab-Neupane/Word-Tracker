import Notification from "../../components/Notification";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function NotificationScreen({ words }) {
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
                        />
                    )
                }}

            </Stack.Screen>
        </Stack.Navigator >

    )
}