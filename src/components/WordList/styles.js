import { StyleSheet } from 'react-native';
import { labelWhiteColor, secondaryColor, lavenderColor, accentColor, primaryColor } from '../../common/includes';

export default styles = StyleSheet.create({
    container: {
        padding: 20,
        flex:1,
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
        backgroundColor: secondaryColor
    },
    content: {
        color: labelWhiteColor
    },
    searchContainer: {
        margin: 2,

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
    // sortButton: {
    //     paddingRight: 10,
    //     flexDirection: "row",
    //     justifyContent: 'space-between',
    // },
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
        width: "90%",
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 25,
        bottom: 60,
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
        maxHeight:'70%'
	},
    modalView: {
		marginTop: 90,
        marginHorizontal:10,
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
            height:'70%'
		},
        container: {
            flex: 1,
            flexDirection: "row",
            flexWrap: 'wrap'
        },
        tag:{
            paddingTop:10
        },
        modalButtonContainer:{
            flexDirection: "row"
        },
		button: {
			borderRadius: 20,
			padding: 10,
            margin:5,
			elevation: 2,
			backgroundColor: '#2196F3',
			width: 100,
			textStyle: {
				textAlign: 'center',
			},
		},
        modalTabHeaderContainer: {
            flexDirection: 'row',
            backgroundColor: '#2196F3',
            borderRadius: 40,
            marginLeft: 10,
            marginRight: 10
        },
        modalTabHeader: {
            width: '50%',
            height: 60,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalTabHeader_Active:{
            backgroundColor: '#BA90C6',
        },
        modalTabHeader_Inactive:{
            backgroundColor: '#2196F3',
        },
        modalTabHeader_Text_Active:{
            color: 'white',
        },
        modalTabHeader_Text_Inactive:{
            color: 'white',
        }
	},
})