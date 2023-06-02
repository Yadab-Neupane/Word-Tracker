import { View, Text } from "react-native";


export default function Detail({ words }) {
    return (
        <View>

            <Text>{words[0].description}</Text>

        </View>
    )
}