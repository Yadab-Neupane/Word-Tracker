import { StyleSheet } from "react-native"
import { fontFamilyPlatform, labelWhiteColor, secondaryColor } from "../../common/includes"


export default styles = StyleSheet.create({
    setNotification: {
        fontSize: 18,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    titleModal: {
        fontFamily: fontFamilyPlatform,
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        marginTop: 30,
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        marginBottom: 0,
        width: 150,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    notificaionIconColor: {
        fontSize: 18,
    },
    eachButton: {
        padding: 5,
        width: 150,

    },
    selectText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundColor: secondaryColor,
        color: labelWhiteColor,
        width: 'auto',
        padding: 10,
        borderRadius: 10,
        paddingBottom: 5
    }
})