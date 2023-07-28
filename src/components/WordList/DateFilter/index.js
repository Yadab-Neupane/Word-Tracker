
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import DatePicker from '../../DatePicker';
import styles from './style';
import { useTheme } from '@react-navigation/native';

export default function DateFilter({ onStartDateChange, onEndDateChange }) {
    const { colors } = useTheme()
    return (
        <>
            <View style={styles.container}>
                <View style={styles.datePickerContainer}>
                    <Text style={[styles.text, { color: colors.text }]}>Start Date <FontAwesome name="calendar" size={24} color={colors.text} />:</Text>
                    <DatePicker onDateChange={onStartDateChange}></DatePicker>
                </View>
                <View style={styles.datePickerContainer}>
                    <Text style={[styles.text, { color: colors.text }]}>End Date <FontAwesome name="calendar" size={24} color={colors.text} />:</Text>
                    <DatePicker onDateChange={onEndDateChange}></DatePicker>
                </View>
            </View>

        </>

    );
}