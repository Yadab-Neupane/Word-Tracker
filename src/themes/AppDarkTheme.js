import { DefaultTheme } from "@react-navigation/native";
import { accentColor, labelWhiteColor, blackShadeColor, lavenderColor, primaryColor, secondaryColor } from "../common/includes";

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
        secondary: '#393646',
        background: "#000",
        textColorPlaceholder: labelWhiteColor,
        inactiveTab: "#fff",
        activeTab: "#fff",
        header: "#282828",
        tab: "#000"
    },
}