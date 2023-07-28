import { StyleSheet } from "react-native";
import { fontFamilyPlatform } from "../../common/includes";
export default styles = StyleSheet.create({
    progressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    progressInfo: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    progressLabels: {
        color: 'white',
        fontSize: 12
    },
    cardLabels: {
        color: 'white',
        marginTop: 10,
        fontFamily: fontFamilyPlatform,
        fontSize: 14
    }
});