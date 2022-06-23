import React, { useEffect } from "react";
import CategoryRectCard from "../categoryRectCard/CategoryRectCard";
import CategorySquareCard from "../categorySquareCard/CategorySquareCard";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CategoryLabelBox } from "../../styled/styledBox";
import { HorizontalLineBox } from "../../styled/styledBox";
import Stack from "@mui/material/Stack";
import { Catergory } from "../../redux/actions/catergotyAction";
import { useParams } from "react-router-dom";

export default function CategoryAllSection() {
  const posts = useSelector((state: any) =>
    state.posts ? state.posts[0].posts : state.posts
  );
  console.log(posts);

  const dispatch:any=useDispatch();
  const {page}=useParams();
  
  useEffect(() => {

    dispatch(Catergory(page))
  },[page])
 
  return (
    <>
      {/* <CategoryRectCard {...post } key={post.id} /> */}
      {/* <CategorySquareCard {...post}/> */}

      <Box position={"relative"} mb={2}>
        <CategoryLabelBox sx={{ backgroundColor: "#272727" }}>
          All
        </CategoryLabelBox>
        <HorizontalLineBox
          sx={{ backgroundColor: "#272727" }}
        ></HorizontalLineBox>
      </Box>
      {posts ? (
        <>
          <Grid
            container
            columns={12}
           sx={{height: {md:"400px",sm:'auto'} }}
           gap={2}
          >
            <Grid item md={5} xs={12} height={{md:"100%",xs:'250px'}}>
              <CategorySquareCard {...posts[0]} />
            </Grid>
            <Grid item md={6.8} xs={12} height={{md:"100%",xs:'500px'}}>
              <Stack  spacing={2} height={"100%"}>
                <CategoryRectCard {...posts[1]} />
                <CategoryRectCard {...posts[2]} />
              </Stack>
            </Grid>
          </Grid>
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
