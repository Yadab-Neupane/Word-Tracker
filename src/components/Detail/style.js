import { StyleSheet } from 'react-native';
import { accentColor, fontFamilyPlatform, greenColor, labelWhiteColor, lavenderColor, maroonColor, primaryColor, secondaryColor } from '../../common/includes';

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 15,
		marginTop: 10,
	},
	tag: {
		marginTop: 20,
		marginBottom:60
	},
	tagHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	taglistContainer: {
		flexDirection: 'row',
	},
	containerModal: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modalGroup: {
		padding: 20,
		backgroundColor: 'white',
		width: '80%',
		borderRadius: 15,
	},
	titleModal: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		fontFamily: fontFamilyPlatform,
	},
	title: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontFamily: fontFamilyPlatform,
		fontSize: 22,
	},
	fields_buttons: {
		padding: 20,
	},
	saveButton: {
		backgroundColor: 'orange',
		borderRadius: 8,
		padding: 10,
	},
	loadingContainer: {
		marginTop: 150,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loadingText: {
		color: 'red',
		fontSize: 20,
		marginTop: 10,
	},
	wordLabel: {
		fontWeight: 'bold',
	},
	wordDesc: {
		fontWeight: 'bold',
	},
	wordTF: {
		borderRadius: 2,
		padding: 5,
		marginTop: 10,
		borderWidth: 0.2,
		marginBottom: 20,
	},
	updateBtn: {
		marginTop: 20,
		padding: 20,
		backgroundColor: 'green',
		borderRadius: 8,
	},
	updateBtnText: {
		color: 'white',
		textAlign: 'center',
	},
	floatButton: {
		position: 'absolute',
		bottom: 20,
		borderRadius: 35,
		height: 70,
		width: 70,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 99
	},
	deleteButton: {
		left: 20,
		backgroundColor: maroonColor
	},
	editButton: {
		right: 20,
		backgroundColor: greenColor
	},

	// detail word description
	title: {
		fontWeight: 600,
		textTransform: 'uppercase',
		fontFamily: fontFamilyPlatform,
		fontSize: 28,
		color: labelWhiteColor,
	},
	definition: {
		marginTop: 20,
		paddingLeft: 10,
		fontSize: 20,
		fontFamily: fontFamilyPlatform,
		textTransform: 'lowercase',
		color: labelWhiteColor,
	},
	card: {
		backgroundColor: secondaryColor,
		padding: 40,
		borderRadius: 12,
	},
});
