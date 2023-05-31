import { StyleSheet } from "react-native"
import { blackShadeColor, blueColor, labelWhiteColor, lavenderColor, primaryColor, secondaryColor } from "../../../common/includes"

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tag: {
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: blueColor,
        borderRadius: 10,
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: labelWhiteColor,
        fontStyle: "italic"
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalBox: {
        alignItems:"center",
        backgroundColor: labelWhiteColor,
        padding: 10,
        width: '90%',
        borderRadius: 15,
        shadowOpacity: 0.25,
        elevation: 5,
    },
    textbox: {
        borderBottomColor: blackShadeColor,
        borderBottomWidth: 1,
        padding: 10,
        margin: 20,
        width: '75%',
        textAlign: 'center',
        fontSize: 25
    },
    buttonContainer: {
        flexDirection: "row"
    },
    button: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: secondaryColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: labelWhiteColor
    },
    buttonText: {
        color: labelWhiteColor,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20
    }

})