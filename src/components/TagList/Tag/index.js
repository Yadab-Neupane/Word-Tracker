import { Text, TouchableOpacity, View, Modal, TextInput } from 'react-native'
import styles from "./style";
import { labelWhiteColor } from '../../../common/includes';
import { useState } from 'react';

export default function Tag({ tag }) {
    const [showEditModal, setShowEditModal] = useState(false);

    const onTagPress = () => {
        setShowEditModal(!showEditModal);
    }

    const onTagLongPress = () => {
        console.log("Tag long pressed");
    }

    const closeEditModalPress = () => {
        setShowEditModal(!showEditModal);
    }

    const onTagChange = () => {
        console.log("Tag detail changed");
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.tag}
                    onPress={onTagPress}
                    onLongPress={onTagLongPress}
                    >
                    <Text style={styles.text}>
                        {tag}
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={showEditModal}
                onRequestClose={closeEditModalPress}>
                <View style={styles.modal}>

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
            </Modal>
        </>
    )
}