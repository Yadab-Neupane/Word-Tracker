import { StyleSheet } from "react-native"
import { blueColor, labelWhiteColor } from "../../../common/includes"

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tag: {
        flex: -1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: blueColor,
        borderRadius: 10,
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: labelWhiteColor,
        fontStyle:"italic"
    }
})