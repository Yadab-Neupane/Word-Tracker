import { Text, TouchableOpacity, View, Modal, TextInput, Alert } from 'react-native'
import JiggleDeleteView from "react-native-jiggle-delete-view";
import styles from "./style";
import { labelWhiteColor } from '../../../common/includes';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setIsUpdating } from '../../../redux/tagUpdateSlice';

export default function Tag({ tag }) {

    const isTagUpdateInProgress = useSelector((state) => state.tagUpdate.isUpdating);

    const dispatch = useDispatch();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteJiggle, setShowDeleteJiggle] = useState(false);

    const onTagPress = () => {
        setShowEditModal(!showEditModal);
    }

    const onTagLongPress = () => {
        if (!isTagUpdateInProgress) {
            dispatch(setIsUpdating(true));
            setShowDeleteJiggle(!showDeleteJiggle);
        }
    }

    const closeEditModalPress = () => {
        setShowEditModal(!showEditModal);
    }

    const onTagChange = () => {
        console.log("Tag detail changed");
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
                        dispatch(setIsUpdating(false));
                    },
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        setShowDeleteJiggle(!showDeleteJiggle);
                        dispatch(setIsUpdating(false));
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
                    <View style = {styles.modalBox}>
                    <TextInput
                        style={styles.textbox}
                        onChangeText={onTagChange}
                        defaultValue={tag}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={closeEditModalPress}
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