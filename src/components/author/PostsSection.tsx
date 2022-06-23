
import { useDispatch, useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Lifestyle from '../home/Lifestyle';
import { Grid } from "@mui/material";
import { CircularProgress } from '@mui/material';
import { StyledAuthorPostCard } from "../../styled/styledCard";
import AuthorPost from "./Post";
import { useEffect } from "react";
import { getAuthorInfo } from "../../redux/actions/authorAction";

const PostsSection = () => {
  const { author } = useSelector((state: any) => state);
  // console.log(posts)
  const dispatch: any = useDispatch();

 
  useEffect(() => {
    // dispatch(getAuthorInfo("62b350b25dc7b38dcce966c8"))
    console.log(author.posts);

  }, [author])

  return (
    <>
      < Box component={"section"} marginTop={8}>

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
            })) : (<CircularProgress />)

          }

        </Grid>

      </Box>
    </>
  );
};

export default PostsSection;