import { Typography } from "@mui/material";
import { styled } from "@mui/material";

export const PostTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: ".9em",
  // width:'250px',
  // ahmed
  // ahmed
  // ahmed
}));

export const PostDate = styled(Typography)(({ theme }) => ({
  fontSize: ".8em",
  color: "gray",
  // ahmed
  //ahmed
}));

export const AutherName = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  color: "black",
  // ahmed
  //ahmed
}));

export const TypographyCardTitle = styled(Typography)(() => ({
  fontSize: "1.1em",
  fontWeight: "700",
  overflow: "hidden",
  height: "45px",
  // ahmed
}));


export const DateTypography= styled(Typography)(({theme})=>({

    fontWeight:"600", fontSize:"1em", color:`${theme.palette.secondary.dark}` ,marginBottom:"3px"
  
  
  
  }))



  export const ReadMoreTypography= styled(Typography)(()=>({

    fontSize:"1.3em", color:"white", fontWeight:"700"
    , position:"relative",
    top:"45%",  left:"38%", textTransform:"capitalize"

  
  
  
  }))

  export const TypographyOverFlow = styled(Typography)(({ theme }) => ({
    height:" 45px",
           overflowY: "hidden",
  }));

  export const SubCategoryLatestPost = styled(Typography)(({ theme }) => ({
    color:"#4D7E96",
    padding:'6px',
    borderBottom:'1px solid gray',
    fontSize:'1.8em',
    margin:'50px 0px',
    textTransform:'uppercase'
  }));