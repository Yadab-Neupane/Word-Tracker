import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Serif',
        fontWeight: 'bold',
        fontSize: 20
    },
    platform: {
        alignSelf: 'flex-end',
        fontSize: 10,
        marginBottom: 0,
        marginTop: 0
    },
    author: {
        fontSize: 12,
        fontFamily: 'Serif',
        marginTop: 0,
    }
})