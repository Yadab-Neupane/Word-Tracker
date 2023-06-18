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
        marginTop: 10
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
    },
    bookmarkButton: {
        marginTop: -15, 
        marginBottom: 5, 
        alignSelf: 'flex-end', 
        marginRight: 10
    }
})