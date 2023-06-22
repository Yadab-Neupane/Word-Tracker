import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	box: {
		backgroundColor: 'white',
		borderRadius: 20,
		minHeight: 200,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		zIndex: -1,
	},
	boxHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '900',
	},
	boxBody: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
	},
	content: {
		fontSize: 20,
		paddingBottom: 5,
	},
	flashcard: {
		fontSize: 24,
		fontWeight: '600',
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
		button: {
			borderRadius: 20,
			padding: 10,
			elevation: 2,
			backgroundColor: '#2196F3',
			width: 100,
			textStyle: {
				textAlign: 'center',
			},
		},
	},
});