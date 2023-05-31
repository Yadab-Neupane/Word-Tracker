import { StyleSheet } from "react-native"
import { fontFamilySerif, secondaryColor } from "../../common/includes"

export default styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: fontFamilySerif,
        fontWeight: 'bold',
        fontSize: 20,
        color: secondaryColor
    },
    platform: {
        alignSelf: 'flex-end',
        fontSize: 10,
        marginBottom: 0,
        marginTop: 0
    },
    author: {
        fontSize: 12,
        fontFamily: fontFamilySerif,
        marginTop: 0,
    }
})