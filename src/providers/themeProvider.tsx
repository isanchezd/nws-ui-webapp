import { ReactElement, ReactNode, useState } from "react";

import { ThemeContext } from "../context/themeContext/themeContext";

enum Themes {
	light = "light",
	dark = "dark",
}

interface ThemeProviderProps {
	children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
	const [theme, setTheme] = useState(Themes.light);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === Themes.light ? Themes.dark : Themes.light));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
