import React from 'react'
import {
    CategoryLabelBox,
    HorizontalLineBox,
    StyledTitle,
    TodayLabelBox,
    TodayLabelBox2,
  } from "../../styled/styledBox";
import { Box, Stack, TextareaAutosize, Typography } from "@mui/material";
import { StyledButton } from "../../styled/Button";

export default function Comment() {
  return (
    <>
    <Box sx={{ border: "1px solid #B1B1B1" }}>
          <Box>

          <Box position={"relative"} sx={{ margin: "20px" }}>
            <CategoryLabelBox sx={{ backgroundColor: "#4D7E96" }}>
              Leave Comment
            </CategoryLabelBox>
            <HorizontalLineBox
              sx={{ backgroundColor: "#4D7E96", width: "550px" }}
            ></HorizontalLineBox>
          </Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Your Comment"
            style={{ width: 500, margin: "20px", border: "1px solid #B1B1B1" }}
          />
          </Box>
          <StyledButton sx={{color:"white",margin: "20px"}}>POST COMMENT</StyledButton>
        </Box>
    </>
  )
}
