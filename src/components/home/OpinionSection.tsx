import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Opinion from './Opinion';
import {Grid} from '@mui/material';
import {CircularProgress} from '@mui/material';

const OpinionSection = () => {

    const filteredCategories:any=[];

    const {posts}=useSelector((state:any) =>state);
    // console.log(posts)
    if(posts)
    {
       posts.forEach((category:any)=>{
           filteredCategories[category._id]=category.posts
       })
       console.log(filteredCategories["opinion"])
   }
    return (
        <>
< Box component={"section"} marginTop={8}>
<Box position={"relative"} >
    <CategoryLabelBox sx={{backgroundColor:"#C29653"}} >opinion</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#C29653"}}></HorizontalLineBox>
    </Box>  
 
 <Grid container   columns={12}
          columnGap={17} >
 
              {
       filteredCategories["opinion"]? (filteredCategories["opinion"].map(( post:any)=>{
            return <Grid item sm={12} lg={4} key={post._id} ><Opinion {...post}/>
            </Grid> 
        })):(<CircularProgress sx={{margin:"auto"}}/>)
        
    }

</Grid>

</Box>
        </>
    );
};

export default OpinionSection;