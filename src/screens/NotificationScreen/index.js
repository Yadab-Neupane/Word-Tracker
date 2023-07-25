import { View, Text, TouchableOpacity, Modal, useColorScheme } from 'react-native';
import Notification from '../../components/Notification';
import styles from './styles';
import { useState } from 'react';
import * as database from '../../database/index';
import { useTheme } from "@react-navigation/native";

export default function NotificationScreen() {
	const { colors } = useTheme()

	const [clearModalVisible, setClearModalVisible] = useState(false);

	const clearAllData = async () => {
		let res = await database.deleteAllTables();
		if (res === true) {
			setClearModalVisible(false);
		}
	};

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<View style={styles.section}>
				<Text style={[styles.sectionHeader, { color: colors.text }]}>Notification</Text>
				<View>
					<Notification />
				</View>
			</View>
			<View style={styles.section}>
				<Text style={[styles.sectionHeader, { color: colors.text }]}>Data</Text>
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
								color: colors.text
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
					<View style={[styles.modalView, { backgroundColor: colors.secondary }]}>
						<Text style={[styles.modalView.modalHeader, { color: colors.text }]}>{'Clear All Data!!!'}</Text>
						<View style={styles.modalView.modalBody}>
							<Text style={{ color: colors.text }}>
								{
									'Are you sure you want to clear all data. This process is not reversible.'
								}
							</Text>
						</View>
						<View style={styles.modalView.buttonDiv}>
							<TouchableOpacity
								style={styles.modalView.button}
								onPress={clearAllData}>
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
