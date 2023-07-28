
import { View, Text } from 'react-native';
import styles from './style';
import * as Progress from 'react-native-progress';
import { lavenderColor } from '../../common/includes';

export default function ProgressBar({ label, goal, current }) {
    return (
        <View style={styles.progressContainer}>
            <Text style={styles.cardLabels}>{label}</Text>
            <Progress.Bar progress={goal && goal != 0 && current ? current / goal : 0} width={200} color={lavenderColor} />
            <View style={styles.progressInfo}>
                <Text style={styles.progressLabels}>Current : {current ? current : 0}</Text>
                <Text style={styles.progressLabels}>Goal: {goal ? goal : 0}</Text>
            </View>
        </View>
    );
}