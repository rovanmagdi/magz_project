import React from "react";
import CategoryRectCard from "../categoryRectCard/CategoryRectCard";
import CategorySquareCard from "../categorySquareCard/CategorySquareCard";
import PostCard from "../postCard/PostCard";
import { useSelector } from "react-redux";
import Post from "../../types/post";
import SmallPostCard from "../smallPostCard/SmallPostCard";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function CategoryAllSection() {
  const posts = useSelector((state: any) =>
    state.posts ? state.posts[0].posts : state.posts
  );
  console.log(posts);

  // posts.map((post: any) => {
  //   return <div>hhh</div>;
  // })
  return (
    <>
      {/* <CategoryRectCard {...post } key={post.id} /> */}
      {/* <CategorySquareCard {...post}/> */}

      {/* <Box position={"relative"} >
    <CategoryLabelBox sx={{backgroundColor:"#128CCB"}} >All</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#128CCB"}}></HorizontalLineBox>
    </Box> */}
      {posts ? (
            <>
            <Grid  container spacing={0} columns={12}  ml={3} gap={1.5} sx={{height:'400px'}}>
              <Grid  item  xs={5}>
              <CategorySquareCard {...posts[0] }  width={'100%'}  />
              </Grid>
              <Grid  item sx={{}} xs={6} container  height={'100%'} gap={1}>
                 <CategoryRectCard {...posts[1] }  width={'100%'} />
                 <CategoryRectCard {...posts[2] }  width={'100%'} />
          
                 {/* <Box sx={{backgroundColor:'red'}} width={'100%'}>dddddddd</Box>
                 <Box sx={{backgroundColor:'red'}} width={'100%'}>ddddeeeeeeeeeeedddd</Box> */}
          
              </Grid>
            </Grid>
          
            </>
      ) : (
        <CircularProgress />
      )}
    </>
  );

  
}
