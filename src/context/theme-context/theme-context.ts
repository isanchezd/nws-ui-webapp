import { createContext } from "react";

import { ThemeContextType } from "./theme-context-type.ts";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
