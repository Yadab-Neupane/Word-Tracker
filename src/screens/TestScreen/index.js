import { ImageBackground, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function TestScreen(props) {


    const onMemoryPressed = () => {
        props.navigation.push('Memory');
    }

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
								<Feather style={styles.info} name="info" size={30} color="black" />
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
		</View>
	);
}
