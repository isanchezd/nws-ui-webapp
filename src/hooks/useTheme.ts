import { useContext } from "react";

import { ThemeContextType } from "../providers/theme/theme-context-type.ts";
import { ThemeContext } from "../providers/theme/theme-provider.tsx";

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
