import { DefaultTheme } from "@react-navigation/native";


export default AppLightTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        card: '#ffffff',
        border: '#444859',
        primary: '#f9f9f9',
        secondary: '#f9f9f9',
        text: '#000000',
        background: '#E9F1F7',
        textColorPlaceholder: '#545E75',
        header: '#fff',
        tab: "#fff",
        inactiveTab: "#000",
        activeTab: "#000",
    }
}