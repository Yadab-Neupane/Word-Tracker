import { Switch, Text, View } from "react-native";
import * as Notifications from 'expo-notifications';
import styles from "./styles";
import { useEffect, useState } from "react";


export default function Notification(navigation, route) {
    const [notification, setNotification] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Notification </Text>
            <View>
                <Text style={styles.setNotification}>Set push notification daily </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </View>
        </View >
    )

}