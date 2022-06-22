
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Lifestyle from '../home/Lifestyle';
import {Grid} from "@mui/material";
import {CircularProgress} from '@mui/material';
import { StyledAuthorPostCard } from "../../styled/styledCard";
import AuthorPost from "./Post";

const PostsSection = () => {
    const posts=useSelector((state:any) =>state.author?state.author.posts:state.author.posts);
    console.log(posts)

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
  
      <Grid container  columns={12}
         gap={10} >
              {
        posts? (posts.map((post:any)=>{
            return <Grid item md={3} sm={12} ><AuthorPost {...post}/>
            </Grid> 
        })):(<CircularProgress/>)
        
    }

</Grid>

</Box>
        </>
    );
};

export default PostsSection;