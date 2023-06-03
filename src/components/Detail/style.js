import { StyleSheet } from "react-native"
import { fontFamilyPlatform } from "../../common/includes"

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 15,
        marginTop: 10
    },
    tag: {
        marginTop: 20
    },
    tagHeader: {
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: 'underline',
    },
    taglistContainer: {
        flexDirection: 'row',
    },
    containerModal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    modalGroup: {
        padding: 20,
        backgroundColor: 'white',
        width: "80%",
        borderRadius: 15,
    },
    titleModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: fontFamilyPlatform
    },
    title: {
        fontFamily: fontFamilyPlatform,
        fontSize: 30,
    },
    fields_buttons: {
        padding: 20
    },
    saveButton: {
        backgroundColor: 'orange',
        borderRadius: 8,
        padding: 10,

    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: 'red',
        fontSize: 20,
        marginTop: 10
    },
    wordLabel: {
        fontWeight: 'bold'
    },
    wordDesc: {
        fontWeight: 'bold'
    },
    wordTF: {
        borderRadius: 2,
        padding: 5,
        marginTop: 10,
        borderWidth: 0.2,
        marginBottom: 20,

    },
    updateBtn: {
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green',
        borderRadius: 8,

    },
    updateBtnText: {
        color: 'white',
        textAlign: 'center'
    },
    actionBtns: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editButtonTouch: {
        borderRadius: 9,
        padding: 20,
        backgroundColor: 'green'
    },
    editBtnText: {
        color: 'white'
    },
    deleteButtonTouch: {
        borderRadius: 9,
        padding: 20,
        backgroundColor: 'red'
    },
    deleteBtnText: {
        color: 'white'
    },
})