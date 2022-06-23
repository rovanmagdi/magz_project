import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { CategoryLabelBox, HorizontalLineBox } from "../../styled/styledBox";
import { Box } from "@mui/material";
import Lifestyle from "./Lifestyle";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const LifestyleSection = () => {

  const filteredCategories:any=[];

  const {posts}=useSelector((state:any) =>state);

  console.log(posts);
  
  if(posts)
  {
     posts.forEach((category:any)=>{
         filteredCategories[category._id]=category.posts
     })
     console.log(filteredCategories["lifestyle"])
 }
  return (
    <>
      <Box component={"section"} marginTop={8}>
        <Box position={"relative"}>
          <CategoryLabelBox sx={{ backgroundColor: "#22B8B3" }}>
            Lifestyle
          </CategoryLabelBox>
          <HorizontalLineBox
            sx={{ backgroundColor: "#22B8B3" }}
          ></HorizontalLineBox>
        </Box>

        <Grid container columns={12} columnGap={17}>
          {filteredCategories["lifestyle"] ? (
          filteredCategories["lifestyle"].map((post: any) => {
              return (
                <Grid item md={4} sm={12} key={post._id}>
                  <Lifestyle {...post} />
                </Grid>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </Grid>

      </Box>
    </>
  );
};

export default LifestyleSection;
