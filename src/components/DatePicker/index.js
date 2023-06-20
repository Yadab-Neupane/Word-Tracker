import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, Pressable, Platform } from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function DatePicker({onDateChange}){

    const [date, setDate] = useState(new Date());
    const [showStartDatePicker, setStartDateShowPicker] = useState(false);
    const [startDate, setStartDate] = useState('')

    const toggleStartDatePicker = () => {
        setStartDateShowPicker(!showStartDatePicker);
    }

    const onStartDatePickerChange = ({ type }, selectedDate) => {
        if (type == "set") {
            toggleStartDatePicker();
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === 'android') {
                setStartDate(currentDate.toDateString());
                onDateChange(currentDate);
            }
        }
        else {
            toggleStartDatePicker();
        }
    }

    return (
        <View style={styles.container}>
            {showStartDatePicker &&
                (<DateTimePicker
                    mode='date'
                    display='spinner'
                    value={date}
                    onChange={onStartDatePickerChange}
                >
                </DateTimePicker>)}
            {!showStartDatePicker &&
                <Pressable
                    onPress={toggleStartDatePicker}>
                    <TextInput
                        style={styles.input}
                        value={startDate}
                        placeholder='Select date'
                        editable={false}
                    >
                    </TextInput>
                </Pressable>
            }
        </View>
    );
}