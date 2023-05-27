import { StyleSheet } from "react-native";
import { accentColor, labelWhiteColor, secondaryColor } from "../../common/includes";


export default styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    verticalOrientation: {
        flexDirection: 'column'
    },
    wordLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    wordTF: {
        // borderBottomWidth: 0.2,
        padding: 5,
        marginTop: 10,
        borderWidth: 0.2,
        marginBottom: 20,
    },
    wordDesc: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    touchableButton: {

        flexDirection: 'column',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    saveButton: {

        backgroundColor: secondaryColor,
        textAlign: 'center',
        borderRadius: 10,
        padding: 20,
        color: labelWhiteColor,
    },
    errorCard: {
        padding: 20,
        backgroundColor: 'black',
        borderRadius: 8,
        marginBottom: 20
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'left'
    }
})