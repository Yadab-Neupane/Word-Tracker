import {
	View,
	Text,
	Alert,
	Modal,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView,
} from 'react-native';
import TagList from '../TagList';
import styles from './style';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Detail({ navigation, route, onDeleteWord, onUpdateButtonPressed }) {
	const word = route.params.word;

	const [title, setTitle] = useState(word.title);
	const [desc, setDesc] = useState(word.defination);

	const [deleteWord, setDeleteWord] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const onEditButtonPressed = () => {
		setModalVisible(true);
	};

	const onUpdateButtonPressedHandler = () => {
		onUpdateButtonPressed(word.id, title, desc);
		navigation.navigate('WordLists');
	};

	const onDeleteWordHandler = () => {
		setDeleteWord(true);
		Alert.alert(`Do you want to delete a word "${word.title}"`, 'Are you sure?', [
			{
				text: 'Cancel',
				onPress: () => {
					navigation.navigate('WordLists');
				},
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: () => {
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

			<View style={styles.tag}>
				<Text style={styles.tagHeader}>Tags:</Text>
				<View style={styles.taglistContainer}>
					<TagList wordId={word.id}></TagList>
				</View>
			</View>

			<TouchableOpacity
				style={[styles.deleteButton, styles.floatButton]}
				onPress={onDeleteWordHandler}>
				<AntDesign name="delete" size={24} color="white" />
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.editButton, styles.floatButton]}
				onPress={onEditButtonPressed}>
				<Feather name="edit" size={24} color="white" />
			</TouchableOpacity>

			<Modal visible={modalVisible} animationType={'fade'} transparent={true}>
				<View style={styles.containerModal}>
					<View style={styles.modalGroup}>
						<View style={styles.titleModal}>
							<Text style={styles.title}>Update Form</Text>
							<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
								<Entypo name="circle-with-cross" size={24} color="red" />
							</TouchableOpacity>
						</View>
						<View style={styles.verticalOrientation}>
							<Text style={styles.wordLabel}>Word:</Text>
							<TextInput
								style={styles.wordTF}
								placeholder={`Update word ${word.title}`}
								value={title}
								onChangeText={(title) => setTitle(title)}
								defaultValue={word.title}
							/>

							<Text style={styles.wordDesc}>Description:</Text>
							<TextInput
								multiline={true}
								style={styles.wordTF}
								placeholder={`Update defination ${word.defination}`}
								value={desc}
								onChangeText={(desc) => setDesc(desc)}
								defaultValue={desc}
								maxLength={150}
							/>
							<Text style={{ fontSize: 10, marginTop: -10 }}>
								Number of characters: {150 - desc.length}
							</Text>
							<TouchableOpacity
								style={styles.updateBtn}
								onPress={() => onUpdateButtonPressedHandler()}>
								<Text style={styles.updateBtnText}>Update</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}
