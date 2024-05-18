import { createContext } from "react";

import { ThemeContextType } from "./themeContextType";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
