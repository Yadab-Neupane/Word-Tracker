import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { useState } from "react";


export default function Form({ onAddNewWord, writeToJSONFile }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [errorMessage, setErrorMessage] = useState([])


    const handleSaveButton = () => {
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
            // console.log("Save button pressed " + title + " " + description)
            onAddNewWord(title, description)
            // writeToJSONFile(data)

            setTitle('')
            setDescription('')
            setErrorMessage([])
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