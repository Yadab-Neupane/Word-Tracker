import { StyleSheet } from "react-native";
import {
    fontFamilyPlatform,
    labelWhiteColor,
    lavenderColor,
    secondaryColor
} from "../../common/includes";


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
        fontFamily: fontFamilyPlatform,
    },
    wordTF: {
        padding: 5,
        marginTop: 10,
        borderWidth: 0.2,
        marginBottom: 20,
    },
    wordDesc: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: fontFamilyPlatform,
    },
    touchableButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        width: 300,
        justifyContent: 'flex-end',
    },
    saveButton: {
        backgroundColor: lavenderColor,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 18,
        padding: 15,
        color: labelWhiteColor,
    },
    errorCard: {
        padding: 20,
        backgroundColor: labelWhiteColor,
        borderRadius: 8,
        marginBottom: 20
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'left'
    }
})