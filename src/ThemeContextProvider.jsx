import { createContext, useState } from "react";

const Themes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "black",
        color: "white"
    }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{theme: Themes[theme], themeName: theme, toggleTheme}}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}