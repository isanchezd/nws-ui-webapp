import { useContext } from "react";

import { ThemeContext } from "../context/theme-context/theme-context.ts";
import { ThemeContextType } from "../context/theme-context/theme-context-type.ts";

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
