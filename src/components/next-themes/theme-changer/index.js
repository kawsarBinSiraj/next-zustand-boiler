"use-client";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <button
                className={`btn rounded-0 btn-${theme == "light" ? "dark" : "light"}`}
                onClick={() => {
                    setTheme(theme == "light" ? "dark" : "light");
                }}
            >
                Switch to {theme == "light" ? "dark" : "light"} Mode
            </button>
        </>
    );
};

export default ThemeChanger;