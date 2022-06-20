import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Today from './Today';
import Weather from './Weather';
import PopularPosts from '../popularPosts/populatPosts';
const TodaySection = () => {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    // console.log(posts)

    return (
        <>

        <Stack  direction={"row"}>
             {/* {
        posts? (posts.map((post:any)=>{
            return <Today {...post}/>
        })):(<div>loading</div>)
        
    }  */}
    <Weather/>
    {/* <PopularPosts data="Any Description" date="125" /> */}
</Stack>
        </>
    );
};

export default TodaySection;