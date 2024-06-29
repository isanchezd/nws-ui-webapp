import { Themes } from "../../enums/theme";

export interface ThemeContextType {
	theme: Themes;
	toggleTheme: () => void;
}
