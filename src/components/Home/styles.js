import { StyleSheet } from "react-native"
import {
    labelWhiteColor,
    fontFamilyPlatform,
    secondaryColor
} from './../../common/includes'

export default styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    card1: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: secondaryColor,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'space-between'
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
        fontSize: 18
    },
    image: {
        marginTop: 60,
        // marginRight: -20,
        marginLeft: -25,
        width: 60,
        height: 60,

    },
    card2: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: secondaryColor,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    card3: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: secondaryColor,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
})