import { styled } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";

export const StyledFooter = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    width: "100%",
    height: "350px",
    backgroundColor: `${theme.palette.primary.light}`,
    margin: "auto",
    // display: "flex",
    color: `${theme.palette.primary.contrastText}`,
    justifyContent: "space-between",
    // padding:"10px"
  }));
  export const StyledFooterMedia = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    width: "100%",
    height: "680px",
    backgroundColor: `${theme.palette.primary.light}`,
    margin: "auto",
    // display: "flex",
    color: `${theme.palette.primary.contrastText}`,
    justifyContent: "space-between",
    // padding:"10px"
  }));
  export const StyledGridLeft = styled(Grid)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    padding: "30px 0px 0px 25px",
  }));
  export const StyledGridLeftText = styled(Box)(({ theme }) => ({
    marginTop: "20px;",
    fontSize: "10px",
    color: `${theme.palette.secondary.dark}`,
    width: "80%",
    lineHeight: "1.8",
  }));
  export const StyledGridLeftTextMedia = styled(Box)(({ theme }) => ({
    marginTop: "20px;",
    fontSize: "15px",
    color: `${theme.palette.secondary.dark}`,
    width: "80%",
    lineHeight: "1.8",
  }));
  export const StyledFooterButton = styled(Button)(({ theme }) => ({
    marginTop: "20px;",
    marginBottom: "40px",
    fontSize: "12px",
    height: "40px",
    width: "120px",
    fontFamily: "Oswald",
    fontWeight: "bolder",
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.secondary.contrastText}`,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.secondary.contrastText}`,
    },
  }));
  export const StyledGridRight = styled(Grid)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
  }));
  export const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    padding: "30px 0px 0px 42px",
    justifyContent: "space-between",
    fontFamily: "Oswald",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase",
  }));
  export const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.dark}`,
    height: "3px",
    width: "160px",
    borderRadius: "10px",
    margin: "12px 0px 0px 25px",
  }));

  export const StyledLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.dark}`,
    width: "800px",
    margin: "auto",
    marginTop:"30px",
    height: "0.3px",
  }));
  export const StyledLineMedai = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.dark}`,
    width: "600px",
    margin: "auto",
    marginTop:"30px",
    height: "0.3px",
  }));
  export const BoxStyle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.secondary.dark}`,
    fontSize: "10px",
    marginTop: "10px",
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
  export const StyledFooterBottom = styled(Box)(({ theme }) => ({
    textAlign: "center",
    marginTop: "10px",
    fontSize: "10px",
    color: `${theme.palette.secondary.dark}`,
  }));
 
