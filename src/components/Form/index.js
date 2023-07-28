import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { useState } from "react";
import * as database from "./../../database/index"
import { useTheme } from "@react-navigation/native";

export default function Form({ navigation, route }) {
    const { colors } = useTheme()
    const [word, setWord] = useState('')
    const [defination, setDefination] = useState('')

    const [errorMessage, setErrorMessage] = useState([])

    const [saving, setSaving] = useState(false)

    const onWordChange = (val) => {
        setWord(val);
    }

    const onDefinationChange = (val) => {
        setDefination(val);
    }

    const handleSaveButton = async () => {
        const messageValidate = []

        if (word === '') {
            messageValidate.push("Title is required")
        }

        if (defination === '') {
            messageValidate.push("Description is required")
        }

        if (messageValidate.length > 0) {
            setErrorMessage(messageValidate)
        }
        else {
            setSaving(true)
            try {
                const data = await database.addWord(word, defination);
                console.log(data);
                setWord('')
                setDefination('')
                setErrorMessage([])
                navigation.navigate('WordLists')
            } catch (error) {
                console.log(error)
            }
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
                    {errorMessage.map((error, index) => {
                        return (
                            <Text key={index} style={styles.errorMessage}>{error}</Text>
                        )
                    })}
                </View>
            )
            }

            <View
                style={styles.verticalOrientation}
            >
                <Text
                    style={[styles.wordLabel, { color: colors.text }]}
                >
                    Word:
                </Text>
                <TextInput
                    style={[styles.wordTF, { backgroundColor: colors.background, borderRadius: 5, color: colors.text, borderColor: colors.text }]}
                    placeholder="Enter new word"
                    placeholderTextColor={colors.textColorPlaceholder}
                    onChangeText={onWordChange}
                />

                <Text
                    style={[styles.wordDesc, { color: colors.text }]}
                >
                    Description:
                </Text>
                <TextInput
                    multiline={true}
                    style={[styles.wordTF, { color: colors.text, borderColor: colors.text }]}
                    placeholder="Enter description for word..."
                    placeholderTextColor={colors.textColorPlaceholder}
                    onChangeText={onDefinationChange}
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