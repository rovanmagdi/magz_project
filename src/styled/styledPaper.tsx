import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const ProfileDataItem = styled(Paper)(() => ({
    // padding:'10px',
    paddingLeft:'20px',
    minHeight:'45px',
    lineHeight:'45px'
   
   }));
   
   export const WeatherPaper = styled(Paper)(()=>({

    width:"270px" , padding:"25px", height:"200px"
    
    }))