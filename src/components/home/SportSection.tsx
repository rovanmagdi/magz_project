import React from 'react';
import Culture from '../../components/home/Culture'
import {  useSelector } from "react-redux";
import { Stack } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { Box } from '@mui/material';
import Sport from './SportLaptopView';
import {Grid} from '@mui/material';
import {CircularProgress} from '@mui/material';
import { useTheme } from '@mui/material';
import {useMediaQuery} from '@mui/material';
import SportLaptopView from './SportLaptopView';
import SportMobileView from './SportMobileView';
const SportSection = () => {
    const theme = useTheme();
    const MobileView = useMediaQuery(theme.breakpoints.down("md")); 
    const LaptopView = useMediaQuery(theme.breakpoints.up("md"));

    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    return (
        <>
< Box component={"section"} marginTop={8}>

<Box position={"relative"}>
    <CategoryLabelBox sx={{backgroundColor:"#dd2b2b"}}>sport</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#dd2b2b"}}></HorizontalLineBox>
    </Box>
 
        <Grid container columns={12}>
            <Grid item md={12}  hidden={MobileView}>
              {
        posts? (posts.map((post:any)=>{
            return <SportLaptopView {...post}/>
        })):(<CircularProgress/>)
        
    }
</Grid>


<Grid item md={12}  hidden={LaptopView}>
              {
        posts? (posts.map((post:any)=>{
            return <SportMobileView {...post}/>
        })):(<CircularProgress/>)
        
    }
</Grid>

</Grid>
</Box>
        </>
    );
};

export default SportSection;