import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Sport from './Sport';
import {Grid} from '@mui/material';
const SportSection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    return (
        <>
< Box component={"section"} marginTop={8} >

<Box position={"relative"}>
    <CategoryLabelBox sx={{backgroundColor:"#dd2b2b"}}>sport</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#dd2b2b"}}></HorizontalLineBox>
    </Box>
 
        <Grid container columns={12}>
            <Grid item md={12} sm={12}>
              {
        posts? (posts.map((post:any)=>{
            return <Sport {...post}/>
        })):(<div>loading</div>)
        
    }
</Grid>
</Grid>
</Box>
        </>
    );
};

export default SportSection;