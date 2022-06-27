import { Box, Stack, TextareaAutosize, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
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
import unlike from "../../assets/like.png";
import like from "../../assets/like2.png";

import Pusher from "pusher-js";

import Comment from "./Comment";
import AuthorDetails from "./AuthorDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PostDate from "../../components/postDate/PostDate";
import { AuthorTypography } from "../../styled/AuthorTypography";
import RecommendedPosts from "../../components/recommendPosts/RecommendedPosts";
import { useDispatch } from "react-redux";
import { getAuthorInfo } from "../../redux/actions/authorAction";
import { StyledGridRightLine } from "../../styled/recommendedPosts";
import CommentList from "./CommentList";

const Details = () => {
  const userData: any = localStorage.getItem("RegisterInfo");
  const userId = userData && JSON.parse(userData)._id;

  const { id }: any = useParams();
  const [stateDetails, setStateDetails] = useState({
    _id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    subCategory: "",
    likes: [{ user: "", _id: "" }],
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
    autherId: "",
  });

  const [commentsNummber, setCommentsNummber] = useState<any>(0);
  const [likesNumber, setLikesNumber] = useState<any>(0);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const [stateAuthor, setStateAuthor] = useState();
  const dispatch: any = useDispatch();
  const nagivate: any = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/posts/get_one/${id}`).then((response) => {
      setStateDetails(response.data);
      handleLikesNumber(response.data.likes.length);
      setStateAuthor(response.data.auther?._id);
      handleCommentsNummber(response.data.comments.length);
    });
    axios
      .patch(`http://localhost:4000/posts/add_view/${id}`)
      .then((response) => {});
  }, [id]);
  const handleAuthor = (id: any) => {
    dispatch(getAuthorInfo(stateAuthor));
    nagivate(`/auther/${id}`);
  };

  const handleCommentsNummber = (number: any) => {
    setCommentsNummber(number);
  };

  const postId = useParams();
  const handleLike = useCallback(
    async (event: React.SyntheticEvent<EventTarget>) => {
      const userInfo: any = JSON.parse(
        `${localStorage.getItem("RegisterInfo")}`
      );

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${userInfo.token}`,
        },
      };

      const body = { postId: postId.id };

      const { data } = await axios.post(
        "http://localhost:4000/like",
        body,
        config
      );

      if (data) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    },
    [postId.id]
  );

  const [pusher, setPusher] = useState<any>(
    () =>
      new Pusher("7d5a00f0cb139e7cc884", {
        cluster: "eu",
      })
  );
  const [channel, setChannel] = useState<any>(() => pusher.subscribe("magz"));

  useEffect(() => {
    channel.bind("new-like", (data: any) => {
      if (data._id == postId.id) {
        handleLikesNumber(data.likes.length);
      }
    });
  }, [channel, postId.id]);

  useEffect(() => {
    for (var i = 0; i < stateDetails.likes.length; i++) {
      if (stateDetails.likes[i].user === userId) {
        // console.log("here");
        setUserLiked(true);
      }
    }
  }, [stateDetails.likes, userId]);

  const handleLikesNumber = (number: any) => {
    setLikesNumber(number);
  };

  const RegisterInfo = localStorage.getItem("RegisterInfo");
  const handleGoLogin = () => {
    nagivate("/Login");
  };
  return (
    <Stack direction="row">
      <StyledTodayCard elevation={0}>
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
            image={stateDetails?.image}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => handleAuthor(stateDetails.auther._id)}
          >
            <Box
              component="img"
              height="30px"
              width="30px"
              borderRadius="50%"
              marginLeft={2}
              marginRight={2}
              src={stateDetails?.auther?.image}
              alt="green iguana"
            />

            <AuthorTypography
              onClick={() => handleAuthor(stateDetails?.auther?._id)}
            >
              {stateDetails?.auther?.firstName} {stateDetails?.auther?.lastName}
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
                {/* {stateDetails?.comments?.length} */}
                {commentsNummber}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {RegisterInfo ? (
                <>
                  <Box
                    component="img"
                    src={userLiked ? like : unlike}
                    sx={{
                      height: "15px",
                      width: "15px",
                      margin: "8px",
                      cursor: "pointer",
                    }}
                    onClick={handleLike}
                  />
                  <Typography component="span">
                    {/* {stateDetails?.likes?.length} */}
                    {likesNumber}
                  </Typography>
                </>
              ) : (
                <Box
                  onClick={handleGoLogin}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={userLiked ? like : unlike}
                    sx={{
                      height: "15px",
                      width: "15px",
                      margin: "8px",
                      cursor: "pointer",
                    }}
                    onClick={handleLike}
                  />
                  <Typography component="span">
                    {/* {stateDetails?.likes?.length} */}
                    {likesNumber}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </CardActions>
        <StyledLine sx={{ margin: "10px" }} />
        <Stack sx={{ fontSize: "15px", margin: "20px" }}>
          {stateDetails?.description.split(".").map((item) => {
            return (
              <>
                <Box sx={{ lineHeight: "1.9" }}>{`${item}.`}</Box>
              </>
            );
          })}
        </Stack>
        <Box position={"relative"} sx={{ margin: "20px" }}>
          <CategoryLabelBox sx={{ backgroundColor: "#4D7E96" }}>
            Comments
          </CategoryLabelBox>
          <HorizontalLineBox
            sx={{ backgroundColor: "#4D7E96", width: "550px" }}
          ></HorizontalLineBox>
        </Box>
        <CommentList id={id} handleCommentsNummber={handleCommentsNummber} />

        <Comment />
        <Box position={"relative"} sx={{ margin: "20px" }}>
          <CategoryLabelBox sx={{ backgroundColor: "#4D7E96" }}>
            Author
          </CategoryLabelBox>
          <HorizontalLineBox
            sx={{ backgroundColor: "#4D7E96", width: "550px" }}
          ></HorizontalLineBox>
        </Box>
        <Box
          sx={{
            // border: "1px solid #B1B1B1",
            marginTop: "20px",
            height: "250px",
            display: "flex",
            justifyItems: "flex-end",
          }}
        >
          <Box
            sx={{
              height: "200px",
              width: "500px",
              backgroundColor: "#FFFFFF",
              boxShadow: "-1px -1px 13px 0px rgba(196,191,191,0.75);",
              margin: "auto",
              marginBottom: "0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <StyledGridRightLine
                sx={{
                  alignSelf: "flex-end",
                  width: "500px",
                  height: "6px",
                  margin: "auto",
                  position: "absolute",
                  bottom: "0",

                  backgroundColor: "#4D7E96",
                }}
              />
              <CategoryLabelBox
                sx={{
                  backgroundColor: "#4D7E96",
                  position: "absolute",
                  bottom: "0",
                  zIndex: "15",
                  width: "130px",
                  left: "40%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleAuthor(stateDetails.auther._id)}
              >
                Articles for Author
              </CategoryLabelBox>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={stateDetails?.auther?.image}
                  sx={{
                    borderRadius: "50%",
                    height: "70px",
                    width: "70px",
                    margin: "20px",
                  }}
                />
                <Box sx={{ margin: "20px" }}>
                  <Box component="p" sx={{ fontWeight: "bold" }}>
                    <AuthorTypography>
                      {stateDetails.auther?.firstName}{" "}
                      {stateDetails.auther?.lastName}
                    </AuthorTypography>
                  </Box>
                  <Box component="span" sx={{ fontSize: "13px" }}>
                    {stateDetails.brief}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledTodayCard>

      <Box sx={{ color: "red" }}>
        <RecommendedPosts />
      </Box>
    </Stack>
  );
};
export default Details;
