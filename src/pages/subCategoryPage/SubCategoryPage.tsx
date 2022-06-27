import React, { useEffect } from "react";
import SubcategoryPagination from "../../components/subcategoryPagination/SubcategoryPagination";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { getSubcategoryPosts } from "../../redux/actions/subcategoryPostsAction";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TodaySection from "../../components/home/TodaySection";
import RecommendedPosts from "../../components/recommendPosts/RecommendedPosts";
import PostCard from "../../components/postCard/PostCard";
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { SubCategoryLatestPost } from "../../styled/styledTypography";

export default function SubCategoryPage() {
  // const { subcategoryPosts } = useSelector((state: any) => state);
  const { page } = useParams();
  const { Subpage } = useParams();
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getSubcategoryPosts(Subpage));
    console.log(subcategoryPosts);
  }, []);

  const { subcategoryPosts } = useSelector((state: any) => state);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          color: "lightGray",
          fontSize: "12px",
          margin: "0px 0px 20px 20px",
        }}
      >
        Home <ArrowForwardIosIcon sx={{ fontSize: "12px", margin: "3px" }} />
        {page}
        <ArrowForwardIosIcon sx={{ fontSize: "12px", margin: "3px" }} />
        {Subpage}
      </Stack>
      <Grid container xs={12} spacing={1.5} justifyContent={"center"}>
        <Grid item md={8} sm={11} xs={11}>
          {subcategoryPosts ? (
            <PostCard
              {...subcategoryPosts[0]}
              key={subcategoryPosts[0]?.id}
              width={"100%"}
            />
          ) : (
            <CircularProgress />
          )}
        </Grid>

        <Grid
          item
          md={3.5}
          sm={0}
          sx={{ display: { md: "block", sm: "none", xs: "none" } }}
        >
          <RecommendedPosts />
        </Grid>
        <SubCategoryLatestPost>the latest</SubCategoryLatestPost>
      </Grid>
      <Divider />
      <SubcategoryPagination />
    </>
  );
}
