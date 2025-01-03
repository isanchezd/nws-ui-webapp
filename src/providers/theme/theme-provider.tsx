import { createContext, ReactElement, ReactNode, useState } from "react";

import { ThemeContextType } from "./theme-context-type.ts";

enum Themes {
	light = "light",
	dark = "dark",
}

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
	const [theme, setTheme] = useState(Themes.light);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === Themes.light ? Themes.dark : Themes.light));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
