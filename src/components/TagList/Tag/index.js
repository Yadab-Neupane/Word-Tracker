import { Text, TouchableOpacity, View, Modal, TextInput, Alert, AppState } from 'react-native'
import JiggleDeleteView from "react-native-jiggle-delete-view";
import styles from "./style";
import { labelWhiteColor } from '../../../common/includes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUpdated } from '../../../redux/tagUpdateSlice';
import * as database from '../../../database/index';
import { setIsDeleteInProcess } from '../../../redux/tagDeleteSlice';
import { useIsFocused } from "@react-navigation/native";

export default function Tag({ tag, id }) {
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        setShowDeleteJiggle(false);
        dispatch(setIsDeleteInProcess(false));
    }, [isFocused]);
    const isTagDeleteInProcess = useSelector((state) => state.tagDelete.isDeleteInProcess);

    const [newTag, setNewTag] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteJiggle, setShowDeleteJiggle] = useState(false);

    const onTagPress = () => {
        dispatch(setIsDeleteInProcess(true));
        setShowEditModal(!showEditModal);
    }

    const onTagLongPress = () => {
        if (!isTagDeleteInProcess) {
            dispatch(setIsDeleteInProcess(true));
            setShowDeleteJiggle(!showDeleteJiggle);
        }
    }

    const closeEditModalPress = () => {
        setShowEditModal(!showEditModal);
    }

    const onTagChange = (val) => {
        setNewTag(val);
    }

    const onEditTagPressed = async () => {
        try {
            console.log("New tag is ,", newTag, id);
            const update = await database.updateTag(id, newTag);
            console.log(update);
            dispatch(setIsUpdated(true));
            dispatch(setIsDeleteInProcess(false));
            setShowEditModal(!showEditModal);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTagPressed = () => {
        console.log("Tag long pressed to delete");
        Alert.alert(
            'Delete tag',
            `Are you sure you want to delete "${tag}" tag?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        setShowDeleteJiggle(!showDeleteJiggle);
                        dispatch(setIsDeleteInProcess(false));
                    },
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: async () => {
                        try {
                            await database.deleteTagById(id);
                            dispatch(setIsUpdated(true));
                            dispatch(setIsDeleteInProcess(false));
                        } catch (error) {
                            console.log(error);
                        }
                        setShowDeleteJiggle(!showDeleteJiggle);
                    }
                },
            ]
        );
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.tag}
                    onPress={onTagPress}
                    onLongPress={onTagLongPress}
                >
                    <JiggleDeleteView
                        showDeleteJiggle={showDeleteJiggle}
                        onDelete={deleteTagPressed}
                    >
                        <Text style={styles.text}>
                            {tag}
                        </Text>

                    </JiggleDeleteView>

                </TouchableOpacity>
            </View>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showEditModal}
                onRequestClose={closeEditModalPress}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <TextInput
                            style={styles.textbox}
                            onChangeText={onTagChange}
                            defaultValue={tag}
                        />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={onEditTagPressed}
                                underlayColor={labelWhiteColor}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={closeEditModalPress}
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