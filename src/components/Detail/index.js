import { View, Text } from "react-native";
import TagList from "../TagList";
import styles from "./style";

export default function Detail({ words }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>{words[0].description}</Text>
            </View>
            <View style={styles.tag}>
                <Text style={styles.tagHeader}>
                    Tags:
                </Text>
                <View style={styles.taglistContainer}>
                    <TagList >
                    </TagList>
                </View>

            </View>
        </View>
    )
}