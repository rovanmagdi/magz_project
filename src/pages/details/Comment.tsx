import React, { useCallback, useState } from "react";
import {
  CategoryLabelBox,
  HorizontalLineBox,
  StyledTitle,
  TodayLabelBox,
  TodayLabelBox2,
} from "../../styled/styledBox";
import { Box, Stack, TextareaAutosize, Typography } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Comment() {
  const [comment, setComment] = useState({
    commentText: "",
  });

  const postId = useParams();
  

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement> | any) => {
      setComment((oldComment) => ({
        ...oldComment,
        commentText: event.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.SyntheticEvent<EventTarget>) => {
      event.preventDefault();

      const userInfo: any = JSON.parse(
        `${localStorage.getItem("RegisterInfo")}`
      );

      const config={
        headers:{
         'Content-Type':'application/json',
         Authorization:` Bearer ${userInfo.token}`
        }
      }

      const body = { ...comment,postId:postId.id };



      const { data } = await axios.post("http://localhost:4000/comment",body,config);

      console.log(data);
      

      
      setComment({ commentText: "" });
    },
    [comment]
  );

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
            name="comment"
            value={comment.commentText}
            onChange={handleChange}
          />
        </Box>
        <StyledButton
          sx={{ color: "white", margin: "21px" }}
          onClick={handleSubmit}
        >
          POST COMMENT
        </StyledButton>
      </Box>
    </>
  );
}
