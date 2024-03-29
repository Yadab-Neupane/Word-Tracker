import {
	View,
	Text,
	Alert,
	Modal,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView,
	Keyboard,
} from 'react-native';
import TagList from '../TagList';
import styles from './style';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import useHandleScroll from '../CustomHook';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Detail({ navigation, route, onDeleteWord, onUpdateButtonPressed }) {
	const word = route.params.word;

	const { colors } = useTheme()
	const { handleScroll, showButton } = useHandleScroll();


	const [title, setTitle] = useState(word.title);
	const [desc, setDesc] = useState(word.defination);

	const [deleteWord, setDeleteWord] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const onEditButtonPressed = () => {
		setModalVisible(true);
	};

	const onUpdateButtonPressedHandler = () => {
		if (title && desc) {
			onUpdateButtonPressed(word.id, title, desc);
			setModalVisible(false)
			navigation.goBack()
		}
		else {
			Alert.alert(`ERROR`, 'Title and description is required!!', [
				{
					text: 'OK'
				},
			]);
		}
	};

	const onDeleteWordHandler = () => {

		Alert.alert(`Do you want to delete a word "${word.title}"`, 'Are you sure?', [
			{
				text: 'Cancel',
				onPress: () => {
					// navigation.navigate('WordLists');
					console.log("Delete Cancelled")
				},
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: () => {
					setDeleteWord(true)
					onDeleteWord(word.id);
					navigation.navigate('WordLists');

					setDeleteWord(false);
				},
			},
		]);
	};

	if (deleteWord) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#0000ff" />
				<Text style={styles.loadingText}>Deleting {word.title}, Please Wait...</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<ScrollView style={{ maxHeight: 110 }}>
					<Text style={styles.title}>{word.title}</Text>
				</ScrollView>
				<ScrollView style={{ maxHeight: 110 }}>
					<Text style={styles.definition}>{word.defination}</Text>
				</ScrollView>
			</View>

			<ScrollView onScroll={handleScroll}>
				<View style={styles.tag}>
					<Text style={[styles.tagHeader, { color: colors.text }]}>Tags:</Text>
					<View style={styles.taglistContainer}>
						<TagList wordId={word.id}></TagList>
					</View>
				</View>
			</ScrollView>

			{showButton &&
				<TouchableOpacity
					style={[styles.deleteButton, styles.floatButton]}
					onPress={onDeleteWordHandler}>
					<AntDesign name="delete" size={24} color="white" />
				</TouchableOpacity>

			}
			<TouchableOpacity
				style={[styles.editButton, styles.floatButton]}
				onPress={onEditButtonPressed}>
				<Feather name="edit" size={24} color="white" />
			</TouchableOpacity>

			<Modal visible={modalVisible} animationType={'fade'} transparent={true}>
				<View style={styles.containerModal}>
					<View style={[styles.modalGroup, { backgroundColor: colors.secondary }]}>
						<View style={styles.titleModal}>

							<Text style={[styles.title, { color: colors.text }]}>Update Form</Text>

							<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
								<Entypo name="circle-with-cross" size={24} color="red" />
							</TouchableOpacity>
						</View>

						<View style={styles.verticalOrientation}>
							<>
								<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
									<Text style={[styles.wordLabel, { color: colors.text }]}>Word:</Text>
									<TextInput
										style={[styles.wordTF, { color: colors.text, borderColor: colors.text }]}
										placeholder={`Update word ${word.title}`}
										value={title}
										onChangeText={(title) => setTitle(title)}
										defaultValue={word.title}
									/>

									<Text style={[styles.wordDesc, { color: colors.text }]}>Description:</Text>
									<TextInput
										multiline={true}
										style={[styles.wordTF, { color: colors.text, borderColor: colors.text }]}
										placeholder={`Update defination ${word.defination}`}
										value={desc}
										onChangeText={(desc) => setDesc(desc)}
										defaultValue={desc}
										maxLength={150}
									/>

									<Text style={{ fontSize: 10, marginTop: -10, color: colors.text }}>
										Number of characters: {150 - desc.length}
									</Text>
								</TouchableWithoutFeedback>
							</>
							<TouchableOpacity
								style={styles.updateBtn}
								onPress={() => onUpdateButtonPressedHandler()}>
								<Text style={styles.updateBtnText}>Update</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal >
		</View >
	);
}
