import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Opinion from './Opinion';
import {Grid} from '@mui/material';

const OpinionSection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    return (
        <>
< Box component={"section"} marginTop={8}>
<Box position={"relative"} >
    <CategoryLabelBox sx={{backgroundColor:"#C29653"}} >opinion</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#C29653"}}></HorizontalLineBox>
    </Box>  
 
 <Grid container>
    <Grid item columns={6} wrap={"wrap"}>
        <Stack flexDirection={"row"} >
              {
        posts? (posts.map((post:any)=>{
            return <Opinion {...post}/>
        })):(<div>loading</div>)
        
    }

</Stack>
</Grid>

</Grid>
</Box>
        </>
    );
};

export default OpinionSection;