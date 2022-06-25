import React, { useEffect } from "react";
import CategoryRectCard from "../categoryRectCard/CategoryRectCard";
import CategorySquareCard from "../categorySquareCard/CategorySquareCard";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CategoryLabelBox } from "../../styled/styledBox";
import { HorizontalLineBox } from "../../styled/styledBox";
import Stack from "@mui/material/Stack";
import { Catergory } from "../../redux/actions/catergotyAction";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoryAllSection() {
  const { catergory } = useSelector((state: any) => state);

  const dispatch: any = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(Catergory(page));
    console.log(catergory);
  }, [page]);

  const nagivate: any = useNavigate();
  const handleGoDetails = (id: any) => {
    console.log("go details");
    nagivate(`/details/${id}`);       


  }
  return (
    <>
     

      <Box position={"relative"} mb={2}>
        <CategoryLabelBox sx={{ backgroundColor: "#272727" }}>
          All
        </CategoryLabelBox>
        <HorizontalLineBox
          sx={{ backgroundColor: "#272727" }}
        ></HorizontalLineBox>
      </Box>
      {catergory ? (
        <>
          <Grid
            container
            columns={12}
            sx={{ height: { md: "400px", sm: "auto" } }}
            gap={2}
            
          >
            <Grid item md={5} xs={12} height={{ md: "100%", xs: "250px" }}
            onClick={()=>handleGoDetails(catergory[0]._id)} sx={{"&:hover":{
              cursor: "pointer",
            }}}>
              <CategorySquareCard {...catergory[0]}  />
            </Grid>
            <Grid item md={6.8} xs={12} height={{ md: "100%", xs: "500px" }}>
              <Stack spacing={2} height={"100%"}>
              
                <CategoryRectCard {...catergory[1]} />
                <CategoryRectCard {...catergory[2]} />
              </Stack>
            </Grid>
          </Grid>
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
