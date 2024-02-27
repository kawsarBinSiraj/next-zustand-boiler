"use-client";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <button
                className={`btn rounded-0 btn-${theme}`}
                onClick={(e) => {
                    e.preventDefault();
                    if (theme === "dark") setTheme("light");
                    else if (theme === "light") setTheme("dark");
                }}
            >
                Switch to {theme == "dark" ? "light" : "dark"} Mode
            </button>
        </>
    );
};

export default ThemeChanger;
