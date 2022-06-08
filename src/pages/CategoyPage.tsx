import React from 'react';
import { useEffect } from 'react';
import { useDispatch , useSelector } from "react-redux";
import {getAllPosts} from '../redux/actions/postsAction'

const CategoyPage = () => {
   
    
    const dispatch:any=useDispatch();
    useEffect(() => {
        dispatch(getAllPosts());
      },[dispatch]);

      const posts=useSelector((state:any) =>state.posts);
      

    return (
        <div>
            
        </div>
    );
};

export default CategoyPage;