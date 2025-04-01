import React, { createContext, useContext } from "react";
import { Theme } from "./Types"; // Import the main Theme interface

// Define a minimal default theme structure.
// The actual values will come from the consuming project.
const defaultTheme: Theme = {
  colorTokens: {},
  fontSizeTokens: { small: {}, medium: {}, large: {} },
  iconSizeTokens: { small: {}, medium: {}, large: {} },
  spacingTokens: { small: {}, medium: {}, large: {} },
  borderRadiusTokens: {},
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider: React.FC<{
  theme: Theme;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  // You might want to merge the provided theme with defaults here
  // for robustness, but for now, we'll just use the provided theme.
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  // Basic check to ensure the theme isn't completely empty if needed
  if (Object.keys(context.colorTokens).length === 0) {
      console.warn("ThemeContext: colorTokens appear to be empty. Ensure the theme is provided correctly.");
  }
  return context;
};