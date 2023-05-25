import { StyleSheet } from "react-native"
import { secondaryColor } from "../../common/includes"

export default styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'sans-serif',
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
        fontFamily: 'sans-serif',
        marginTop: 0,
    }
})