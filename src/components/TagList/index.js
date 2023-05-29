import { View } from 'react-native'
import Tag from "./Tag/index";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { secondaryColor } from '../../common/includes';

export default function TagList(navigation, route) {
    const tempTagList = ["bmw", "mercedessdadadasdasdsadasds", "honda", "nissan", "hyundai", "toyota"];
    return (
        <View style={styles.container}>
           
            {tempTagList.map((item, index) => {
                return (
                    <View key={index} style={styles.tag}>
                        <Tag
                            tag={item}
                        />
                    </View>);
            })}

            <View style={styles.addButton}>
                <AntDesign name="pluscircle" size={30} color={secondaryColor} />
            </View>
        </View>
    )
}