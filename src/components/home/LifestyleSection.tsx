
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Lifestyle from './Lifestyle';
const LifestyleSection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    return (
        <>
< Box component={"section"} marginTop={10}>

<Box position={"relative"}>
        <CategoryLabelBox sx={{ backgroundColor: "#22B8B3" }}>
          Lifestyle
        </CategoryLabelBox>
        <HorizontalLineBox
          sx={{ backgroundColor: "#22B8B3" }}
        ></HorizontalLineBox>
      </Box>

        <Stack flexDirection={"row"}>
              {
        posts? (posts.map((post:any)=>{
            return <Lifestyle {...post}/>
        })):(<div>loading</div>)
        
    }

</Stack>
</Box>
        </>
    );
};

export default LifestyleSection;