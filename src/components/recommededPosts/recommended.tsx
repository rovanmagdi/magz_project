import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecentlyPosts } from "../../redux/actions/recentlyAction";
import {
  StyledGridRightTitle,
  StyledGridRightLine,
} from "../../styled/PopularPost";
import OtherPosts from "../otherPost/otherPosts";
import PostDate from "../postDate/PostDate";

import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useContext } from "react";


import { SxProps, Theme} from "@mui/material";
import { theme } from "../../theme/palette";
import { getRecommendedPosts } from "../../redux/actions/recommendedAction";

const Styles = (theme: Theme): SxProps<Theme> => {
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
        color: "white",
      };
    }
  }
};
const RecommendedPosts = () => {
  const dispatch: any = useDispatch();

  const { recommded } = useSelector((state: any) => state);
  useEffect(() => {
    // dispatch(RecentlyPosts());
    dispatch(getRecommendedPosts())
    // console.log(recently);
  }, []);
  return (
    <Box >
      <StyledGridRightTitle
        sx={{
          fontFamily: "Oswald",
          fontWeight: "bold",
          fontSize: "14px",
          textTransform: "uppercase", 
        }}
      >
        latest posts
        <StyledGridRightLine />
      </StyledGridRightTitle>
      {recently.map((i: any) => {
        return (
          <OtherPosts
            key={i._id}
            title="Recently Posts"
            data={i.title}
            date={<PostDate date={i.updatedAt} />}
            img={i.image}
            _id={i._id}
          />
        );
      })}
    </Box>
  );
};
export default RecommendedPosts;
