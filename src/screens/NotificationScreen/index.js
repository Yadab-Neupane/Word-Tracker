import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Notification from '../../components/Notification';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function NotificationScreen() {
	const [clearModalVisible, setClearModalVisible] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.sectionHeader}>Notification</Text>
				<View>
					<Notification />
				</View>
			</View>
			<View style={styles.section}>
				<Text style={styles.sectionHeader}>Data</Text>
				<View
					style={{
						paddingTop: 20,
					}}>
					<TouchableOpacity
						onPress={() => {
							setClearModalVisible(true);
						}}>
						<Text
							style={{
								fontSize: 18,
							}}>
							Clear All Data
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={clearModalVisible}
				onRequestClose={() => {
					setClearModalVisible(!clearModalVisible);
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalView.modalHeader}>{'Clear All Data!!!'}</Text>
						<View style={styles.modalView.modalBody}>
							<Text>
								{
									'Are you sure you want to clear all data. This process is not reversible.'
								}
							</Text>
						</View>
						<View style={styles.modalView.buttonDiv}>
							<TouchableOpacity
								style={styles.modalView.button}
								onPress={() => {
									setClearModalVisible(false);
								}}>
								<Text style={styles.modalView.button.textStyle}>YES</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.modalView.button, styles.modalView.buttonCancel]}
								onPress={() => {
									setClearModalVisible(false);
								}}>
								<Text style={styles.modalView.button.textStyle}>NO</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}
