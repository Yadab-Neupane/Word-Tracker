import { View, TouchableOpacity, Modal, TextInput, Text, Alert } from 'react-native'
import Tag from "./Tag/index";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { secondaryColor } from '../../common/includes';
import { useState, useEffect, useRef } from 'react';
import { labelWhiteColor } from '../../common/includes';
import { useSelector, useDispatch } from 'react-redux';
import { setIsUpdated } from '../../redux/tagUpdateSlice';

import * as database from '../../database/index';
import { useTheme } from '@react-navigation/native';

export default function TagList({ wordId }) {

    const { colors } = useTheme()
    const firstUpdate = useRef(true);
    const dispatch = useDispatch();
    const isTagUpdated = useSelector((state) => state.tagUpdate.isUpdated);
    const [tagList, setTagList] = useState([])

    useEffect(() => {
        if (firstUpdate.current || isTagUpdated) {
            firstUpdate.current = false;
            (async () => {
                try {
                    const getAllData = await database.getAllTagsByWordId(wordId);
                    setTagList(getAllData);
                    dispatch(setIsUpdated(false));
                } catch (error) {
                    setTagList([]);
                    console.log(error);
                }
            })();
        }
    }, [isTagUpdated]);


    const [showAddModal, setShowAddModal] = useState(false);
    const [tag, setTag] = useState('');

    const onAddTagButtonPress = () => {
        setShowAddModal(!showAddModal);
    }

    const onSaveModalPress = () => {
        if (tag) {
            (async () => {
                try {
                    await database.addTag(wordId, tag);
                    setTag('');
                    dispatch(setIsUpdated(true));
                } catch (error) {
                    console.log(error);
                }
                setShowAddModal(!showAddModal);
            })();
        }
        else {
            Alert.alert(`ERROR`, 'Tag cannot be empty!!', [
                {
                    text: 'OK'
                },
            ]);
        }
    }

    const closeAddModalPress = () => {
        setShowAddModal(!showAddModal);
    }

    const onTagChange = (val) => {
        setTag(val);
    }

    return (
        <>
            <View style={styles.container}>
                {tagList.map((item, index) => {
                    return (
                        <View key={index} style={styles.tag}>
                            <Tag
                                tag={item.tag}
                                id={item.id}
                            />
                        </View>);
                })}

                <View style={styles.addButton}>
                    <TouchableOpacity
                        onPress={onAddTagButtonPress}>
                        <AntDesign name="pluscircle" size={30} color={colors.text} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={showAddModal}
                onRequestClose={closeAddModalPress}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <TextInput
                            style={styles.textbox}
                            onChangeText={onTagChange}
                        />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={onSaveModalPress}
                                underlayColor={labelWhiteColor}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={closeAddModalPress}
                                underlayColor={labelWhiteColor}>
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}