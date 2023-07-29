import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { PLATFORM_OS, appAuthor, appTitle } from '../../common/includes'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';


export default function Header() {
    const { colors } = useTheme()
    const [modal, setModal] = useState(false)
    return (
        <View style={[styles.container, { backgroundColor: colors.header }]}>
            <Text style={[styles.title, { color: colors.text }]}>{appTitle}</Text>
            <View style={styles.authorAndPlatform}>
                <TouchableOpacity
                    onPress={() => setModal(true)}
                >
                    <AntDesign name="infocirlceo" size={24} color={colors.text} />
                </TouchableOpacity>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}

                        visible={modal}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModal(!modal);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={[styles.modalView, { backgroundColor: colors.secondary }]}>
                                <Text style={[styles.textStyle, { color: colors.text }]}>INFO</Text>
                                <View >

                                    <Text style={[styles.appAuthors, { color: colors.text }]}>Authors</Text>
                                    <Text style={[styles.modalText, { color: colors.text }]}>{appAuthor}</Text>
                                </View>

                                <View >

                                    <Text style={[styles.appDescription, { color: colors.text }]}>Description</Text>
                                    <Text style={[styles.modalDescription, { color: colors.text }]}>This app keeps track of all the words, bookmark the word, update and delete the word, and user can also practice using memory feature and can give the test after practicing.</Text>
                                </View>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModal(!modal)}>
                                    <Text style={styles.closeModalTextstyle.closeModal}>Close</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>
    )
}