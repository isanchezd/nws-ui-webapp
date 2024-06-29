import { useContext } from "react";

import { ThemeContext } from "../context/themeContext/themeContext";
import { ThemeContextType } from "../context/themeContext/themeContextType";

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
