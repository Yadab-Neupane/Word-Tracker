import { View, Share } from "react-native";
import styles from "./style";
import { FontAwesome } from '@expo/vector-icons';
import { secondaryColor } from "../../common/includes";

export default function ShareWords({ word }) {

    const detailsToShare = {
        title: "Word Tracker App",
        message: `Word: ${word.title}, Defination: ${word.defination}`,
    };

    const shareOnOtherApps = async () => {
        try {
            const result = await Share.share(detailsToShare);
            // if (result.action === Share.sharedAction) {
            //     if (result.activityType) {
            //         // shared with activity type of result.activityType
            //     } else {
            //         // shared
            //     }
            // } else if (result.action === Share.dismissedAction) {
            //     // dismissed
            // }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <FontAwesome name="share-alt" size={24} color={secondaryColor} onPress={shareOnOtherApps} />
        </View>
    );
}