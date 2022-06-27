import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RecentlyPosts } from "../../redux/actions/recentlyAction";
import { ViewPosts } from "../../redux/actions/viewAction";
import {
  StyledGridRightTitle,
  StyledGridRightLine,
  StyledGridRight,
  BoxStyleTwo,
  BoxStyle,
} from "../../styled/recommendedPosts";
import OtherPosts from "../otherPost/otherPosts";
import OtherPostsDark from "../otherPost/otherPostsDark";
import PostDate from "../postDate/PostDate";
import {useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/material";

import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useContext } from "react";


import { SxProps, Theme} from "@mui/material";

const TypoStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "white",

      };

    case "light": {
      return {
        ...defaultStyles,
        color: "black",
      };
    }
  }
};

const RecommendedPosts = () => {

  const theme = useTheme();
  const MobileView = useMediaQuery(theme.breakpoints.down("lg"));

  const dispatch: any = useDispatch();
  const { recently } = useSelector((state: any) => state);
  const { views } = useSelector((state: any) => state);
  useEffect(() => {
    dispatch(RecentlyPosts());
    dispatch(ViewPosts());

  }, []);
  useEffect(() => {
    // console.log(views);
  }, [views]);
  const nagivate: any = useNavigate();
  const handleGoDetails = (id: any) => {
    nagivate(`/details/${id}`);

  }
  return (
    <Box sx={{position:"sticky",top:"10px", fontFamily:"Oswald", fontSize:".9em", fontWeight:"600"}} component={"section"} >
      <StyledGridRightTitle
        sx={TypoStyles(theme)}
      >
       POPULAR POSTS
        <StyledGridRightLine />
      </StyledGridRightTitle>
      {views?.map((i: any) => {
        return (
          <StyledGridRight    onClick={()=>handleGoDetails(i._id)}>

            <StyledGridRightTitle>
              <Box
                component="img"
                src={i.image}
                sx={{ height: "70px", width: "90px" }}
              />
              <BoxStyleTwo     sx={TypoStyles(theme)}>
                <Box>{i.title}</Box>
                <BoxStyle> <PostDate date={i.updatedAt} /></BoxStyle>
              </BoxStyleTwo>
            </StyledGridRightTitle>{" "}
          </StyledGridRight>
    
        );
      })}
    </Box>
  );
};
export default RecommendedPosts;
