import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  StyledTitle,
  TodayLabelBox,
  TodayLabelBox2,
} from "../../styled/styledBox";
import { StyledTodayCard } from "../../styled/styledCard";
import { OverlayTodayBox } from "../../styled/styledBox";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import image from "../../assets/background.png";
import LastPosts from "../../components/lastPosts/LastPosts";
import icon from "../../assets/icons.png";
import { StyledLine } from "../../styled/Footer";
export default function Details() {
  return (
    <Stack >
      <StyledTodayCard elevation={0}>
        <Box
          sx={{
            display: "flex",
            alignItems: "space-between",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <StyledTitle>
            Liverpool chase defining high in blue-chip final against Real Madrid
          </StyledTitle>
          <TodayLabelBox2>Today</TodayLabelBox2>
        </Box>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ borderRadius: "8px", backgroundSize: "contain" }}
            height="380"
            image={image}
            alt="green iguana"
          />
          <OverlayTodayBox></OverlayTodayBox>
        </CardActionArea>
        <Box
         
          color="text.secondary"
          sx={{
            marginTop: "15px",
            marginLeft: "20px",
            display: "flex",
            alignItems: "center",
            marginBottom: "0px",
            
          }}
        >
          <Box component="img" src={icon}></Box>
          <Box sx={{ marginLeft: "10px" ,fontSize:"13px"}}>
            Steve Kerr slams lack of gun control as ‘pathetic’ after Texas
            school massacre
          </Box>
        </Box>
        <StyledLine sx={{ marginTop: "10px" }} />

        <CardActions>
        <Box sx={{display: "flex" }}>  
          <Box
            component="img"
            height="30px"
            width="30px"
            borderRadius="50%"
            marginLeft={2}
            marginRight={2}
            src={image}
            alt="green iguana"
          />
          
          <Typography>Name </Typography>
          </Box>
          <Box>
            
          </Box>
          <Box>12</Box>
        </CardActions>
      </StyledTodayCard>
    </Stack>
  );
}
