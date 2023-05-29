import { Animated, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useRef, useState } from 'react';

export default function Flashcard() {
	let [flipValue, setFlipValue] = useState(new Animated.Value(0));
	// const flipValue = useRef(new Animated.Value(0)).current;
	// let flipRotation = 0;
	// flipValue.addListener(({ value }) => (flipRotation = value));

	const frontFlip = {
		transform: [
			{
				rotateY: flipValue.interpolate({
					inputRange: [0, 180],
					outputRange: ['0deg', '180deg'],
				}),
			},
		],
	};
	const backFlip = {
		transform: [
			{
				rotateY: flipValue.interpolate({
					inputRange: [0, 180],
					outputRange: ['180deg', '360deg'],
				}),
			},
		],
	};

	const flipDefToFront = () => {
		Animated.timing(flipValue, {
			toValue: 180,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

    const flipDefToBack = () => {
        Animated.timing( flipValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        } ).start();
      };
      

    const next = () => {
        flipDefToBack();
        // setFlipValue(new Animated.Value(0))
    }

	return (
		<>
			<View style={styles.flipView}>
				<Animated.View
					style={[
						{
							...frontFlip,
						},
						styles.flipFront,
					]}>
					<View>
						<Text style={styles.textFront}>Scripturient</Text>
					</View>
				</Animated.View>
				<Animated.View
					style={[
						{
							...backFlip,
						},
						styles.flipBack,
					]}>
					<View>
						<Text style={styles.textBackTitle}>Scripturient :</Text>
						<Text style={styles.textBackDef}>having a consuming passion to write</Text>
					</View>
				</Animated.View>
			</View>
			<TouchableOpacity onPress={flipDefToFront}>
				<Text>Show</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={next}>
				<Text>Next</Text>
			</TouchableOpacity>
		</>
	);
}
