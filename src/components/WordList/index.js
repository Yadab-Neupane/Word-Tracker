import { ScrollView, TouchableOpacity, View, TextInput, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import WordItems from './WordItems'
import { useEffect, useState } from 'react';
import * as database from "./../../database/index";
import { useIsFocused } from "@react-navigation/native";
import { Feather, Entypo } from "@expo/vector-icons";


export default function WordList({ navigation, route, onDeleteWord }) {
    const isFocused = useIsFocused();
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [listOfWords, setListOfWords] = useState([]);

    useEffect(() => {
        if (searchPhrase) {
            (async () => {
                const getAllData = await database.getAllWordsByTitle(searchPhrase);
                setListOfWords(getAllData);
            })();
        }
        else {
            (async () => {
                const getAllData = await database.getAllWords();
                setListOfWords(getAllData);
            })();
        }

    }, [isFocused, searchPhrase]);

    const onSearchCancelled = () => {
        setClicked(false);
        setSearchPhrase('');
    };

    const onSearchFocused = () => {
        setClicked(true);
    };

    const onSearchTextChange = (val) => {
        setSearchPhrase(val);
    };

    const sortArray = async () => {
        const sortAllData = await database.getAllWords();
        sortAllData.sort((a, b) => b.createdAt - a.createdAt ? 1 : -1)
        console.log("List", sortAllData)
        setListOfWords(sortAllData)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.sortButton}>


                        {listOfWords.length > 0 &&
                            <TouchableOpacity
                                onPress={() => sortArray()}
                            >
                                <MaterialIcons name="sort" size={24} color="black" />
                            </TouchableOpacity>
                        }

                    </View>
                    <View
                        style={
                            clicked
                                ? styles.searchBar__clicked
                                : styles.searchBar__unclicked
                        }
                    >


                        <Feather
                            name="search"
                            size={20}
                            color="black"
                            style={{ marginLeft: 1 }}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                            value={searchPhrase}
                            onChangeText={onSearchTextChange}
                            onFocus={onSearchFocused}
                        />
                        {clicked && (
                            <Entypo name="cross" size={20} color="black" style={{ padding: 2 }} onPress={onSearchCancelled} />
                        )}
                    </View>
                    <View style={styles.addButton}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Forms')}
                        >
                            <MaterialIcons name="add-to-photos" size={24} color="black" />
                        </TouchableOpacity>

                    </View>

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