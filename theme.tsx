import { createContext, useContext, useState, type ReactNode } from "react";

// An in-app theme, toggled from a modal. Header colours come from it.
const palettes = {
  light: { background: "#F7F4EF", text: "#1A1412" },
  dark: { background: "#1B1A18", text: "#F0ECE4" },
};

type Theme = { dark: boolean; setDark: (dark: boolean) => void; colors: (typeof palettes)["light"] };
const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, setDark, colors: dark ? palettes.dark : palettes.light }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme outside ThemeProvider");
  return theme;
}
