import { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import styles from './style';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as database from '../../database/index';
import { useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { setIsUpdated } from '../../redux/goalUpdateSlice';

export default function Goals(props) {
    const dispatch = useDispatch();
    const firstUpdate = useRef(true);
    const isGoalUpdated = useSelector((state) => state.goalUpdate.isUpdated);

    const [modalVisible, setModalVisible] = useState(false);
    const [dailyGoal, setDailyGoal] = useState('');
    const [weeklyGoal, setWeeklyGoal] = useState('');
    const [monthlyGoal, setMonthlyGoal] = useState('');

    const [dailyGoalValid, setDailyGoalValid] = useState(false);
    const [weeklyGoalValid, setWeeklyGoalValid] = useState(false);
    const [monthlyGoalValid, setMonthlyGoalValid] = useState(false);


    const [records, setRecords] = useState({
        daily: 0,
        weekly: 0,
        monthly: 0,
    });

    const [currentData, setCurrentData] = useState({
        daily: 0,
        weekly: 0,
        monthly: 0,
    });

    const onGoalsContainerPress = () => {
        setModalVisible(true);
    }

    useEffect(() => {
        if (firstUpdate.current || isGoalUpdated || props.refreshing) {
            (async () => {
                fetchData();
            })();
        }
    }, [isGoalUpdated, props.refreshing]);

    const fetchData = async () => {
        try {
            let rec = await database.getGoals();

            let tempRecords = {};
            if (rec) {
                tempRecords.daily = rec.daily;
                tempRecords.weekly = rec.weekly;
                tempRecords.monthly = rec.monthly;
                setDailyGoal(rec.daily);
                setWeeklyGoal(rec.weekly);
                setMonthlyGoal(rec.monthly);
            }
            else{
                setDailyGoal(0);
                setWeeklyGoal(0);
                setMonthlyGoal(0);
            }
            setRecords(tempRecords);

            let tempCurrent = {};
            let getCurrentRecords = await database.getCurrentRecords();
            getCurrentRecords.forEach((element) => {
                switch (element.column) {
                    case 'daily':
                        tempCurrent.daily = element.count;
                        break;
                    case 'weekly':
                        tempCurrent.weekly = element.count;
                        break;
                    case 'monthly':
                        tempCurrent.monthly = element.count;
                        break;
                }
            });
            setCurrentData(tempCurrent);
            dispatch(setIsUpdated(false));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSaveGoals = async () => {
        try {
            if (!dailyGoalValid || !weeklyGoalValid || !monthlyGoalValid) {
                Alert.alert(
                    'Warning',
                    'Cannot proceed!! Invalid data.',
                    [
                        {
                            text: 'OK',
                        },
                    ]
                );
            }
            else {
                await database.addGoals(dailyGoal, weeklyGoal, monthlyGoal);
                setModalVisible(false);
                dispatch(setIsUpdated(true));
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onDailyGoalChange = (text) => {
        setDailyGoal(text);
        const isValid = text.trim() !== '' && /^[1-9]\d*(\.\d+)?$/.test(text);
        setDailyGoalValid(isValid);
    }

    const onWeeklyGoalChange = (text) => {
        setWeeklyGoal(text);
        const isValid = text.trim() !== '' && /^[1-9]\d*(\.\d+)?$/.test(text);
        setWeeklyGoalValid(isValid);
    }

    const onMonthlyGoalChange = (text) => {
        setMonthlyGoal(text);
        const isValid = text.trim() !== '' && /^[1-9]\d*(\.\d+)?$/.test(text);
        setMonthlyGoalValid(isValid);
    }

    return (
        <>
            <View style={styles.card}>
                <View style={styles.card.infoHeader}>
                    <View style={styles.card.info}>
                        <Text style={styles.cardLabelsTitle}>Goals</Text>
                        <ProgressBar label="Daily" goal={records.daily} current={currentData.daily} />
                        <ProgressBar label="Weekly" goal={records.weekly} current={currentData.weekly} />
                        <ProgressBar label="Monthly" goal={records.monthly} current={currentData.monthly} />
                    </View>
                    <Image style={styles.image} source={require('../../../assets/goal.png')} />
                </View>
                <TouchableOpacity
                    style={[styles.goalButton, styles.floatButton]}
                    onPress={onGoalsContainerPress}>
                    <MaterialCommunityIcons name="comment-edit" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <Modal visible={modalVisible} animationType={'fade'} transparent={true}>
                <View style={styles.containerModal}>
                    <View style={styles.modalGroup}>
                        <View style={styles.titleModal}>
                            <Text style={styles.title}>Set Goals</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Entypo name="circle-with-cross" size={28} color="red" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.formLabel}>Daily</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Daily (words)"
                                keyboardType="numeric"
                                value={dailyGoal.toString()}
                                onChangeText={onDailyGoalChange}
                            />
                            <Text style={styles.formLabel}>Weekly</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Weekly (words)"
                                keyboardType="numeric"
                                value={weeklyGoal.toString()}
                                onChangeText={onWeeklyGoalChange}
                            />
                            <Text style={styles.formLabel}>Monthly</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Monthly (words)"
                                keyboardType="numeric"
                                value={monthlyGoal.toString()}
                                onChangeText={onMonthlyGoalChange}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={handleSaveGoals}>
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};