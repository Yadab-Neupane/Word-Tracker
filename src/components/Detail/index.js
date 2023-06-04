import { View, Text, Alert, Modal, Pressable, TextInput, TouchableOpacity } from "react-native";
import TagList from "../TagList";
import styles from "./style";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Detail({ navigation, route, onEditWord, onEditDescription, onDeleteWord }) {

    const word = route.params.word;

    const [deleteWord, setDeleteWord] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    
    const onEditButtonPressed = () => {
        setModalVisible(true)
    }

    const onUpdateTitleHandler = (value) => {
        onEditWord(value, word.id)
    }
    const onUpdateDescriptionHandler = (value) => {
        onEditDescription(value, word.id)
    }

    const onUpdateButtonPressed = () => {
        navigation.navigate('WordLists')
    }

    const onDeleteWordHandler = () => {
        setDeleteWord(true)
        Alert.alert(`Do you want to delete a word "${word.title}"`, 'Are you sure?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => {
                    onDeleteWord(word.id)
                    navigation.navigate('WordLists')
                    setDeleteWord(false)
                }
            },
        ]);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text>{word.defination}</Text>
            </View>
            <View style={styles.actionBtns}>
                <TouchableOpacity
                    style={styles.deleteButtonTouch}
                    onPress={onDeleteWordHandler}
                >
                    <AntDesign name="delete" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButtonTouch}
                    onPress={onEditButtonPressed}
                >
                    <Feather name="edit" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.tag}>
                <Text style={styles.tagHeader}>
                    Tags:
                </Text>
                <View style={styles.taglistContainer}>
                    <TagList wordId={word.id}>
                    </TagList>
                </View>

            </View>

            <Modal
                visible={modalVisible}
                animationType={"fade"}
                transparent={true}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modalGroup}>
                        <View style={styles.titleModal}>
                            <Text style={styles.title}>Update Form</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text>X</Text>
                            </Pressable>
                        </View>
                        <View
                            style={styles.verticalOrientation}
                        >
                            <Text
                                style={styles.wordLabel}
                            >
                                Word:
                            </Text>
                            <TextInput
                                style={styles.wordTF}
                                placeholder="Enter new word"
                                value={word.title}
                                onChangeText={(value) => onUpdateTitleHandler(value)}
                            />

                            <Text
                                style={styles.wordDesc}
                            >
                                Description:
                            </Text>
                            <TextInput
                                multiline={true}
                                style={styles.wordTF}
                                placeholder="Enter description for word..."
                                value={word.description}
                                onChangeText={(value) => onUpdateDescriptionHandler(value)}
                            />
                            <TouchableOpacity
                                style={styles.updateBtn}
                                onPress={onUpdateButtonPressed}
                            >
                                <Text style={styles.updateBtnText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}