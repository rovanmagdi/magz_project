import { styled } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";

 export const StyledGridRight = styled(Grid)(({ theme }) => ({
    color: `${theme.palette.primary.light}`,
  }));
  export const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.light}`,
    display: "flex",
   
    padding: "20px 0px 0px 42px",
    justifyContent: "space-between",
   
  }));
  export const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.light}`,
    height: "3px",
    width: "140px",
    borderRadius: "10px",
    margin: "12px 0px 0px 25px",
  }));
  export const BoxStyleTwo = styled(Box)(({ theme }) => ({
    marginLeft: "30px",
    width: "150px",
    fontSize: "10px",
    "&:hover": {
      color: `${theme.palette.primary.main}`,
      cursor: "pointer",
    },
  }));
  export const BoxStyle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.secondary.dark}`,
    fontSize: "10px",
    marginTop: "5px",
  }));