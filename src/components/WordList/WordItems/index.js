import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { Feather, Ionicons } from '@expo/vector-icons';
import { lavenderColor } from "../../../common/includes";
import { useState } from "react";
import * as database from '../../../database/index';

export default function WordItems({ navigation, route, word }) {
    const [isBookmarked, setIsBookMarked] = useState(word.isBookmarked);


    const toggleBookmark = async () => {
        try {
            const update = await database.updateBookmark(word.id, isBookmarked == 1 ? 0 : 1);
            console.log(update);
        } catch (error) {
            console.log(error);
        }

        if (isBookmarked == 1) setIsBookMarked(0);
        else setIsBookMarked(1);
    };

    return (
        <>
            <View
                style={styles.container}
            >
                <View
                    style={styles.card}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={
                                [styles.cardText,
                                { fontSize: 40 }]
                            }
                        >
                            {word.title}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Detail", { word })}
                            style={{ marginTop: 15 }}
                        >
                            <Feather
                                name="arrow-right-circle" size={24} color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ flexDirection: 'column' }}
                    >
                        <Text numberOfLines={1}
                            style=
                            {[styles.cardDescription,
                            { fontSize: 18 }]}
                        >
                            {word.defination}
                        </Text>
                    </View>
                </View>
            </View>


            {isBookmarked == 1 ?
                <TouchableOpacity
                    onPress={toggleBookmark}
                    style={styles.bookmarkButton}
                >
                    <Ionicons name="md-bookmarks" size={30} color={lavenderColor} />
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={toggleBookmark}
                    style={styles.bookmarkButton}
                >
                    <Ionicons name="md-bookmarks-outline" size={30} color={lavenderColor} />
                </TouchableOpacity>}

        </>

    )
}