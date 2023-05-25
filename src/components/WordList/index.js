import { ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import WordItems from './WordItems'
import { useState } from 'react';


export default function WordList({ navigation, route, words }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.addButton}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Forms')}
                    >
                        <MaterialIcons name="add-to-photos" size={24} color="black" />
                    </TouchableHighlight>
                </View>

                {words.map((item, index) => {
                    return (<WordItems
                        key={index}
                        title={item.title}
                        description={item.description}
                        navigation={navigation}
                    />
                    )
                })}

            </View>
        </ScrollView>
    )
}