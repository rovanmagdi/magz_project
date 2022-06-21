import { Box, Stack, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import {
  CategoryLabelBox,
  HorizontalLineBox,
  StyledTitle,
  TodayLabelBox,
  TodayLabelBox2,
} from "../../styled/styledBox";
import { StyledTodayCard } from "../../styled/styledCard";
import { OverlayDetailsBox } from "../../styled/styledBox";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import image from "../../assets/background.png";
import icon from "../../assets/icons.png";
import { StyledLine } from "../../styled/Footer";
import comments from "../../assets/comment.png";
import like from "../../assets/like.png";
import { StyledButton } from "../../styled/Button";

export default function Details() {
  return (
    <Stack>
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
          <OverlayDetailsBox></OverlayDetailsBox>
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
          <Box sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Steve Kerr slams lack of gun control as ‘pathetic’ after Texas
            school massacre
          </Box>
        </Box>
        <StyledLine sx={{ marginTop: "10px" }} />

        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={comments}
                sx={{ height: "15px", width: "15px", margin: "8px" }}
              />
              <Typography component="span">2</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={like}
                sx={{ height: "15px", width: "15px", margin: "8px" }}
              />
              <Typography component="span">2</Typography>
            </Box>
          </Box>
        </CardActions>
        <StyledLine sx={{ marginTop: "10px", width: "800px" }} />
        <Stack sx={{ fontSize: "15px", margin: "20px" }}>
          Socrates was charged with denying the gods exist and inventing new
          ones, and of corrupting youth. Actually, Socrates was deeply religious
          and it was fighting dirty to accuse him of sacrilege. But powerful
          people had had enough of him. A scruffy 70-year-old man hanging out in
          public places surrounded by adoring pupils, teaching that a life
          unexamined is not worth living but we must learn we know nothing,
          corroded certainty. And certainty was what the city craved.e
          uncompromising voice of Socrates in a dangerous time resonates with
          our own “age of rage”. After Tom Littler, artistic director of the
          small but heavy-punching Jermyn Street theatre, proposed a Socrates
          play, I drafted a scene based on Plato’s dialogue E
        </Stack>
        </Comment>
        {/*  */}
      </StyledTodayCard>
    </Stack>
  );
}
