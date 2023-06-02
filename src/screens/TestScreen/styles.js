import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	box: {
		backgroundColor: 'white',
		borderRadius: 20,
		minHeight: 200,
        overflow: 'hidden'
	},
	image: {
        flex: 1,
		resizeMode: 'cover',
        height: '100%',
        width: '100%',
        zIndex: -1
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
});
