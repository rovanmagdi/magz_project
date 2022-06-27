import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import PostDate from "../../components/postDate/PostDate";
import { StyledImageComment } from "../../styled/Comments";

const CommentDetails = (props: any) => {
  console.log(props.comment);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date(props.comment.timestamp);
  const postDate = `${month[date.getMonth()]}   ${date.getDate()} , ${date.getFullYear()}`




  return (
    <Stack direction="row" spacing={2}>
      <Box component="img" src={props.comment.user.image} height="50px" width="50px" sx={{ borderRadius: "50%" }} />
      <Box >
        <Typography variant="h1" component="h5" sx={{ fontWeight: "800",textTransform:"capitalize" }}>{props.comment.user.firstName} {props.comment.user.lastName}</Typography>
        <Box >{props.comment.commentText}</Box>
        <Box sx={{fontSize:"12px",color:"#ABABAB"}}> {postDate}</Box>

      </Box>

    </Stack>
  );
};

export default CommentDetails;

