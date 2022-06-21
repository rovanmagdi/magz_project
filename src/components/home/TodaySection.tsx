import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Today from './Today';
import PopularPosts from '../otherPost/otherPosts';
import Weather from './Weather';
import {CircularProgress} from '@mui/material';
import { useTheme } from '@mui/material';
import {useMediaQuery} from '@mui/material';
import {Grid} from '@mui/material';
const TodaySection = () => {


    const theme = useTheme();
    const MobileView = useMediaQuery(theme.breakpoints.down("md")); 
    const LaptopView = useMediaQuery(theme.breakpoints.up("md"));

    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    // console.log(posts)



    return (
        <>
<Stack direction={"row"}>
      
              {
        posts? (posts.slice(0,1).map((post:any)=>{
            
            return   <Today {...post}        />
        })):( <CircularProgress />)
        
    }  


     <Weather/> 
  
       {/* <LastPosts></LastPosts>   */}
</Stack>
        </>
    );
};

export default TodaySection;