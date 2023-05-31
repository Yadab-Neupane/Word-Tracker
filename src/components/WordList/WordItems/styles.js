import { Platform, StyleSheet } from "react-native"
import { fontFamilyPlatform, labelWhiteColor, secondaryColor } from "../../../common/includes"

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
        fontFamily: fontFamilyPlatform,
    },
    cardDescription: {
        color: labelWhiteColor,
        fontFamily: fontFamilyPlatform
    }
})