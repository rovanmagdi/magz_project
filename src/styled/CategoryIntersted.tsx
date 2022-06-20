import { styled } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";

export const StyledTitle = styled(Box)(({ theme }) => ({
    marginBottom:"10px",marginLeft:"12px",fontWeight:"800",fontSize:"1rem"
  }));

  export const StyledDescription = styled(Box)(({ theme }) => ({
    marginLeft:"12px",fontSize:"0.7rem",color:"gray",
    width:"220px"
  }));