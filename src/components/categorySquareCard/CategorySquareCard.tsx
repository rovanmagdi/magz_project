import React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider } from "@mui/system";
import { theme } from "../../theme/palette";
import Typography from "@mui/material/Typography";
import Post from '../../types/post'
import { useNavigate } from "react-router-dom";
import {OverlayPostBox} from '../../styled/styledBox'

const CategorySquareCardComponent: React.FC<Post> = (props) => {
  
  const{title,image,description,updatedAt,_id}=props;
  // console.log(title,image,description,updatedAt);

  const StyledCard = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `url(${image})`,
    position: "relative",
    paddingLeft: "28px",


  }));

  const nagivate: any = useNavigate();
  const handleGoDetails = (id: any) => {
    // console.log("go details");
    nagivate(`/details/${id}`);       


  }
  
 
  return (
    <ThemeProvider theme={theme}>
      <StyledCard   onClick={()=>handleGoDetails(_id)} >
      <OverlayPostBox height={'100%'} sx={{borderRadius:'5px'}}></OverlayPostBox>
        <Typography
          sx={{
            width: "80%",
            position: "absolute",
            top: {md:"70%",xs:'60%'},
            textTransform: "upperCase",
            fontWeight:'bold',
            fontSize: "1em",
          }} variant='caption'
        >
          
          {`${title?.slice(0,61)}...`}
        </Typography>
      </StyledCard>
    </ThemeProvider>
  );
};

export default CategorySquareCardComponent;
