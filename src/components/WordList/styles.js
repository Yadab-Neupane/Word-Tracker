import { StyleSheet } from "react-native"
import {
    labelWhiteColor,
    secondaryColor
} from "../../common/includes"

export default styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    addButton: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 25
    },
    wordListView: {
        borderRadius: 5,
        marginTop: 10,
        padding: 20,
        backgroundColor: secondaryColor
    },
    content: {
        color: labelWhiteColor
    },
    searchContainer: {
        margin: 2,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: "90%",
    }
})