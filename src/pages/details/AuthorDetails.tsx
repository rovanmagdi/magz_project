import React from "react";
import { CategoryLabelBox } from "../../styled/styledBox";
import { Box, Stack } from "@mui/material";
import { StyledGridRightLine } from "../../styled/PopularPost";
import author from "../../assets/person.png";

export default function AuthorDetails(props:any) {
  
  return (
    <>
      <Box
        sx={{
          border: "1px solid #B1B1B1",
          marginTop: "30px",
          height: "250px",
          display: "flex",
          justifyItems: "flex-end",
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "500px",
            backgroundColor: "#FFFFFF",
            boxShadow: "-1px -1px 13px 0px rgba(196,191,191,0.75);",
            margin: "auto",
            marginBottom: "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <StyledGridRightLine
              sx={{
                alignSelf: "flex-end",
                width: "500px",
                height: "6px",
                margin: "auto",
                position: "absolute",
                bottom: "0",

                backgroundColor: "#4D7E96",
              }}
            />
            <CategoryLabelBox
              sx={{
                backgroundColor: "#4D7E96",
                position: "absolute",
                bottom: "0",
                zIndex: "15",
                width:"130px",
                left: "40%",
              }}
              // onClick={() => handleAuthor(stateDetails.auther._id)}
            >
              Articles for Author
            </CategoryLabelBox>
            <Box sx={{ display: "flex",justifyContent: "center",alignItems: "center"}}>
              <Box
                component="img"
                src={props.image}
                sx={{ borderRadius: "50%", height: "70px", width: "70px",margin:"20px" }}
              />
              <Box sx={{margin:"20px"}}>
                <Box component="p" sx={{fontWeight:"bold"}} >{props.name}</Box>
                <Box component="span" sx={{fontSize:"13px"}}>
                 {props.brief}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
