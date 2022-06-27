import { Box, styled } from "@mui/material";
import React from "react";
import { StyledImage } from "../../styled/Navbar";
import Logo from "../../assets/logo.png";
import LogoFooter from "../../assets/logoFooter.png";

import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/palette";
export const BoxImg = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  marginTop: "10px",
  marginBottm: "20px",

  
  // backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundImage: `url(${
    theme.palette.mode === "light" ? `${Logo}` : `${LogoFooter}`
  })`,
 
}));

export default function NavbarImage() {
  const nagivate: any = useNavigate();

  const handleHome = () => {
    nagivate("/");
  };

  return (
    <StyledImage>
      <BoxImg onClick={handleHome}  height= "70px" width= "160px"/>
    </StyledImage>
  );
}
