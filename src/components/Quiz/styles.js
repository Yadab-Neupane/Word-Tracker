import { StyleSheet } from "react-native";
import { accentColor, secondaryColor } from "../../common/includes";

export default styles = StyleSheet.create({
    container: {
        padding: 20
    },
    question: {
        padding: 40,
        backgroundColor: secondaryColor,
        borderRadius: 12,
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionText: {
        fontSize: 20,
        color: 'white',
        lineHeight: 24,
    },
    options: {
        marginTop: 40,
        display: 'flex',
        gap: 20
    },
    option: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 12,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white'
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: secondaryColor
    },
    nextBtn: {
        alignItems: 'center',
        backgroundColor: accentColor,
        padding: 12,
        borderRadius: 12
    },
    nextBtnText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    clickedCorrect: {
        borderColor: 'green',
    },
    clickedIncorrect: {
        borderColor: 'red',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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
            modalHeader: {
                fontSize: 18,
                fontWeight: 600,
            },
            modalBody: {
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                box: {
                    padding: 8,
                    text: {
                        padding: 10,
                        textAlign: 'center',
                    },
                },
            },
            button: {
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: '#2196F3',
                width: 100,
                textStyle: {
                    textAlign: 'center',
                    color: 'white'
                }
            },
        },
    },
})