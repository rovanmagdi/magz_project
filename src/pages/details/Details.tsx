import { Box, Stack, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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

import Comment from "./Comment";
import AuthorDetails from "./AuthorDetails";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PostDate from "../../components/postDate/PostDate";
import { AuthorTypography } from "../../styled/AuthorTypography";
import RecommendedPosts from "../../components/recommendPosts/RecommendedPosts";
import { useDispatch } from "react-redux";

const Details = () => {
  const { id }: any = useParams();
  const [stateDetails, setStateDetails] = useState({
    _id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    subCategory: "",
    likes: [],
    auther: {
      _id: "",
      firstName: "",
      lastName: "",
      image: "",
    },
    regien: "",
    status: "",
    views: "",
    comments: [],
    updatedAt: "",
    brief: "",
  });
const dispatch:any =useDispatch();
  useEffect(() => {
    axios.get(`http://localhost:4000/posts/get_one/${id}`).then((response) => {
      setStateDetails(response.data);
      // console.log(response.data);
    });
    axios
      .patch(`http://localhost:4000/posts/add_view/${id}`)
      .then((response) => { });
    // console.log(stateDetails?.comments);
   
  }, []);

  return (
    <Stack direction="row">
      

        <StyledTodayCard elevation={0} >
          <Box
            sx={{
              display: "flex",
              alignItems: "space-between",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <StyledTitle>{stateDetails.title}</StyledTitle>
            <TodayLabelBox2>{stateDetails.category}</TodayLabelBox2>
          </Box>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ borderRadius: "8px", backgroundSize: "contain" }}
              height="380"
              image={stateDetails.image}
              alt="green iguana"
            />
            <OverlayDetailsBox></OverlayDetailsBox>
          </CardActionArea>
          <Box
            sx={{
              color: "text.secondary",
              marginTop: "15px",
              marginLeft: "20px",
              marginBottom: "0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "space-around",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box component="img" src={icon} />
                <Box sx={{ marginLeft: "10px", fontSize: "13px" }}>
                  Steve Kerr slams lack of gun control as ‘pathetic’ after Texas
                  school massacre
                </Box>
              </Box>

              <Box sx={{ color: "text.secondary", fontSize: "13px" }}>
                {<PostDate date={stateDetails.updatedAt} />}
              </Box>
            </Box>
          </Box>
          <StyledLine sx={{ margin: "10px" }} />

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
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

              <AuthorTypography>
                {stateDetails.auther.firstName} {stateDetails.auther.lastName}
              </AuthorTypography>
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
                <Typography component="span">
                  {" "}
                  {stateDetails?.comments?.length}
                </Typography>
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
                <Typography component="span">
                  {stateDetails?.likes?.length}
                </Typography>
              </Box>
            </Box>
          </CardActions>
          <StyledLine sx={{ margin: "10px" }} />
          <Stack sx={{ fontSize: "15px", margin: "20px" }}>
            {stateDetails.description}
          </Stack>
          <Comment />
          <AuthorDetails
            brief={stateDetails.brief}
            name={
              <AuthorTypography>
                {stateDetails.auther.firstName} {stateDetails.auther.lastName}
              </AuthorTypography>
            }
            image={stateDetails.image}
          />
          {/*  */}
        </StyledTodayCard>
     
      <Box sx={{color:"red"}}>
        <RecommendedPosts/>
      </Box>
    </Stack>
  );
};
export default Details;
