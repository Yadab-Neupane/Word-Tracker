import { ScrollView, TouchableOpacity, View, TextInput, Modal, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import WordItems from './WordItems'
import { useEffect, useState } from 'react';
import * as database from "./../../database/index";
import { useIsFocused } from "@react-navigation/native";
import { Feather, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { lavenderColor } from '../../common/includes';
import TagFilter from './TagFilter';
import DateFilter from './DateFilter';
import TagFilter from './TagFilter';


export default function WordList({ navigation, route, onDeleteWord }) {
    const isFocused = useIsFocused();
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [listOfWords, setListOfWords] = useState([]);
    const [listOfTags, setListOfTags] = useState([]);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [tagsToBeFiltered, setTagsToBeFiltered] = useState([]);
    const [isTagFilterTabActive, setIsTagFilterTabActive] = useState(true);

    const[startDateFromFilter, setStartDateFromFilter] = useState('');
    const[endDateFromFilter, setEndDateFromFilter] = useState('');


    useEffect(() => {
        if (searchPhrase) {
            (async () => {
                const getAllData = await database.getAllWordsByTitle(searchPhrase);
                setListOfWords(getAllData);
            })();
        }
        else if (isFilterActive && tagsToBeFiltered.length > 0) {
            (async () => {
                const getAllData = await database.getAllWordsByTagList(tagsToBeFiltered);
                setListOfWords(getAllData);
            })();
        }
        else if(isFilterActive && startDateFromFilter && endDateFromFilter){
            console.log("Start Date", startDateFromFilter);
            console.log("End Date", endDateFromFilter);
        }
        else {
            (async () => {
                const getAllData = await database.getAllWords();
                setListOfWords(getAllData);
            })();
        }

        if (isFocused) {
            (async () => {
                const getAllTags = await database.getAllTags();
                setListOfTags(getAllTags);
            })();
        }

    }, [isFocused, searchPhrase, isFilterActive]);


    const onSearchCancelled = () => {
        setClicked(false);
        setSearchPhrase('');
    };

    const onSearchFocused = () => {
        setClicked(true);
    };

    const onSearchTextChange = (val) => {
        setSearchPhrase(val);
        setClicked(true);
    };

    const sortArray = async () => {
        const sortAllData = await database.getAllWords();
        sortAllData.sort((a, b) => b.createdAt - a.createdAt ? 1 : -1)
        console.log("List", sortAllData)
        setListOfWords(sortAllData)
    };

    const onCancelFilterPress = () => {
        setIsFilterActive(false);
        setTagsToBeFiltered([]);
    };

    const onFilterPress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const addTagsToBeFiltered = (tag) => {
        const index = tagsToBeFiltered.findIndex(q => q == tag);
        if (index > -1) {
            const removedExisting = tagsToBeFiltered.filter(q => q !== tag);
            setTagsToBeFiltered(removedExisting);
        }
        else {
            const newTagsToBeFiltered = [tag, ...tagsToBeFiltered];
            setTagsToBeFiltered(newTagsToBeFiltered);
        }
    };

    const onFilterApplyPress = async () => {
        setIsFilterActive(true);
        setModalVisible(false);
    };


    const onHeaderToggle = (state) => {
        if (state == 'tag') {
            setIsTagFilterTabActive(true);

        } else {
            setIsTagFilterTabActive(false);
            setTagsToBeFiltered([]);
        }
    }

    const onStartDateChange = (val) => {
        setStartDateFromFilter(val);
    }

    const onEndDateChange = (val) => {
        setEndDateFromFilter(val);
    }

    return (
        <>
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
            <View>
                {isFilterActive ?
                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        onPress={onCancelFilterPress}>
                        <MaterialCommunityIcons name="filter-remove" size={35} color={lavenderColor} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        onPress={onFilterPress}>
                        <MaterialCommunityIcons name="filter-plus" size={35} color={lavenderColor} />
                    </TouchableOpacity>
                }
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View
                            style={styles.modalView.modalTabHeaderContainer}>
                            <TouchableOpacity
                                style={[styles.modalView.modalTabHeader,
                                isTagFilterTabActive ? styles.modalView.modalTabHeader_Active : styles.modalView.modalTabHeader_Inactive]}
                                onPress={() => {
                                    onHeaderToggle('tag');
                                }}>
                                <Text style={styles.modalView.modalTabHeader_Text}>Tag Filter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalView.modalTabHeader,
                                isTagFilterTabActive ? styles.modalView.modalTabHeader_Inactive : styles.modalView.modalTabHeader_Active]}
                                onPress={() => {
                                    onHeaderToggle('date');
                                }}>
                                <Text style={styles.modalView.modalTabHeader_Text}>Date Filter</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalView.modalBody}>
                            {isTagFilterTabActive ?
                                <ScrollView>
                                    <View style={styles.modalView.container}>
                                        {listOfTags.map((item, index) => {
                                            return (
                                                <TagFilter key={index} tag={item} addTagsToBeFiltered={addTagsToBeFiltered}></TagFilter>
                                            )
                                        })}
                                    </View>
                                </ScrollView>
                                :
                                <View style={styles.modalView.container}>
                                    <DateFilter onStartDateChange={onStartDateChange} onEndDateChange={onEndDateChange}></DateFilter>
                                </View>
                            }

                        </View>
                        <View style={styles.modalView.modalButtonContainer}>
                            <Pressable style={styles.modalView.button} onPress={onFilterApplyPress}>
                                <Text style={styles.modalView.button.textStyle}>Apply</Text>
                            </Pressable>

                            <Pressable style={styles.modalView.button} onPress={closeModal}>
                                <Text style={styles.modalView.button.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}