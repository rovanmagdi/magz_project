import React from "react";
import Author from "../../types/author";
import Quote from "./Quote";
import Post from "./Post";
import { Box } from "@mui/material";
const AuthorInfo: React.FC<Author> = (props: any) => {
  const { fullName, image, posts, brief } = props;
  // console.log(fullName, image, posts, brief);

  return (
    <>
      <Box
        component="img"
        height="50px"
        width="50px"
        borderRadius="50%"
        src={image}
        alt="author image"
      />
      
    </>
  );
};

export default AuthorInfo;
