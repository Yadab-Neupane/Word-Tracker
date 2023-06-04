import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import WordItems from './WordItems'
import { useEffect } from 'react';
import * as database from "./../../database/index"


export default function WordList({ navigation, route, words, onDeleteWord }) {
    useEffect(() => {
        (async () => {
            // to get all the words
            const getAllData = await database.getAllWords();
            console.log("All Data", getAllData);
        })();
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.addButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forms')}
                    >
                        <MaterialIcons name="add-to-photos" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {words.map((word, index) => {
                    return (<WordItems
                        key={index}
                        id={word.id}
                        {...word}
                        word={word}
                        navigation={navigation}
                        onDeleteWord={onDeleteWord}
                    />
                    )
                })}

            </View>
        </ScrollView>
    )
}