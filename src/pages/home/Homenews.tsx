import React, { useEffect } from "react";
import Today from "../../components/home/Today";
import Opinion from "../../components/home/Opinion";
import Sport from "../../components/home/SportLaptopView";
import Lifestyle from "../../components/home/Lifestyle";
import Culture from "../../components/home/Culture";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postsAction";
import CultureSection from "../../components/home/CultureSection";
import TodaySection from "../../components/home/TodaySection";
import OpinionSection from "../../components/home/OpinionSection";
import SportSection from "../../components/home/SportSection";
import LifestyleSection from "../../components/home/LifestyleSection";
import Weather from "../../components/home/Weather";

import { QuotePaper } from "../../styled/styledPaper";
import SearchCategory from "../../components/navbar/SearchCategory";
import AuthorPage from "../author/AuthorPage";
import RecommendedPosts from "../../components/recommendPosts/RecommendedPosts";
import { Box, Stack } from "@mui/material";
const Homenews = () => {
  // const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);

  const dispatch: any = useDispatch();
  console.log("here news home");

  useEffect(() => {
    dispatch(getAllPosts());
    // console.log(posts._id)
  }, [dispatch]);

  return (
    <>
      {/* <AuthorPage></AuthorPage> */}
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ width: "65%", }}>
          <TodaySection></TodaySection>
          <OpinionSection></OpinionSection>
          <SportSection></SportSection>
          <LifestyleSection></LifestyleSection>
          <CultureSection></CultureSection>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Weather />


          <RecommendedPosts />

        </Box>
      </Box>

      {/* <SearchCategory></SearchCategory>   */}

      {/* <QuotePaper>dfghjhgf</QuotePaper> */}
    </>
  );
};

export default Homenews;
