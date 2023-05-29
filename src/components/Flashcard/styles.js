import { StyleSheet } from "react-native";
import { secondaryColor } from "../../common/includes";

export default styles = StyleSheet.create({
    flipView: {
        position: 'relative',
        minHeight: 200
    },
    flipFront: {
        padding: 20,
        backgroundColor: secondaryColor,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    textFront: {
        fontSize: 24,
        color: 'white',
        fontWeight: 600,
        letterSpacing: 4
    },
    flipBack: {
        padding: 40,
        backgroundColor: secondaryColor,
        borderRadius: 12,
        backfaceVisibility: 'hidden'
    },
    textBackTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 600,
        letterSpacing: 2
    },
    textBackDef: {
        fontSize: 16,
        color: 'white',
        marginTop: 20,
        marginLeft: 15,
        lineHeight: 24
    }
})