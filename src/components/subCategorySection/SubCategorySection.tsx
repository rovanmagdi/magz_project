import React, { useEffect } from "react";
import CategoryRectCard from "../categoryRectCard/CategoryRectCard";
import CategorySquareCard from "../categorySquareCard/CategorySquareCard";
import PostCard from "../postCard/PostCard";
import { useSelector } from "react-redux";
import Post from "../../types/post";
import SmallPostCard from "../smallPostCard/SmallPostCard";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CategoryLabelBox } from "../../styled/styledBox";
import { HorizontalLineBox } from "../../styled/styledBox";

export default function SubCategorySection() {

  const {catergory} = useSelector((state: any) =>
  state
);

useEffect(() => {
 console.log(catergory)
  
},[])
  return (
    <>
    {catergory.map((categoryEle:any)=>
    {
      return(
        <Box position={"relative"} mb={2} mt={7}>
        <CategoryLabelBox sx={{ backgroundColor: "#272727" }} >
          {categoryEle.subCategory}
        </CategoryLabelBox>
        <HorizontalLineBox
          sx={{ backgroundColor: "#272727" }}
        ></HorizontalLineBox>
      </Box>
      )
    })}
    
    </>
  );
}
