import React from 'react';
import { useSelector } from 'react-redux';
import AuthorInfo from './AuthorInfo';
import { CircularProgress } from '@mui/material';
import {Grid, Box} from '@mui/material';
import { QuotePaper } from '../../styled/styledPaper';
const AuthorInfoSection = () => {

    const authorInfo=useSelector((state:any) =>state.author? state.author: state.author);
    console.log(authorInfo)

    return (
        <>
          {/* <Grid container  columns={12}
         gap={10} >
              {
        authorInfo? (authorInfo.map((info:any)=>{
            return <Grid item md={12} sm={12} ><QuotePaper {...info}/>
            </Grid> 
        })):(<CircularProgress/>)
        
    }

</Grid> */}

        </>
    );
};

export default AuthorInfoSection;