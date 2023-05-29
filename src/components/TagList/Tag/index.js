import { Text, TouchableOpacity, View } from 'react-native'
import styles from "./style";

export default function Tag({tag}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tag}>
                {/* <Entypo name="chevron-right" size={30} color="white" /> */}
                <Text style={styles.text}>
                    {tag}
                </Text>
            </TouchableOpacity>
        </View>
    )
}