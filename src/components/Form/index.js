import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { useState } from "react";
import * as database from "./../../database/index"
import uuid from 'react-native-uuid';



export default function Form({ navigation, route, onAddNewWord, writeToJSONFile }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [errorMessage, setErrorMessage] = useState([])

    const [result, setResult] = useState([])

    const [saving, setSaving] = useState(false)

    const handleSaveButton = async () => {
        const messageValidate = []

        if (title === '') {
            messageValidate.push("Title is required")
        }

        if (description === '') {
            messageValidate.push("Description is required")
        }

        if (messageValidate.length > 0) {
            setErrorMessage(messageValidate)
        }
        else {
            setSaving(true)

            // onAddNewWord(title, description)

            // setTitle('')
            // setDescription('')
            // setErrorMessage([])

            // navigation.navigate("WordLists")

            /* */
            // const addNewWord = {
            //     id: uuid.v4(),
            //     title: title,
            //     description: description,
            // };
            const addNewWord = onAddNewWord(title, description)
            const data = await database.addWord(addNewWord)

            const updatedWord = []
            updatedWord.push(data);
            console.log("Saving Btn", updatedWord)
            setSaving(false)


            if (updatedWord) {
                // onAddNewWord(title, description)
                setTitle('')
                setDescription('')
                setErrorMessage([])
                navigation.navigate('WordLists');

            }
            else {
                setErrorMessage(['Error Saving Data.'])
            }
            setResult(updatedWord)
            /* */

        }

        if (saving) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
    }
    return (
        <View
            style={styles.container}
        >
            {errorMessage.length > 0 && (
                <View style={styles.errorCard}>
                    <Text style={[styles.errorMessage, { fontSize: 20 }]}>Alert!! Please fill out the form</Text>
                    {errorMessage.map((error) => {
                        return (
                            <Text style={styles.errorMessage}>{error}</Text>
                        )
                    })}
                </View>
            )
            }

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
                    value={title}
                    onChangeText={setTitle}
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
                    value={description}
                    onChangeText={setDescription}
                />
            </View>

            <TouchableOpacity
                onPress={() => handleSaveButton()}
                style={styles.touchableButton}
            >
                <Text
                    style={styles.saveButton}
                >
                    Save
                </Text>
            </TouchableOpacity>


        </View>
    )
}