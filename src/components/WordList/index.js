import {
	ScrollView,
	TouchableOpacity,
	View,
	TextInput,
	Modal,
	Text,
	Pressable,
	Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import WordItems from './WordItems';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import * as database from './../../database/index';
import { useIsFocused, useTheme } from '@react-navigation/native';
import { blueColor } from '../../common/includes';
import { Feather, Entypo, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import TagFilter from './TagFilter';
import DateFilter from './DateFilter';
import FilterDetail from '../FilterDetail';



export default function WordList({ navigation, route, onDeleteWord }) {
	const { colors } = useTheme()
	const isFocused = useIsFocused();
	const [clicked, setClicked] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [listOfWords, setListOfWords] = useState([]);
	const [listOfTags, setListOfTags] = useState([]);
	const [isFilterActive, setIsFilterActive] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);


	const [sortModal, setSortModal] = useState(false);
	const [tagsToBeFiltered, setTagsToBeFiltered] = useState([]);
	const [isTagFilterTabActive, setIsTagFilterTabActive] = useState(true);

	const [startDateFromFilter, setStartDateFromFilter] = useState('');
	const [endDateFromFilter, setEndDateFromFilter] = useState('');
	const [selectedOption, setSelectedOption] = useState(2);

	const sortOptions = [
		{
			title: 'Title A -> Z',
			sort: 0
		},
		{
			title: 'Title Z -> A',
			sort: 1
		},
		{
			title: 'Newest',
			sort: 2
		},
		{
			title: 'Oldest',
			sort: 3
		},
	];

	useEffect(() => {
		if (searchPhrase) {
			(async () => {
				const getAllData = await database.getAllWordsByTitle(searchPhrase);
				setListOfWords(getAllData);
			})();
		} else if (isFilterActive && tagsToBeFiltered.length > 0) {
			(async () => {
				const getAllData = await database.getAllWordsByTagList(tagsToBeFiltered);
				setListOfWords(getAllData);
			})();
		} else if (isFilterActive && startDateFromFilter && endDateFromFilter) {
			(async () => {
				const getAllData = await database.getAllWordsByDateRange(
					startDateFromFilter,
					endDateFromFilter
				);
				setListOfWords(getAllData);
			})();
		} else {
			(async () => {
				const getAllData = await database.getAllWords();
				setListOfWords(getAllData);
			})();
			setIsFilterActive(false);
		}

		if (isFocused) {
			(async () => {
				const getAllTags = await database.getAllTags();
				setListOfTags(getAllTags);
			})();
		}
	}, [isFocused, searchPhrase, isFilterActive]);

	const onSearchCancelled = () => {
		setClicked(false);
		setSearchPhrase('');
	};

	const onSearchFocused = () => {
		setClicked(true);
	};

	const onSearchTextChange = (val) => {
		setSearchPhrase(val);
		setClicked(true);
	};
	const sortWords = (option) => {
		const wordList = [...listOfWords];
		switch (option) {
			case 0:
				wordList.sort((a, b) => {
					return a.title.localeCompare(b.title);
				});

				break;
			case 1:
				wordList.sort((a, b) => {
					return b.title.localeCompare(a.title);
				});

				break;
			case 2:
				wordList.sort((a, b) => {
					return b.createdAt.localeCompare(a.createdAt);
				});

				break;
			case 3:
				wordList.sort((a, b) => {
					return a.createdAt.localeCompare(b.createdAt);
				});
				break;

			default:
				break;
		}
		setListOfWords(wordList);
		setSelectedOption(option);
		setSortModal(false);
	};

	const onCancelFilterPress = () => {
		setIsFilterActive(false);
		setTagsToBeFiltered([]);
		setStartDateFromFilter('');
		setEndDateFromFilter('');
	};

	const onFilterPress = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	const addTagsToBeFiltered = (tag) => {
		const index = tagsToBeFiltered.findIndex((q) => q == tag);
		if (index > -1) {
			const removedExisting = tagsToBeFiltered.filter((q) => q !== tag);
			setTagsToBeFiltered(removedExisting);
		} else {
			const newTagsToBeFiltered = [tag, ...tagsToBeFiltered];
			setTagsToBeFiltered(newTagsToBeFiltered);
		}
	};

	const onFilterApplyPress = async () => {
		if (!isTagFilterTabActive && (!startDateFromFilter || !endDateFromFilter)) {
			Alert.alert('Error!', 'Start date and end date is required!!', [{ text: 'OK' }]);
		}
		else if (!isTagFilterTabActive && startDateFromFilter > endDateFromFilter) {
			Alert.alert('Error!', 'Start date cannot be greater than end date!!', [{ text: 'OK' }]);
		}
		else if (isTagFilterTabActive && tagsToBeFiltered.length < 1) {
			setModalVisible(false);
		}
		else {
			setIsFilterActive(true);
			setModalVisible(false);
		}
	};

	const onHeaderToggle = (state) => {
		if (state == 'tag') {
			setIsTagFilterTabActive(true);
		} else {
			setIsTagFilterTabActive(false);
			setTagsToBeFiltered([]);
		}
	};

	const onStartDateChange = (val) => {
		setStartDateFromFilter(val);
	};

	const onEndDateChange = (val) => {
		setEndDateFromFilter(val);
	};



	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Forms');
					}}
					style={styles.addButton}>
					<FontAwesome5 name="plus" size={30} color="white" />
				</TouchableOpacity>
				<View style={styles.searchContainer}>
					<View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
						<Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />
						<TextInput
							style={styles.input}
							placeholder="Search"
							value={searchPhrase}
							onChangeText={onSearchTextChange}
							onFocus={onSearchFocused}
						/>
						{clicked && (
							<Entypo
								name="cross"
								size={20}
								color="black"
								style={{ padding: 2 }}
								onPress={onSearchCancelled}
							/>
						)}
					</View>



					{listOfWords && (listOfWords.length > 0 || isFilterActive) && (
						<View style={styles.actionContainer}>
							<View>
								{isFilterActive ? (
									<>
										<TouchableOpacity onPress={onCancelFilterPress}>
											<MaterialCommunityIcons
												name="filter-remove"
												size={30}
												color={colors.text}
											/>
										</TouchableOpacity>
										{
											isTagFilterTabActive && tagsToBeFiltered && tagsToBeFiltered.length > 0 ?
												<FilterDetail tagList={tagsToBeFiltered}> </FilterDetail>
												: <Text style={{ fontSize: 10, color: colors.text }}>
													{`Date: ${startDateFromFilter.toLocaleDateString()} to ${endDateFromFilter.toLocaleDateString()}`}
												</Text>
										}

									</>

								) : (
									<TouchableOpacity onPress={onFilterPress}>
										<MaterialCommunityIcons
											name="filter-plus"
											size={30}
											color={colors.text}
										/>
									</TouchableOpacity>
								)}
							</View>
							<View>
								<TouchableOpacity onPress={() => setSortModal(true)}>
									<MaterialIcons name="sort" size={30} color={colors.text} />
								</TouchableOpacity>
							</View>
						</View>
					)}

					{listOfWords && listOfWords.length == 0 && (
						<>
							<Text style={[styles.textstyle, { textAlign: 'center', marginTop: 60, fontSize: 25, marginBottom: 20, color: colors.text }]}>No record found.</Text>

						</>

					)}
				</View>
				<ScrollView>
					<View style={{ paddingBottom: 50 }}>
						{listOfWords &&
							listOfWords.map((word) => {
								return (
									<WordItems
										key={word.id}
										word={word}
										navigation={navigation}
										onDeleteWord={onDeleteWord}
									/>
								);
							})}
					</View>
				</ScrollView>
			</View>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.centeredView}>
					<View style={[styles.modalView, { backgroundColor: colors.secondary }]}>
						<View style={styles.modalView.modalTabHeaderContainer}>
							<TouchableOpacity
								style={[
									styles.modalView.modalTabHeader,
									isTagFilterTabActive
										? styles.modalView.modalTabHeader_Active
										: styles.modalView.modalTabHeader_Inactive,
								]}
								onPress={() => {
									onHeaderToggle('tag');
								}}>
								<Text
									style={
										isTagFilterTabActive
											? styles.modalView.modalTabHeader_Text_Inactive
											: styles.modalView.modalTabHeader_Text_Active
									}>
									Tag Filter
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.modalView.modalTabHeader,
									isTagFilterTabActive
										? styles.modalView.modalTabHeader_Inactive
										: styles.modalView.modalTabHeader_Active,
								]}
								onPress={() => {
									onHeaderToggle('date');
								}}>
								<Text style={styles.modalView.modalTabHeader_Text_Inactive}>
									Date Filter
								</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.modalView.modalBody}>
							{isTagFilterTabActive ? (
								<ScrollView>
									<View style={styles.modalView.container}>
										{listOfTags.map((item, index) => {
											return (
												<TagFilter
													key={index}
													tag={item}
													addTagsToBeFiltered={
														addTagsToBeFiltered
													}></TagFilter>
											);
										})}
									</View>
								</ScrollView>
							) : (
								<View style={styles.modalView.container}>
									<DateFilter
										onStartDateChange={onStartDateChange}
										onEndDateChange={onEndDateChange}></DateFilter>
								</View>
							)}
						</View>
						<View style={styles.modalView.modalButtonContainer}>
							<Pressable style={styles.modalView.button} onPress={onFilterApplyPress}>
								<Text style={styles.modalView.button.textStyle}>Apply</Text>
							</Pressable>

							<Pressable style={styles.modalView.button} onPress={closeModal}>
								<Text style={styles.modalView.button.textStyle}>Cancel</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			{/* Modal  */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={sortModal}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setSortModal(!sortModal);
				}}>
				<View style={styles.centeredView}>
					<View style={[styles.modalView, { backgroundColor: colors.secondary }]}>
						<View style={styles.labelAndCloseAction}>
							<Text style={[styles.textstyle, { color: colors.text }]}>Sort Wordlist</Text>
							<TouchableOpacity
								style={[styles.button, styles.buttonClose]}
								onPress={() => setSortModal(!sortModal)}>
								<AntDesign name="closecircle" size={20} color="red" />
							</TouchableOpacity>
						</View>
						<View style={{
							width: '100%', padding: 10,
						}}>

							{sortOptions.map((sort, index) => {
								return (
									<TouchableOpacity
										key={index}
										onPress={() => {
											sortWords(sort.sort);
										}}>
										<View
											style={{
												padding: 10,
												borderBottomWidth: 1,
												flexDirection: 'row',
												justifyContent: 'space-between'
											}}>
											<Text style={{ textAlign: 'left', color: colors.text }}>
												{sort.title}
											</Text>
											{sort.sort == selectedOption &&
												<Ionicons
													name="checkmark-circle-outline"
													size={20}
													color={blueColor}
												/>
											}
										</View>
									</TouchableOpacity>
								);
							})}
						</View>
					</View>
				</View>
			</Modal>
			{/* Modal End */}
		</>
	);
}
