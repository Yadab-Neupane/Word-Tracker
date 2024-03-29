import { ImageBackground, Text, TouchableHighlight, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';


export default function TestScreen(props) {

	const { colors } = useTheme()

	let [modalVisible, setModalVisible] = useState(false);
	let [modalText, setModalText] = useState({
		header: '',
		textHead: '',
		textBody: '',
	});

	const navigateTo = (path) => {
		props.navigation.push(path);
	};



	const showMemoryInfo = (isMemory) => {
		let header = 'Quiz';
		let head = `You will be quizzed with 5 word one at a time. You can choose through 4 options. \n`;
		let body = `Expand your knoweledge by completing the quiz`;

		if (isMemory) {
			header = 'Memory';
			head = `You will be tested with 5 word one at a time. You can view the definition by interacting with the flashcard. \n`;
			body = `Test your memory and choose if you guessed it correctly or incorrectly.`;
		}
		setModalText({
			header,
			textHead: head,
			textBody: body,
		});

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
				onPress={() => {
					navigateTo('Memory');
				}}>
				<View style={styles.box}>
					<ImageBackground
						source={require('../../../assets/flashcards.png')}
						resizeMode='stretch'
						style={styles.image}>
						<View style={{ padding: 30 }}>
							<View style={styles.boxHeader}>
								<Text style={styles.title}>Memory</Text>
								<TouchableOpacity
									onPress={() => {
										showMemoryInfo(true);
									}}>
									<Feather
										style={styles.info}
										name="info"
										size={30}
										color="black"
									/>
								</TouchableOpacity>
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
					<View style={[styles.modalView, { backgroundColor: colors.secondary }]}>
						<Text style={[styles.modalView.modalHeader, { color: colors.text }]}>{modalText.header}</Text>
						<View style={styles.modalView.modalBody}>
							<Text style={{ color: colors.text }}>{modalText.textHead}</Text>
							<Text style={{ color: colors.text }}>{modalText.textBody}</Text>
						</View>
						<TouchableOpacity style={styles.modalView.button} onPress={closeModal}>
							<Text style={styles.modalView.button.textStyle}>OK</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			<TouchableHighlight
				activeOpacity={0.6}
				underlayColor="#DDDDDD"
				style={{ marginTop: 20 }}
				onPress={() => {
					navigateTo('Quiz');
				}}>
				<View style={styles.box}>
					<ImageBackground
						source={require('../../../assets/options.png')}
						resizeMode='stretch'
						style={styles.image}>
						<View style={{ padding: 30 }}>
							<View style={styles.boxHeader}>
								<Text style={styles.title}>Quiz</Text>
								<TouchableOpacity
									onPress={() => {
										showMemoryInfo(false);
									}}>
									<Feather
										style={styles.info}
										name="info"
										size={30}
										color="black"
									/>
								</TouchableOpacity>
							</View>
							<View style={styles.boxBody}>
								<View>
									<Text style={styles.content}>Quiz yourself and</Text>
									<Text style={styles.content}>expand your </Text>
									<Text style={styles.flashcard}>knoweledge</Text>
								</View>
							</View>
						</View>
					</ImageBackground>
				</View>
			</TouchableHighlight>
		</View>
	);
}
