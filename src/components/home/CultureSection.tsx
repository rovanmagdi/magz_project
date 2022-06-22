import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import {Grid} from '@mui/material';
import {CircularProgress} from '@mui/material';

const CultureSection = () => {
    const filteredCategories:any=[];
    const posts=useSelector((state:any) =>state.posts? state.posts : state.posts);
    // console.log(posts)
     if(posts)
     {
        posts.forEach((category:any)=>{
            filteredCategories[category._id]=category.posts
        })
        console.log(filteredCategories["culture"])
    }
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
        filteredCategories["culture"]? (filteredCategories["culture"].map((post:any)=>{
            return <Grid item md={4} sm={12} key={post._id}><Culture {...post}/>
            </Grid> 
        })):(<CircularProgress/>)
        
    }

</Grid>

</Box>
        </>
    );
};

export default CultureSection;