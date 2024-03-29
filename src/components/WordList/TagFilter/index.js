import { TouchableOpacity, Text, View } from "react-native";
import { blueColor, maxCharacters } from "../../../common/includes";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { useState } from "react";

export default function TagFilter({ tag, addTagsToBeFiltered }) {
    const [isTagSelected, setIsTagSelected] = useState(false);
    const onTagClick = () => {
        setIsTagSelected(!isTagSelected);
        addTagsToBeFiltered(tag.tag)
    };

    return (
        <TouchableOpacity key={tag.id} style={styles.tag} onPress={onTagClick}>
            <View style={[styles.tagContainer,
            isTagSelected ? styles.tagSelected : styles.tagUnSelected]}>
                <Text numberOfLines={1} style={styles.text}>
                    {tag.tag.length > maxCharacters
                        ? `${tag.tag.substring(0, maxCharacters)}...`
                        : tag.tag
                    }
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