import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import PostDate from "../../components/postDate/PostDate";
import { StyledImageComment } from "../../styled/Comments";
import { StyledLine } from "../../styled/Footer";

const CommentDetails = (props: any) => {
  console.log(props.comment);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(props.comment.timestamp);
  const postDate = `${
    month[date.getMonth()]
  }   ${date.getDate()} , ${date.getFullYear()}`;

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ margin: "15px 0px 0px 15px" }}>
        <Box
          component="img"
          src={props.comment.user?.image}
          height="50px"
          width="50px"
          sx={{ borderRadius: "50%" }}
        />
        <Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              {props.comment.user?.firstName} {props.comment.user?.lastName}
            </Typography>
            <Box sx={{ fontSize: "12px", color: "#ABABAB" }}> {postDate}</Box>
          </Stack>
          <Box>{props.comment.commentText}</Box>
        </Box>
      </Stack>
      <StyledLine sx={{ width: "600px" ,backgroundColor:"#CACACA",marginLeft:"20px"}} />
    </>
  );
};

export default CommentDetails;
