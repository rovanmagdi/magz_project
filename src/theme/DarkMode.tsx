import {  PaletteMode, responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const getDesignMode = (mode: PaletteMode) => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        divider: '#E6E8F0',
     
          primary: {
            main: '#4D7E96',
            light: '#272727',
            dark: '#3832A0',
            contrastText:  mode === "light" ? "#ffff" : "rgba(0,0,0,.9)",

          },
          secondary: {
            main: '#E6E8F0',
            light: '#3FC79A',
            dark: '#B1B1B1',
            contrastText: '#FFFFFF'
          },
       
        
      },

       
      typography: {

      
      
        h3: {
          fontSize: "2rem", fontFamily:"arial",
        
          color: mode === "light" ? "black" : "white",
        },
        h4: {
         
          color: mode === "light" ? "#000000de" : "white",
        },
       
        h6: { fontWeight: "600", color: mode === "light" ? "black" : "white" },
        caption: {
          color: mode === "light" ? "#000000" : "#fff",
          fontSize: "0.9rem",
        },
        subtitle1: {
          color: mode === "light" ? "#000000b3" : "#fff",
          fontSize: "0.9rem",
        },
       
      },

    })
  );
};
