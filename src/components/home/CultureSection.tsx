import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import {Grid} from '@mui/material';
const CultureSection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    return (
        <>
< Box component={"section"} marginTop={8}>

<Box position={"relative"} >
    <CategoryLabelBox sx={{backgroundColor:"#128CCB"}} >Culture</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#128CCB"}}></HorizontalLineBox>
    </Box>  
    <Grid container  columns={12}
           gap={1}>
              {
        posts? (posts.map((post:any)=>{
            return <Grid item md={4} sm={12}><Culture {...post}/>
            </Grid> 
        })):(<div>loading</div>)
        
    }

</Grid>

</Box>
        </>
    );
};

export default CultureSection;