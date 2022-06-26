import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthorInfo from './AuthorInfo';
import { CircularProgress } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { QuotePaper } from '../../styled/styledPaper';
import { getAuthorInfo } from '../../redux/actions/authorAction';
const AuthorInfoSection = () => {

    const { author } = useSelector((state: any) => state);
    // console.log(posts)
    const dispatch: any = useDispatch();

   
    useEffect(() => {
        // dispatch(getAuthorInfo("62b350b25dc7b38dcce966c8"))
        console.log(author.posts);

    }, [author])

    return (
        <>
            <Grid container columns={12}
                gap={10} >
                {
                    author.fullName ? (<Grid item md={12} sm={12} ><QuotePaper {...author} />
                    </Grid>) : (<CircularProgress sx={{margin:"auto"}} />)

                }

            </Grid>

        </>
    );
};

export default AuthorInfoSection;