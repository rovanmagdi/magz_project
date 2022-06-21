import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    fontFamily: "Oswald",
    fontWeight: "800",
    fontSize: "14px",
    textTransform: "uppercase",
    position: "absolute",
    paddingLeft: "20px",
    marginTop: "-10px",
    backgroundColor: "white",
  }));
 export const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.light}`,
    height: "3px",
    width: "370px",
    borderRadius: "10px",
    margin: "8px 0px 0px 15px",
  }));