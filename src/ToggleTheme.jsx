import { useThemeContext } from "./useThemeContext"

export const ToggleTheme = () => {
    const {themeName, toggleTheme} = useThemeContext();

     

    return (
        <div>
            <input type="checkbox" checked={themeName === "light"} onChange={toggleTheme}/>
            <span>{themeName}</span>
        </div>
    )
}