import { useEffect, useState } from "react";
import { Alert, Button, Modal, Platform, Pressable, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles.js";
import * as Notifications from 'expo-notifications';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import * as database from '../../database/index';

export default function Notification({ navigation, route }) {

    const data = [
        { value: 'red' },
        { value: 'blue' },
        { value: 'black' },
    ];

    const [userChosen, setUserChosen] = useState('')

    const [reminder, setReminder] = useState(false)
    const [schedule, setSchedule] = useState([])
    const [notificationData, setNotificationData] = useState('')
    const [random, setRandom] = useState(0)

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        (async () => {
            const previouslySchedule = await getSchedule()
            setSchedule(previouslySchedule)
            if (previouslySchedule.find((item) => item.type === 'reminder')) {
                setReminder(true)
                // 86400000
            }


            const interval = setInterval(onReminderPressHandler, 68400000);

            return () => {
                clearInterval(interval);
            };
        })()
    }, [])

    const onReminderPressHandler = async () => {
        if (!reminder) {
            const data = await database.getAllWords()

            console.log("Data length actual", data.length)
            const rand = setRandom(Math.floor(Math.random() * data.length));

            const notification = await database.getRandomWordsForNotification();
            const { title, defination } = notification;

            console.log("Random", random)
            setNotificationData(data[random])
            const scheduled = await onScheduleReminder(title, defination)
            console.log("Data random", data[random])
            if (scheduled) {
                setReminder(true)
                setSchedule(await getSchedule())
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Notification Enabled',
                    button: 'close',
                })
            }
        }
        else {
            const cancelled = await onCancelReminder()
            if (cancelled) {
                setReminder(false)
                setSchedule(await getSchedule())
                Dialog.show({
                    type: ALERT_TYPE.WARNING,
                    title: 'Warning',
                    textBody: 'Notification Disabled',
                    button: 'close',
                })
            }
        }
    }

    return (
        <View
            style={styles.mainContainer}>
            <Text
                style={styles.title}>
                Manage Notifications
            </Text>
            <View style={styles.content}>
                <Pressable
                    onPress={onReminderPressHandler}
                >
                    <Text style={styles.setNotification}>Daily push notification </Text>
                </Pressable>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={reminder ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onReminderPressHandler}
                    value={reminder}
                />

            </View>

            <View style={styles.content}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.notificaionIconColor}>Notification icon color</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.notificaionIconColor}>{!userChosen ? setUserChosen('black') : userChosen}</Text>
                </TouchableOpacity>
            </View>
            <AlertNotificationRoot />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.titleModal}>Select Notification Color</Text>
                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.eachButton}
                                    onPress={
                                        () => {
                                            setModalVisible(false)
                                            setUserChosen(item.value)
                                        }
                                    }
                                >
                                    {
                                        <Text
                                            key={index}
                                            style={styles.selectText}
                                        >{item.value}</Text>
                                    }
                                </TouchableOpacity>
                            )
                        })}
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

async function onScheduleReminder(title, defination, colour) {
    console.log("Schedule Reminder", Platform.OS)

    try {
        const getPermission = await Notifications.getPermissionsAsync()

        if (!getPermission.granted) {
            const requestPermission = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowBadge: true,
                    allowSound: true,
                }
            })
            if (!requestPermission.granted) {
                return false
            }
        }
        const kalar = colour
        console.log("Word title", title)
        console.log("Word desc", defination)

        const id = await Notifications.scheduleNotificationAsync({
            content: {
                title,
                body: defination,
                subtitle: 'Word of the day',
                badge: 1,
                priority: Notifications.AndroidNotificationPriority.HIGH,
                sound: true,
                color: kalar,
                data: {
                    type: "reminder"
                }
            },
            trigger: {
                hour: 19,
                minute: 45,
                repeats: true,
            }
        })

        console.log("Scheduling ID: ", id)
        if (!id) {
            return false
        }
        return true
    }
    catch {
        return false
    }
}


async function onCancelReminder() {
    console.log("Cancel Reminder", Platform.OS)

    let cancelled = false

    const schedule = await getSchedule()
    for (const item of schedule) {
        if (item.type === 'reminder') {
            await Notifications.cancelAllScheduledNotificationsAsync(item.id)
            cancelled = true
        }
    }
    return cancelled
}

async function getSchedule() {
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync()
    const schedule = []
    scheduledNotifications.forEach((scheduledNotification) => {
        schedule.push({
            id: scheduledNotification.identifier,
            type: scheduledNotification.content.data.type
        })
    })
    return schedule
}
