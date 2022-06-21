import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import Person from "../../assets/person.png";
import {
  StyledGridRight,
  StyledGridRightTitle,
  StyledGridRightLine,
  BoxStyleTwo,
  BoxStyle,
} from "../../styled/PopularPost";
import { PopularPostsInterFace } from "../../types/popularPosts";
const OtherPosts:React.FC<PopularPostsInterFace> = (props) => {
  return (
    <StyledGridRight>
     
      <StyledGridRightTitle>
        <Box
          component="img"
          src={props.img}
          sx={{ height: "50px", width: "80px" }}
        />
        <BoxStyleTwo >
          <Box>{props.data}</Box>
          <BoxStyle>{props.date}</BoxStyle>
        </BoxStyleTwo>
      </StyledGridRightTitle>{" "}
    </StyledGridRight>
  );
};
export default OtherPosts;