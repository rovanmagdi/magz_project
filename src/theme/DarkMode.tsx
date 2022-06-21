

// import darkScrollbar from '@mui/material/darkScrollbar';



// const theme = createTheme({
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: theme.palette.mode === 'dark' ? darkScrollbar() : null,
//       },
//     },
//   },
// });

import { colors, PaletteMode, responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const getDesignMode = (mode: PaletteMode) => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
      },
      typography: {

        h1: {
          fontSize: "50px",
          fontWeight: "600",
          color: mode === "light" ? "#3f51b5" : "#8d9df5",
          textShadow: "0 0.4rem 0.4rem #00000038",
        },
        h2: {
          fontSize: "2rem",
          fontWeight: "600",
        
        },
        h3: {
          fontSize: "1.8rem",
          fontWeight: "800",
          color: mode === "light" ? "white" : "white",
        },
        h4: {
          fontSize: "22px",
          color: mode === "light" ? "#000000de" : "white",
        },
        h5: {
          fontSize: "20px",
        },
        h6:{ fontWeight:"800",
             color: mode === "light" ? "white" : "white"},
        caption: {
          color: mode === "light" ? "#0000008a" : "#fff",
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