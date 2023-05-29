import { StyleSheet } from "react-native"
import { labelWhiteColor, secondaryColor } from "../../../common/includes"

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tag: {
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: secondaryColor,
        borderRadius: 10,
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: labelWhiteColor
    }
})