import React, { useEffect } from "react";
import SubcategoryPagination from "../../components/subcategoryPagination/SubcategoryPagination";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { getSubcategoryPosts } from "../../redux/actions/subcategoryPostsAction";

export default function SubCategoryPage() {
    const { subcategoryPosts } = useSelector((state: any) => state);
    const { page } = useParams();
    const dispatch: any = useDispatch();
    useEffect(() => {
      dispatch(getSubcategoryPosts('healt'));
      console.log(subcategoryPosts);
    }, []);
  return (<>

    <div>SubCategoryPage</div>
    <SubcategoryPagination/>
    
    </>
  )
}
