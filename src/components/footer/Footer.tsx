import React, { useEffect } from "react";
import Logo from "../../assets/logoFooter.png";
import Person from "../../assets/person.png";
import PopularPosts from "../otherPost/otherPosts";
import {
  Box,
  Button,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  StyledGridRightTitle,
  StyledGridRightLine,
} from "../../styled/PopularPost";
import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterButton,
  StyledFooterMedia,
  StyledGridLeft,
  StyledGridLeftText,
  StyledLine,
  StyledLineMedai,
  StyledGridLeftTextMedia,
} from "../../styled/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RecentlyPosts } from "../../redux/actions/recentlyAction";
import PostDate from "../postDate/PostDate";
import LastPosts from "../lastPosts/LastPosts";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useContext } from "react";


import { SxProps, Theme} from "@mui/material";
import { useNavigate } from "react-router-dom";
import RecommendedPosts from "../recommededPosts/recommended";

const FooterStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor: "white",

      };

    case "light": {
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor: "#272727",
      };
    }
  }
};
const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1117));
  const dispatch: any = useDispatch();
  const { recently } = useSelector((state: any) => state);
  const nagivate: any = useNavigate();
	const RegisterInfo = localStorage.getItem("RegisterInfo");

  
 
  return (
    <Box >
      {!isMatch ? (
        <StyledFooter>
          <Grid container>
            <StyledGridLeft item xs={4}>
              <Box component={"img"} src={Logo} />
              <StyledGridLeftText>
                <Box>
                  All the day's headlines and highlights from MAGZ , direct to
                  you every morning, there are all new that you need in day.
                  <br />
                  explores the connection between contemporary visual culture
                  and social issues
                </Box>

                <StyledFooterButton onClick={()=>nagivate("/login")}>Sign up for MAGZ</StyledFooterButton>
              </StyledGridLeftText>
            </StyledGridLeft>
            <LastPosts />
<RecommendedPosts/>
            
          </Grid>

          <StyledLine />
          <StyledFooterBottom>
            © 2022 - MAGZ. All Rights Reserved.
          </StyledFooterBottom>
        </StyledFooter>
      ) : (
        <StyledFooterMedia>
          <StyledGridLeft item xs={4}>
            <img src={Logo} />
            <StyledGridLeftTextMedia>
              All the day's headlines and highlights from MAGZ , direct to you
              every morning, there are all new that you need in day.
              <br />
              explores the connection between contemporary visual culture and
              social issues
            </StyledGridLeftTextMedia>
              <StyledFooterButton>Sign up for MAGZ</StyledFooterButton>
          </StyledGridLeft>
        
          <StyledLineMedai />
          <StyledFooterBottom>
            © 2022 - MAGZ. All Rights Reserved.
          </StyledFooterBottom>
        </StyledFooterMedia>
      )}{" "}
    </Box>
  );
};
export default Footer;
