import { PaletteMode, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useCallback, useEffect, useMemo } from "react";
import { getDesignMode } from "../theme/DarkMode";

type ColorModeContext = {
  toggleColorMode: () => void;
};

export const ColorModeContext = React.createContext<ColorModeContext>({
  toggleColorMode: () => {},
});

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const isDarkModeMatch = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const toggleColorMode = useCallback(() => {
    setMode((prevMode: PaletteMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  }, []);

  useEffect(() => {
    setMode(isDarkModeMatch ? "dark" : "light");
  }, []);

  const theme = useMemo(() => getDesignMode(mode), [mode]);
  const contextValues = useMemo(
    () => ({
      toggleColorMode,
    }),
    []
  );
  return (
    <ColorModeContext.Provider value={contextValues}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}