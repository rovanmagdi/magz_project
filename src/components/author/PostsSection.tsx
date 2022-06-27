
import { useDispatch, useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import Lifestyle from '../home/Lifestyle';
import { Grid } from "@mui/material";
import { StyledAuthorPostCard } from "../../styled/styledCard";
import AuthorPost from "./Post";
import { getAuthorInfo } from "../../redux/actions/authorAction";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PostCard from "../postCard/PostCard";
import SmallPostCard from "../smallPostCard/SmallPostCard";
import { CircularProgress, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";

const PostsSection = () => {
  const { author } = useSelector((state: any) => state);
  // console.log(posts)
  const dispatch: any = useDispatch();

 
  useEffect(() => {
    // dispatch(getAuthorInfo("62b350b25dc7b38dcce966c8"))
    // console.log(author.posts);

  }, [author])
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
   
    
  };

  const { subcategoryPosts } = useSelector((state: any) => state);

  const postsPerPage = 6;
  const numberOfPages = Math.ceil(subcategoryPosts.length / postsPerPage);
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = author.posts?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
     <Stack spacing={2} justifyContent="center"
  alignItems="center">
    
      {currentPosts ? (
        <>
          <Grid item xs={12} container gap={1} justifyContent={"space-around"} sx={{mt:4}}>
          {/* <Box position={"relative"}>
          <CategoryLabelBox sx={{ backgroundColor: "#4D7E96" }}>
            ARTICLES
          </CategoryLabelBox>
          <HorizontalLineBox
            sx={{ backgroundColor: "#4D7E96" }}
          ></HorizontalLineBox>
        </Box> */}
          {currentPosts.map((post:any)=>{
             return (
                <>
                  <Grid item md={3.7} sm={5.5} xs={11}>
                  <AuthorPost 
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
    
      {/* < Box component={"section"} marginTop={8}>

        <Box position={"relative"}>
          <CategoryLabelBox sx={{ backgroundColor: "#4D7E96" }}>
            ARTICLES
          </CategoryLabelBox>
          <HorizontalLineBox
            sx={{ backgroundColor: "#4D7E96" }}
          ></HorizontalLineBox>
        </Box>

        <Grid container columns={12}
          gap={10} >
          {
            author.posts ? (author.posts.map((post: any) => {
              return <Grid key={post._id} md={3} sm={12} ><AuthorPost {...post} />
              </Grid>
            })) : (<CircularProgress sx={{margin:"auto"}} />)

          }

        </Grid>

      </Box> */}
    </>
  );
};

export default PostsSection;