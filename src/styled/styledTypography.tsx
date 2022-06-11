import { Typography } from "@mui/material";
import { styled } from "@mui/material";


export const TypographyCardTitle= styled(Typography)(()=>({


    fontSize:"1.1em"  ,
fontWeight:"700", overflow:"hidden", height:"45px"



}))
export const PostTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: ".9em",
  // width:'250px',
}));

export const PostDate = styled(Typography)(({ theme }) => ({
  fontSize: ".8em",
  color: "gray",
}));

export const AutherName = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  color: "black",
}));