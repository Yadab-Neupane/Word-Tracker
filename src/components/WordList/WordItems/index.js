import { Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { lavenderColor } from '../../../common/includes';
import { useState } from 'react';
import * as database from '../../../database/index';

export default function WordItems({ navigation, route, word }) {
	const [isBookmarked, setIsBookMarked] = useState(word.isBookmarked);

	const toggleBookmark = async () => {
		try {
			const update = await database.updateBookmark(word.id, isBookmarked == 1 ? 0 : 1);
			console.log(update);
		} catch (error) {
			console.log(error);
		}

		if (isBookmarked == 1) setIsBookMarked(0);
		else setIsBookMarked(1);
		ToastAndroid.show(`${word.title} ${isBookmarked == 0 ? "added to bookmark." : "removed from bookmark." }`, ToastAndroid.SHORT);
	};

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<TouchableOpacity onPress={() => navigation.navigate('Detail', { word })}>
					<View style={styles.cardWrap}>
						<View style={styles.word}>
							<Text numberOfLines={1} style={styles.cardText}>{word.title}</Text>
							<Text numberOfLines={2} style={styles.cardDescription}>
								{word.defination}
							</Text>
						</View>
						<View>
							{isBookmarked == 1 ? (
								<TouchableOpacity onPress={toggleBookmark}>
									<Ionicons name="md-bookmarks" size={30} color={lavenderColor} />
								</TouchableOpacity>
							) : (
								<TouchableOpacity onPress={toggleBookmark}>
									<Ionicons
										name="md-bookmarks"
										size={30}
										color="white"
									/>
								</TouchableOpacity>
							)}
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
