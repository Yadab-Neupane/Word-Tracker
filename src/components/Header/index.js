import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { PLATFORM_OS, appAuthor, appTitle } from '../../common/includes'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function Header() {
    const [modal, setModal] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{appTitle}</Text>
            <View style={styles.authorAndPlatform}>
                <TouchableOpacity
                    onPress={() => setModal(true)}
                >
                    <AntDesign name="infocirlceo" size={24} color="black" />
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
                            <View style={styles.modalView}>

                                {/* <View style={styles.labelAndCloseAction}> */}
                                <Text style={styles.textStyle}>INFO</Text>

                                {/* </View> */}


                                <View style={{ width: '100%' }}>

                                    <Text style={styles.appAuthors}>Authors</Text>
                                    <Text style={styles.modalText}>{appAuthor}</Text>
                                </View>

                                <View >

                                    <Text style={styles.appDescription}>Description</Text>
                                    <Text style={styles.modalDescription}>This app keeps track of all the words, bookmark the word, update and delete the word, and user can also practice using memory feature and can give the test after practicing.</Text>
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
                {/* <Text style={styles.platform}>{PLATFORM_OS}</Text>
                <Text style={styles.author}>{appAuthor}</Text> */}
            </View>
        </View>
    )
}