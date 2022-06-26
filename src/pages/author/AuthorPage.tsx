
import PostsSection from '../../components/author/PostsSection';
import Quote from '../../components/author/Quote';
import Paginationd from '../../components/author/Paginationd';
import { Stack } from '@mui/material';
import AuthorInfoSection from '../../components/author/AuthorInfoSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthorInfo } from '../../redux/actions/authorAction';
const AuthorPage = () => {

  const dispatch: any = useDispatch();
  const {authorInfo}=useSelector((state:any) =>state)

  useEffect(() => {
    // dispatch(getAuthorInfo());
    
  }, [dispatch]);
  useEffect(() => {
    

  },[authorInfo])

  return (

    <>
      <Stack alignItems={"center"}>
        <AuthorInfoSection></AuthorInfoSection>
        <PostsSection></PostsSection>
      </Stack>




    </>

  );
};

export default AuthorPage;