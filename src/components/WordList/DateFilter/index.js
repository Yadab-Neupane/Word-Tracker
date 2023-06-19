
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import DatePicker from '../../DatePicker';
import styles from './style';

export default function DateFilter({ onStartDateChange, onEndDateChange }) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.datePickerContainer}>
                    <Text style={styles.text}>Start Date <FontAwesome name="calendar" size={24} color="black" />:</Text>
                    <DatePicker onDateChange={onStartDateChange}></DatePicker>
                </View>
                <View style={styles.datePickerContainer}>
                    <Text style={styles.text}>End Date <FontAwesome name="calendar" size={24} color="black" />:</Text>
                    <DatePicker onDateChange={onEndDateChange}></DatePicker>
                </View>
            </View>

        </>

    );
}