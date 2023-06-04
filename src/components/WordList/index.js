import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import WordItems from './WordItems'
import { useEffect, useState } from 'react';
// import { useIsFocused } from "@react-navigation/native";
import * as database from "./../../database/index"


export default function WordList({ navigation, route, words, onDeleteWord }) {
    // const isFocused = useIsFocused()

    useEffect(() => {
        // (async () => {
        //     let arr = [];
        //     const wordLists = await database.getAllCategories();
        //     for (let index = 0; index < categories.length; index++) {
        //         const cat = categories[index];
        //         arr.push({
        //             key: cat.id,
        //             value: cat.name
        //         });
        //     }
        //     setCategoriesSelectList(arr);
        // })();
        (async () => {
            // to get all the words
            const getAllData = await database.getAllWords();
            console.log(getAllData);
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