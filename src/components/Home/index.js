import { Image, ScrollView, Text, View } from 'react-native'
import styles from './styles'

export default function Home({ words }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.card1}>
                    <View style={styles.verticalOrientation}>
                        <Text style={styles.cardLabelsTitle}>Your Progress !</Text>
                        <Text style={styles.cardLabels}>Total Words: {words.length}</Text>
                        <Text style={styles.cardLabels}>Attempted Quiz: 1</Text>
                        <Text style={styles.cardLabels}>Bookmarked Words: 40</Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/artificial-intelligence.png')}

                    />
                </View>

                <View style={styles.card2}>
                    <View style={styles.verticalOrientation}>
                        <Text style={styles.cardLabelsTitle}>Quizzes</Text>
                        <Text style={styles.cardLabels}>Attempted Quiz: 20</Text>
                        <Text style={styles.cardLabels}>Passed Quiz: 1</Text>
                        <Text style={styles.cardLabels}>Failed Quiz: 40</Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/quiz.png')}

                    />
                </View>

                <View style={styles.card3}>
                    <View style={styles.verticalOrientation}>
                        <Text style={styles.cardLabelsTitle}>Bookmarks</Text>
                        <Text style={styles.cardLabels}>Bookmarked Words: 20</Text>
                        <Text style={styles.cardLabels}>Shared Words: 1</Text>
                        <Text style={styles.cardLabels}></Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/book.png')}

                    />
                </View>
            </View>
        </ScrollView>
    )
}