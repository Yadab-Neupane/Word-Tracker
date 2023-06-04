import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { Feather } from '@expo/vector-icons';


export default function WordItems({ navigation, route, word }) {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.card}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={
                            [styles.cardText,
                            { fontSize: 40 }]
                        }
                    >
                        {word.title}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail", { word })}
                        style={{ marginTop: 15 }}
                    >
                        <Feather
                            name="arrow-right-circle" size={24} color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ flexDirection: 'column' }}
                >
                    <Text numberOfLines={1}
                        style=
                        {[styles.cardDescription,
                        { fontSize: 18 }]}
                    >
                        {word.defination}
                    </Text>
                </View>

            </View>
        </View>
    )
}