import { Box } from '@mui/material'
import React from 'react'
import { StyledImage } from '../../styled/Navbar'
import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function NavbarImage() {
  const nagivate: any = useNavigate();

    const handleHome = () => {
        nagivate("/");
      };
  return (
    <StyledImage>
    <Box
      component="img"
      src={Logo}
      height="70px"
      width="160px"
      onClick={handleHome}
      sx={{ cursor: "pointer",marginTop:"10px" }}
    />
  </StyledImage>
  )
}
