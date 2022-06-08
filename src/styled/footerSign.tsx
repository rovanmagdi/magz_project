import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledFooter = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    width: "100%",
    height: "40px",
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
    textAlign: "center",
    paddingTop: "20px",
  }));