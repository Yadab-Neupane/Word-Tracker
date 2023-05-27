import { StyleSheet } from "react-native"
import { labelWhiteColor, secondaryColor } from "../../common/includes"

export default styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    addButton: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    wordListView: {
        borderRadius: 5,
        marginTop: 10,
        padding: 20,
        backgroundColor: secondaryColor
    },
    content: {
        color: labelWhiteColor
    }
})