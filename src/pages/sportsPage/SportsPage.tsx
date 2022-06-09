import React,{useEffect} from 'react'
import CategoryAllSection from '../../components/categoryAllSection/CategoryAllSection'
import { useDispatch  } from "react-redux";
import {getAllPosts} from '../../redux/actions/postsAction'



export default function SportsPage() {

    const dispatch:any=useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
      },[dispatch]);

      
  return (
    <CategoryAllSection/>
  )
}
