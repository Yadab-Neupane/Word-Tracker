import { StyleSheet } from "react-native";
import { secondaryColor, labelWhiteColor, fontFamilyPlatform, blueColor, lavenderColor } from "../../common/includes";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: fontFamilyPlatform,
        fontSize: 22,
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
    card: {
        padding: 20,
        backgroundColor: secondaryColor,
        borderRadius: 12,
        marginBottom: 20,
        justifyContent: 'space-between',
        infoHeader: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
        },
        info: {
            flex: 1
        }
    },
    cardLabelsTitle: {
        fontSize: 40,
        color: labelWhiteColor,
        fontFamily: fontFamilyPlatform,
    },
    cardLabels: {
        color: 'white',
        marginTop: 10,
        fontFamily: fontFamilyPlatform,
        fontSize: 14
    },
    image: {
        width: 60,
        height: 60,
        marginTop: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '60%',
    },
    button: {
        backgroundColor: blueColor,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems:"center"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    formLabel: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    floatButton: {
		position: 'absolute',
		bottom: 10,
		borderRadius: 25,
		height: 50,
		width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
	},
	goalButton: {
        right: 15,
        backgroundColor: lavenderColor
    },
});