import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
const CultureSection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    return (
        <>
< Box component={"section"} marginTop={10}>

<Box position={"relative"} >
    <CategoryLabelBox sx={{backgroundColor:"#128CCB"}} >Culture</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#128CCB"}}></HorizontalLineBox>
    </Box>  
        <Stack flexDirection={"row"} >
              {
        posts? (posts.map((post:any)=>{
            return <Culture {...post}/>
        })):(<div>loading</div>)
        
    }

</Stack>
</Box>
        </>
    );
};

export default CultureSection;