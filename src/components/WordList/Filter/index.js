import { TouchableOpacity, Text, View } from "react-native";
import { blueColor } from "../../../common/includes";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { useState } from "react";

export default function Filter({ tag , addTagsToBeFiltered}) {
    const [isTagSelected, setIsTagSelected] = useState(false);
    const onTagClick = () => {
        setIsTagSelected(!isTagSelected);
        addTagsToBeFiltered(tag.tag)
    };

    return (
        <TouchableOpacity key={tag.id} style={styles.tag} onPress={onTagClick}>
            <View style={[styles.tagContainer,
            isTagSelected ? styles.tagSelected : styles.tagUnSelected]}>
                <Text style={styles.text}>
                    {tag.tag}
                </Text>
                {isTagSelected &&
                    <Ionicons
                        name="checkmark-circle-outline"
                        size={20}
                        color={blueColor}
                    />
                }
            </View>
        </TouchableOpacity>
    );

} 