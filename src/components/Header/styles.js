import { StyleSheet } from "react-native"
import { fontFamilyPlatform, lavenderColor, secondaryColor } from "../../common/includes"

export default styles = StyleSheet.create({
        container: {
                padding: 10,
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',

        },
        title: {
                fontFamily: fontFamilyPlatform,
                fontWeight: 'bold',
                fontSize: 20,
                color: secondaryColor,
        },
        platform: {
                alignSelf: 'flex-end',
                fontSize: 10,
                marginBottom: 0,
                marginTop: 0
        },
        author: {
                fontSize: 12,
                fontFamily: fontFamilyPlatform,
                marginTop: 0,
        },
        centeredView: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
                backgroundColor: 'rgba(0,0,0,0.6)',
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
        button: {
                width: 100,
                borderRadius: 10,

                padding: 10,
                alignItems: 'center',
                elevation: 5,
                backgroundColor: lavenderColor,
        },
        textStyle: {
                // backgroundColor: 'blue',
                // color: 'white',
                // fontWeight: 'bold',
                // textAlign: 'center',
                paddingBottom: 30,
                fontFamily: fontFamilyPlatform,
                fontWeight: 'bold',
                fontSize: 30,
        },
        appAuthors: {
                minWidth: '100%',
                fontFamily: fontFamilyPlatform,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'justify'
        },
        modalText: {
                textAlign: 'justify'
        },
        appDescription: {
                minWidth: '100%',
                fontFamily: fontFamilyPlatform,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'justify'
        },
        modalDescription: {
                textAlign: 'justify'
        },
        labelAndCloseAction: {
                flexDirection: 'row',
                width: '100%',
                padding: 20,
        },
        closeModalTextstyle: {
                paddingBottom: 30,
                fontFamily: fontFamilyPlatform,
                fontWeight: 'bold',
                fontSize: 30,
                closeModal: {

                        color: 'white',
                        fontWeight: 'bold',
                }
        },
        authorInfo: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
        },
})