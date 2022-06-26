import React from "react";
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
  const {posts} = useSelector((state: any) =>
    state 
  );
 

  const subCategoryName = "football";

  return (
    <>
    <Box mb={5}>
      <Box position={"relative"} mb={2} mt={7}>
        <CategoryLabelBox sx={{ backgroundColor: "#272727" }} >
          {subCategoryName}
        </CategoryLabelBox>
        <HorizontalLineBox
          sx={{ backgroundColor: "#272727" }}
        ></HorizontalLineBox>
      </Box>
      {posts ? (
        <>
          <Grid
            container
            spacing={1.5}
            columns={12}
            
            // ml={3}
            // gap={1}
            // sx={{ minHeight: "300px" }}
            
          >
            <Grid item container xs={12} spacing={1.5} justifyContent={'center'}>
              <Grid item md={7} sm={5.5} xs={11}>
                <PostCard {...posts[0]} width={"100%"} key={posts[0].id}/>
              </Grid>
              <Grid item md={4.5}  sm={5.5} xs={11}>
                <PostCard {...posts[0]} width={"100%"}  key={posts[0].id}/>
              </Grid>
            </Grid>
            <Grid item xs={12} container gap={1} justifyContent={'center'} >
                {posts.map((post:any)=>{
                    return(<>
                    <Grid item md={2.8} sm={5.5} xs={11} >
                    <SmallPostCard {...post} key={post.id} width={"100%"} />
                    </Grid>
                    
                    </>)
                })}
            </Grid>
          </Grid>
        </>
      ) : (
        <CircularProgress />
      )}
      </Box>
    </>
  );
}
