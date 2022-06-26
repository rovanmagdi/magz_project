import { Stack,Box, Typography } from "@mui/material";
import React from "react";
import { StyledImageComment } from "../../styled/Comments";

const CommentDetails = (props: any) => {
  console.log(props.comment);

  return (
    <Stack direction="row"  spacing={2}>
      
     <Box   component="img" src={props.comment.user.image} height="40px" width="40px" sx={{borderRadius:"50%"}}/> 
     <Typography>{props.comment.user.firstName} {props.comment.user.lastName}</Typography>
      <Box>{props.comment.commentText}</Box>
    </Stack>
  );
};

export default CommentDetails;
