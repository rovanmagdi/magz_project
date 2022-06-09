import React from 'react'
import CategoryRectCard from '../categoryRectCard/CategoryRectCard'
import CategorySquareCard from '../categorySquareCard/CategorySquareCard'
import PostCard from '../postCard/PostCard'
import {  useSelector } from "react-redux";
import Post from '../../types/post'



export default function CategoryAllSection() {
    const posts=useSelector((state:any) =>state.posts? state.posts[0].posts : state.posts);
    console.log(posts)

    
   
  return (
     
      <>
      {/* <CategoryRectCard {...post} /> */}
    {/* <CategorySquareCard {...post}/> */}
   

    {
        posts? (posts.map((post:any)=>{
            return <PostCard {...post}/>
        })):(<div>loading</div>)
        
    }
    </>
    
  )
}
