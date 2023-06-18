import { View } from "react-native";
import styles from "./styles";
import Flashcard from "../Flashcard";

export default function MemoryComponent(props) {
    return (
        <View style={styles.container}>
            <Flashcard {...props}></Flashcard>
        </View>
    );
}