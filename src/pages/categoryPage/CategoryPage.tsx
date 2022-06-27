import React, { useEffect } from "react";
import CategoryAllSection from "../../components/categoryAllSection/CategoryAllSection";
import SubCategorySections from "../../components/subCategorySection/SubCategorySections";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Catergory } from "../../redux/actions/catergotyAction";


export default function CategoryPage() {
  const { catergory } = useSelector((state: any) => state);
  const { page } = useParams();
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(Catergory(page));
    // console.log(catergory);
  }, [page]);
  return (
    <>
      <Stack direction="row" sx={{ color: "lightGray", fontSize: "12px", margin: "0px 0px 20px 20px" }}>
        Home <ArrowForwardIosIcon sx={{ fontSize: "12px", margin: "3px" }} />
        {page}
      </Stack>

      <CategoryAllSection />

      <SubCategorySections />
    </>
  );
}
