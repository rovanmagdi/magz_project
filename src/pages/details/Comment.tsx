import React, { useCallback, useState } from "react";
import {
  CategoryLabelBox,
  HorizontalLineBox,
  StyledTitle,
  TodayLabelBox,
  TodayLabelBox2,
} from "../../styled/styledBox";
import {
  Box,
  InputAdornment,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { StyledButton } from "../../styled/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { PersonIconNav, StyledRightOneConatiner } from "../../styled/Navbar";

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

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${userInfo.token}`,
        },
      };

      const body = { ...comment, postId: postId.id };

      const { data } = await axios.post(
        "http://localhost:4000/comment",
        body,
        config
      );

      setComment({ commentText: "" });
    },
    [comment]
  );

  const RegisterInfo = localStorage.getItem("RegisterInfo");
  const userInfoObj = JSON.parse(`${localStorage.getItem("RegisterInfo")}`);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {
          RegisterInfo ? (
            <>
              {userInfoObj.image !== "" ? (
                <Box
                  component="img"
                  height="40px"
                  width="40px"
                  sx={{ borderRadius: "50%" }}
                  src={userInfoObj.image}
                />
              ) : (<StyledRightOneConatiner>
                <PersonIconNav />
              </StyledRightOneConatiner>)}
              <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: "70ch", marginTop: "20px" }}
                placeholder="Write a Comment..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ cursor: "pointer", color: "#4D7E96" }}>
                      <SendIcon onClick={handleSubmit} />
                    </InputAdornment>
                  ),
                }}
                name="comment"
                value={comment.commentText}
                onChange={handleChange}
              />
            </>
          ) : (<Box></Box>)
        }


      </Box>
    </>
  );
}
