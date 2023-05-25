import { Platform, StyleSheet } from "react-native"
import { labelWhiteColor, secondaryColor } from "../../../common/includes"

export default styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        flexDirection: 'column',
        padding: 20,
        borderRadius: 4,
        marginTop: 10,
        marginBottom: 20
    },
    card: {
        padding: 20
    },
    cardText: {
        color: labelWhiteColor,
        fontFamily: Platform.OS == 'ios' ? 'Cochin' : 'serif'
    },
    cardDescription: {
        color: labelWhiteColor,
        fontFamily: Platform.OS == 'ios' ? 'Cochin' : 'normal'
    }
})