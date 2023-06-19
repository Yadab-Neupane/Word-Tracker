import { StyleSheet } from 'react-native';
import { secondaryColor } from '../../common/includes';

export default styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	flipView: {
		position: 'relative',
		minHeight: 200,
	},
	flipFront: {
		padding: 20,
		backgroundColor: secondaryColor,
		borderRadius: 12,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		height: '100%',
		width: '100%',
	},
	textFront: {
		fontSize: 24,
		color: 'white',
		fontWeight: 600,
		letterSpacing: 4,
	},
	flipBack: {
		padding: 40,
		backgroundColor: secondaryColor,
		borderRadius: 12,
		backfaceVisibility: 'hidden',
	},
	textBackTitle: {
		fontSize: 20,
		color: 'white',
		fontWeight: 600,
		letterSpacing: 2,
	},
	textBackDef: {
		fontSize: 16,
		color: 'white',
		marginTop: 20,
		marginLeft: 15,
		lineHeight: 24,
	},
	buttons: {
		paddingTop: 20,
		display: 'flex',
	},
	show: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		borderRadius: 12,
		backgroundColor: '#00798c',
		text: {
			color: 'white',
			fontWeight: 600,
			letterSpacing: 1,
			fontSize: 18,
		},
	},
	scoreButtons: {
		padding: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	like: {
		padding: 20,
		borderRadius: 40,
		backgroundColor: 'green',
	},
	dislike: {
		padding: 20,
		borderRadius: 40,
		backgroundColor: 'red',
	},
	bottomView: {
		marginBottom: 50,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
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
				display: 'flex',
				flexDirection: 'row',
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
					textAlign: 'center'
				}
			},
		},
	},
});
