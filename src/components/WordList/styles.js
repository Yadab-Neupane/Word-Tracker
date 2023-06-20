import { StyleSheet } from 'react-native';
import { labelWhiteColor, secondaryColor, lavenderColor, accentColor, primaryColor } from '../../common/includes';

export default styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
	},
	addButton: {
		borderWidth: 1,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: 70,
		position: 'absolute',
		bottom: 20,
		right: 20,
		height: 70,
		backgroundColor: lavenderColor,
		zIndex: 99,
		borderRadius: 35,
	},
	wordListView: {
		borderRadius: 5,
		marginTop: 10,
		padding: 20,
		backgroundColor: secondaryColor,
	},
	content: {
		color: labelWhiteColor,
	},
	searchContainer: {
		padding: 2,
	},
	actionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	searchBar__unclicked: {
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#d9dbda',
		borderRadius: 15,
		alignItems: 'center',
	},
	searchBar__clicked: {
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#d9dbda',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	input: {
		fontSize: 18,
		marginLeft: 10,
		width: '90%',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		maxHeight: '70%',
	},
	modalView: {
		backgroundColor: labelWhiteColor,
		padding: 30,
		borderRadius: 10,
		width: '90%',
		marginTop: 90,
		marginHorizontal: 10,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 10,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		modalHeader: {
			fontSize: 18,
			fontWeight: 600,
		},
		modalBody: {
			padding: 20,
			height: '80%',
		},
		container: {
			flex: 1,
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
		tag: {
			paddingTop: 10,
		},
		modalButtonContainer: {
			flexDirection: 'row',
		},
		button: {
			borderRadius: 20,
			padding: 10,
			margin: 5,
			elevation: 2,
			backgroundColor: '#2196F3',
			width: 100,
			textStyle: {
				textAlign: 'center',
			},
		},
	},
	centeredView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.7)'
	},
	labelAndCloseAction: {
		flexDirection: 'row',
		width: "100%",
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
	},
	sortByTime: {
		color: secondaryColor,
		alignItems: 'center',
		fontSize: 20,
		backgroundColor: secondaryColor,
		color: labelWhiteColor,
		borderRadius: 8,
		textAlign: 'center',
		margin: 10,
		width: "80%"
	},
	sortByTitle: {
		color: secondaryColor,
		alignItems: 'center',
		fontSize: 20,
		backgroundColor: secondaryColor,
		color: labelWhiteColor,
		borderRadius: 8,
		textAlign: 'center',
		margin: 10,
		width: "80%"
	},
	textstyle: {
		fontSize: 30,
		color: secondaryColor,

	},

});
