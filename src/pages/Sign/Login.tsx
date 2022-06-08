import React from "react";
import FooterSign from "../../components/footerSign/FooterSign";
import ImageSign from "../../components/imageSign/ImageSign";
import NavbarSign from "../../components/navbarSign/NavbarSign";
import { Home, Info } from "../../styled/HomePage";
import MniNavbar from "../../components/mniNabarSign/mniNavbar";
import { StyledLoginContainer } from "../../styled/Login";
import { Box } from "@mui/system";

export default function Login() {
  return (
    <>
      <Home />
      <Info>
        fff
        <StyledLoginContainer>
          <NavbarSign />
          <Box sx={{ display: "flex" }}>
            <ImageSign />
            <MniNavbar />
          </Box>

          <FooterSign />
        </StyledLoginContainer>
      </Info>
    </>
  );
}
