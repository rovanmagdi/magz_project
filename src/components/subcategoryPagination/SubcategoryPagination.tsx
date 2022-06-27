import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import PostCard from "../postCard/PostCard";
import SmallPostCard from "../smallPostCard/SmallPostCard";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CategoryLabelBox } from "../../styled/styledBox";
import { HorizontalLineBox } from "../../styled/styledBox";
import { useNavigate, useParams } from "react-router-dom";

export default function SubcategoryPagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { subcategoryPosts } = useSelector((state: any) => state);

  const postsPerPage = 6;
  const numberOfPages = Math.ceil(subcategoryPosts.length / postsPerPage);
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = subcategoryPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  console.log(currentPosts);

  return (
    <>
    <Stack spacing={2} justifyContent="center"
  alignItems="center">
    
      {currentPosts ? (
        <>
          <Grid item xs={12} container gap={1} justifyContent={"center"} sx={{mt:4}}>
          {currentPosts.map((post:any)=>{
             return (
                <>
                  <Grid item md={3.9} sm={5.5} xs={11}>
                    <SmallPostCard
                      {...post}
                      key={post.id}
                      width={"100%"}
                    />
                  </Grid>
                </>
              );
          })}
          </Grid>
        </>
      ) : (
        <CircularProgress />
      )}
      <Pagination count={numberOfPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}


  