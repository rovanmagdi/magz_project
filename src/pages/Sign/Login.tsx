import React from "react";
import FooterSign from "../../components/footerSign/FooterSign";
import ImageSign from "../../components/imageSign/ImageSign";
import NavbarSign from "../../components/navbarSign/NavbarSign";
import { Home, Info,Content } from "../../styled/HomePage";

import MniNavbar from "../../components/mniNabarSign/mniNavbar";
import { StyledLoginContainer } from "../../styled/Login";
import {Box, useMediaQuery} from"@mui/material"
import { theme } from "../../theme/palette";
import LoginResponsive from "../../components/loginResponsive/LoginResponsive";

export default function Login() {
  const isMatch = useMediaQuery(theme.breakpoints.down(1117));

  return (
    <>
      <Home />
      <Content>

       {!isMatch?(
        
        <StyledLoginContainer>
          <NavbarSign />
          <Box sx={{ display: "flex" }}>
            <ImageSign />
            <MniNavbar />
          </Box>
          <FooterSign />
        </StyledLoginContainer>):(
        <StyledLoginContainer>
          <NavbarSign />
          <Box >
           <LoginResponsive/>
          </Box>
          <FooterSign />
        </StyledLoginContainer>)}
      </Content>

    </>
  );
}
