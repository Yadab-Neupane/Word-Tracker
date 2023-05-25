import { ScrollView, Text, View } from "react-native";
import styles from './styles'
import { Feather } from '@expo/vector-icons';


export default function WordItems({ navigation, route, title, description }) {
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
                        {title}
                    </Text>
                    <Feather
                        onPress={() => navigation.navigate("Detail")}
                        name="arrow-right-circle" size={24} color="white"
                        style={{ marginTop: 15 }} />
                </View>
                <View
                    style={{ flexDirection: 'column' }}
                >
                    <Text numberOfLines={1}
                        style=
                        {[styles.cardDescription,
                        { fontSize: 18 }]}
                    >
                        {description}
                    </Text>
                </View>

            </View>
        </View>
    )
}