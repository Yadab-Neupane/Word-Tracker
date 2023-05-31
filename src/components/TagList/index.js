import { View, TouchableOpacity, Modal, TextInput, Text } from 'react-native'
import Tag from "./Tag/index";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { secondaryColor } from '../../common/includes';
import { useState } from 'react';
import { labelWhiteColor } from '../../common/includes';

export default function TagList({ tags }) {
    const tempTagList = tags;

    const [showAddModal, setShowAddModal] = useState(false);

    const onAddTagButtonPress = () => {
        setShowAddModal(!showAddModal);
    };

    const closeAddModalPress = () => {
        setShowAddModal(!showAddModal);
    }

    const onTagChange = () => {
        console.log("Tag detail changed");
    }

    return (
        <>
            <View style={styles.container}>
                {tempTagList.map((item, index) => {
                    return (
                        <View key={index} style={styles.tag}>
                            <Tag
                                tag={item}
                            />
                        </View>);
                })}

                <View style={styles.addButton}>
                    <TouchableOpacity
                        onPress={onAddTagButtonPress}>
                        <AntDesign name="pluscircle" size={30} color={secondaryColor} />
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
                                onPress={closeAddModalPress}
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