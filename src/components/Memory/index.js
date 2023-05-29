import { Text, View } from "react-native";
import styles from "./styles";
import Flashcard from "../Flashcard";

export default function MemoryComponent() {
    return (
        <View style={styles.container}>
            <Flashcard></Flashcard>
        </View>
    );
}