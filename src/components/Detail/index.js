import { View, Text } from "react-native";
import TagList from "../TagList";
import styles from "./style";

export default function Detail({navigation, route}) {
    const word = route.params.word;
    console.log("Words:" , word);
    return (
        <View style={styles.container}>
            <View>
                <Text>{word.description}</Text>
            </View>
            <View style={styles.tag}>
                <Text style={styles.tagHeader}>
                    Tags:
                </Text>
                <View style={styles.taglistContainer}>
                    <TagList tags={word.tags}>
                    </TagList>
                </View>

            </View>
        </View>
    )
}