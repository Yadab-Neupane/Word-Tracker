import { StyleSheet } from "react-native"
import {
    blueColor,
    lavenderColor
} from "../../../common/includes"

export default styles = StyleSheet.create({
    tag: {
        paddingTop: 5,
        margin:3,
        flexDirection:"row"
    },
    tagContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 12,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        
    },
    tagUnSelected : {
        borderColor: "#BA90C6"
    },
    tagSelected: {
        borderColor: "#5783db"
    },
    text: {
        paddingRight: 1
    }
});