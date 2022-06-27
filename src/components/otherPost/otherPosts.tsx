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
import { useNavigate } from "react-router-dom";
const OtherPosts: React.FC<PopularPostsInterFace> = (props) => {
  const nagivate: any = useNavigate();
  
  const handleGoDetails = (id: any) => {
    nagivate(`/details/${id}`);

  }
  return (
    <StyledGridRight>

      <StyledGridRightTitle onClick={() => handleGoDetails(props._id)}>
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