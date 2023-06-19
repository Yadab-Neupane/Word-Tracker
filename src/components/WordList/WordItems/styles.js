import { StyleSheet } from "react-native"
import {
    fontFamilySerif,
    labelWhiteColor,
    secondaryColor
} from "../../../common/includes"

export default styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        minHeight: 130
    },
    card: {
        padding: 10
    },
    cardWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardText: {
        color: labelWhiteColor,
        fontFamily: fontFamilySerif,
        fontSize: 26,
        fontWeight: 600
    },
    cardDescription: {
        color: labelWhiteColor,
        fontFamily: fontFamilySerif,
        fontSize: 18,
        padding: 5
    },
    word: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 20
    }
})