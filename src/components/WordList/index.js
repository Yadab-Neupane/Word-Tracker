import { ScrollView, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import WordItems from './WordItems'
import { useEffect, useState } from 'react';
import * as database from "./../../database/index";
import { useIsFocused } from "@react-navigation/native";


export default function WordList({ navigation, route, words, onDeleteWord }) {
    const isFocused = useIsFocused();
    const [listOfWords, setListOfWords] = useState([]); 
    useEffect(() => {
        (async () => {
            // to get all the words
            const getAllData = await database.getAllWords();
            setListOfWords(getAllData);
        })();
    }, [isFocused]);
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

                {listOfWords && listOfWords.map((word, index) => {
                    return (<WordItems
                        key={index}
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