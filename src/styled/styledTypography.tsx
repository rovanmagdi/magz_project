import { Typography } from "@mui/material";
import { styled } from "@mui/material";


export const PostTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: ".9em",
  // width:'250px',
  // ahmed
}));


export const TypographyCardTitle= styled(Typography)(()=>({


    fontSize:"1.1em"  ,
fontWeight:"700", overflow:"hidden", height:"45px"



}))