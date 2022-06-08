import React from "react";
import { StyledImage } from "../../styled/Header";
import Logo from "../../assets/logo.png";

const NavbarSign = () => {
  return (
    <>
      <StyledImage sx={{paddingTop:"5px",boxShadow:"1px 1px 8px -4px rgba(0,0,0,0.75);"}}>
        <img src={Logo} height="70px" width="160px"/>
      </StyledImage>
    </>
  );
};
export default NavbarSign;
