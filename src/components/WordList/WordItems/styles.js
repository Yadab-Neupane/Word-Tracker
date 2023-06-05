import { StyleSheet } from "react-native"
import {
    fontFamilySerif,
    labelWhiteColor,
    secondaryColor
} from "../../../common/includes"

export default styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        flexDirection: 'column',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20
    },
    card: {
        padding: 20
    },
    cardText: {
        color: labelWhiteColor,
        fontFamily: fontFamilySerif
    },
    cardDescription: {
        color: labelWhiteColor,
        fontFamily: fontFamilySerif
    }
})