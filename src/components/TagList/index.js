import { View } from 'react-native'
import Tag from "./Tag/index";
import styles from './styles';

export default function TagList(navigation, route) {
    const tempTagList = ["bmw", "mercedessdadadasdasdsadasds", "honda", "nissan", "hyundai", "toyota"];
    console.log(tempTagList);
    return (
        <View style={styles.container}>
            {tempTagList.map((item, index) => {
                return (
                    <View style={styles.tag}>
                        <Tag 
                            key={index}
                            tag={item}
                        />
                    </View>);
            })}
        </View>
    )
}