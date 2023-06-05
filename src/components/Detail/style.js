import { StyleSheet } from "react-native"
import { fontFamilyPlatform } from "../../common/includes"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: fontFamilyPlatform,
        fontSize: 22,
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
        marginTop: 150,
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

    // detail word description
    titleView: {
        flexDirection: 'row',
        paddingLeft: 0,
        marginTop: 20,
    },
    titleDescription: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 20,
        fontFamily: fontFamilyPlatform,
        fontSize: 22,
    },

    descriptionView: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    description: {
        fontSize: 18,
        fontFamily: fontFamilyPlatform,
        textAlign: 'justify',
        textTransform: 'lowercase',

    },
    descriptionScrollView: {
        marginTop: 20,
    },

    titleContent: {
        textTransform: 'capitalize',
        paddingLeft: 10,
        fontFamily: fontFamilyPlatform,
        fontSize: 22,
    },
})