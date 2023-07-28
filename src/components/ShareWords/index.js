import { View, Share } from "react-native";
import styles from "./style";
import { FontAwesome } from '@expo/vector-icons';
import { secondaryColor } from "../../common/includes";
import { useTheme } from "@react-navigation/native";

export default function ShareWords({ word }) {
    const { colors } = useTheme()
    const detailsToShare = {
        title: "Word Tracker App",
        message: `Word: ${word.title}, Defination: ${word.defination}`,
    };

    const shareOnOtherApps = async () => {
        try {
            const result = await Share.share(detailsToShare);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <FontAwesome name="share-alt" size={24} color={colors.text} onPress={shareOnOtherApps} />
        </View>
    );
}