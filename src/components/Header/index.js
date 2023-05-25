import { Text, View } from 'react-native'
import styles from './styles'
import { PLATFORM_OS, appAuthor, appTitle } from '../../common/includes'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{appTitle}</Text>
            <View style={styles.authorAndPlatform}>
                <Text style={styles.platform}>{PLATFORM_OS}</Text>
                <Text style={styles.author}>{appAuthor}</Text>
            </View>
        </View>
    )
}