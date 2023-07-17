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
            alignItems: 'center',
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
        fontSize: 18
    },
    image: {
        width: 60,
        height: 60,
    }
})