import { DefaultTheme } from "@react-navigation/native";
import { accentColor, labelWhiteColor, lavenderColor, primaryColor, secondaryColor } from "../common/includes";



export default AppDarkTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        text: '#fff',
        headerTitle: '#000000',
        card: '#191919',
        border: '#444859',
        primary: '#f9f9f9',
        background: "#000",
        textColorPlaceholder: labelWhiteColor,
        inactiveTab: "#fff",
        activeTab: "#fff",
        header: '#fff',
        tab: "#000"
    },
}