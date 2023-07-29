import { Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';


export default function FilterDetail({ tagList }) {
    const { colors } = useTheme();
    const [modal, setModal] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={[styles.title,{color: colors.text}]}>Tags:</Text>
            <View style={styles.authorAndPlatform}>
                <TouchableOpacity
                    onPress={() => setModal(true)}
                >
                    <AntDesign name="paperclip" size={18} style={{ marginLeft: 5 }} color={colors.text} />
                </TouchableOpacity>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}

                        visible={modal}
                        onRequestClose={() => {
                            setModal(!modal);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View >

                                    <Text style={styles.appDescription}>Filtered Tags:</Text>
                                    {tagList.map((tag, index) => (
                                       <Text key={index} style={styles.modalDescription}>{tag}</Text>
                                    ))}
                                    
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