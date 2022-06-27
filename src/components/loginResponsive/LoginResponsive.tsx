import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../../assets/sign.png";
import MniNavbar from "../mniNabarSign/mniNavbar";
export default function LoginResponsive() {
  const StyledImgContainer = styled(Box)(({ theme }) => ({
    // padding: "50px 0px 50px 50px",
    maxWidth:"80%",
    margin:"auto"
  }));
  const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    padding: "20px 0px 0px 0px",
    justifyContent: "space-between",
    fontFamily: "Oswald",
    fontWeight: "800",
    fontSize: "14px",
    textTransform: "uppercase",
  }));
  const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.light}`,
    height: "3px",
    width: "370px",
    borderRadius: "10px",
    margin: "8px 0px 0px 15px",
  }));
  return (
    <StyledImgContainer>
      <img src={Image} height="350px" width="450px"  />
      <MniNavbar  />
      <Box sx={{ width: "450px" }}>
        <StyledGridRightTitle sx={{ color: "black" }}>
          Contact Us
          <StyledGridRightLine />
        </StyledGridRightTitle>
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "5px", paddingLeft: "20px" }}
        >
          <Grid item xs={2} sx={{ fontWeight: "bold" }}>
            Phone:
          </Grid>
          <Grid item xs={4} sx={{ color: "#4D7E96" }}>
            152 125 458
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "5px", paddingLeft: "20px" }}
        >
          <Grid item xs={2} sx={{ fontWeight: "bold" }}>
            Email:
          </Grid>
          <Grid item xs={4} sx={{ color: "#4D7E96" }}>
            magza123@gmail.com
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "5px", paddingLeft: "20px" }}
        >
          <Grid item xs={2} sx={{ fontWeight: "bold" }}>
            Web:
          </Grid>
          <Grid item xs={4} sx={{ color: "#4D7E96" }}>
            Magzstudio
          </Grid>
        </Grid>
      </Box>
    </StyledImgContainer>
  );
}
