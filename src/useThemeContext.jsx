import { useContext } from "react"
import { ThemeContext } from "./ThemeContextProvider"


export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    console.log("Theme => ", theme);
    return theme;
}