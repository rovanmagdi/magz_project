import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Today from './Today';
import PopularPosts from '../popularPosts/populatPosts';
import Weather from './Weather';
const TodaySection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    // console.log(posts)

    return (
        <>

        <Stack  direction={"row"} justifyContent={"space-between"}>
              {
        posts? (posts.slice(0,1).map((post:any)=>{
            return <Today {...post}/>
        })):(<div>loading</div>)
        
    }  

     <Weather></Weather> 
</Stack>
        </>
    );
};

export default TodaySection;