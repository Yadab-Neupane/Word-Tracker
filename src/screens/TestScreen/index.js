import { ImageBackground, Text, TouchableHighlight, View, Modal, Pressable } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function TestScreen(props) {
	const onMemoryPressed = () => {
		props.navigation.push('Memory');
	};
	let [modalVisible, setModalVisible] = useState(false);

	const showMemoryInfo = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<TouchableHighlight
				activeOpacity={0.6}
				underlayColor="#DDDDDD"
				onPress={onMemoryPressed}>
				<View style={styles.box}>
					<ImageBackground
						source={require('../../../assets/flashcards.png')}
						style={styles.image}>
						<View style={{ padding: 30 }}>
							<View style={styles.boxHeader}>
								<Text style={styles.title}>Memory</Text>
								<TouchableHighlight onPress={showMemoryInfo}>
									<Feather
										style={styles.info}
										name="info"
										size={30}
										color="black"
									/>
								</TouchableHighlight>
							</View>
							<View style={styles.boxBody}>
								<View>
									<Text style={styles.content}>Test your memory with</Text>
									<Text style={styles.content}>our interactive</Text>
									<Text style={styles.flashcard}>flashcards</Text>
								</View>
							</View>
						</View>
					</ImageBackground>
				</View>
			</TouchableHighlight>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalView.modalHeader}>Memory</Text>
						<View style={styles.modalView.modalBody}>
							<Text>
								You will be tested with 5 word one at a time. You can view the
								definition by interacting with the flashcard.
							</Text>
							<Text>
								Test your memory and choose if you guessed it correctly or
								incorrectly.
							</Text>
						</View>
						<Pressable style={styles.modalView.button} onPress={closeModal}>
							<Text style={styles.modalView.button.textStyle}>OK</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
