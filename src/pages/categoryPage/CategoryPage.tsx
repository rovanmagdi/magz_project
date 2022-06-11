import React,{useEffect} from 'react'
import CategoryAllSection from '../../components/categoryAllSection/CategoryAllSection'
import SubCategorySection from '../../components/subCategorySection/SubCategorySection'
import { useDispatch  } from "react-redux";
import {getAllPosts} from '../../redux/actions/postsAction'




export default function SportsPage() {

    // const dispatch:any=useDispatch();
    const dispatch:any=useDispatch();
    
    const subCategories=['football','volleyball','basketball']

    // useEffect(() => {
    //     dispatch(getAllPosts());
    //   },[dispatch]);

      
  return (
    <>
   
      route
    <CategoryAllSection/>
     {
       subCategories.map((subCategory)=>{
         return(
          <SubCategorySection />
         )
         
       })
     }
    
     
    </>
   
  )
}
