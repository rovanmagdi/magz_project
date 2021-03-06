import React from "react";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import Culture from "../home/Culture";
const SearchCategory = () => {
  const filteredCategories:any=[];

  const {posts}=useSelector((state:any) =>state);

  // console.log(posts);
  
  if(posts)
  {
     posts.forEach((category:any)=>{
         filteredCategories[category._id]=category.posts
     })
    //  console.log(filteredCategories["lifestyle"])
 }
  const [search, setSearch] = useState("");

  function handleChange(e: any) {
    setSearch(e.target.value)
    // console.log(e.target.value);
    
  }
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="search category ..."
        value={search}
        onChange={handleChange}
      />

      <Grid container columns={12} gap={1}>
        {posts ? (
          posts &&
          posts
            .filter((post: any) => post.category.toLowerCase().includes(search.toLowerCase()))
            .map((post: any) => {
              return (
                
                <Grid item md={4} sm={12}>
                  <Culture {...post} />
                </Grid>
              );
            })
        ) : (
<CircularProgress/>       )}
      </Grid>
    </>
  );
};

export default SearchCategory;
