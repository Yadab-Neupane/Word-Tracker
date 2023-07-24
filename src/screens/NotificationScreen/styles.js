import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		backgroundColor: 'white',
		margin: 20,
		borderRadius: 12,
	},
	section: {
		marginBottom: 20,
	},
	sectionHeader: {
		fontSize: 18,
		color: 'grey',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
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
			box: {
				padding: 8,
				text: {
					padding: 10,
					textAlign: 'center',
				},
			},
		},
		buttonDiv: {
			display: 'flex',
			flexDirection: 'row',
			marginTop: 20
		},
		button: {
			borderRadius: 20,
			padding: 10,
			elevation: 2,
			backgroundColor: '#2196F3',
			width: 80,
			textStyle: {
				color: 'white',
				textAlign: 'center',
				fontWeight: 600
			},
		},
		buttonCancel: {
			marginLeft: 10,
			backgroundColor: 'red'
		}
	},
});
