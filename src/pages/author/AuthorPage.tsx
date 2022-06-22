
import React from 'react';
import Avatar from '../../components/author/Avatar';
import PostsSection from '../../components/author/PostsSection';
import Quote from '../../components/author/Quote';
import Paginationd from '../../components/author/Paginationd';
import { Stack } from '@mui/material';
import AuthorInfoSection from '../../components/author/AuthorInfoSection';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthorInfo } from '../../redux/actions/authorAction';
const AuthorPage = () => {

    const dispatch:any=useDispatch();
    useEffect(() => {
        dispatch(getAuthorInfo());
      },[dispatch]);

    return (
        <>
        <Stack alignItems={"center"}>
<Avatar></Avatar> 
{/* <AuthorInfoSection></AuthorInfoSection>
<PostsSection></PostsSection> */}
<Paginationd></Paginationd>
</Stack>




       </>
    );
};

export default AuthorPage;