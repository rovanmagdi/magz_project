import React from 'react';
import Box from "@mui/material/Box";
import { styled, ThemeProvider } from "@mui/system";
import { theme } from "../../theme/palette";
import Typography from "@mui/material/Typography";
import Post from '../../types/post'



  
 

const CategoryRectCard:React.FC<Post> = (props) => {

  const{title,image}=props;
  
  console.log({title},{image});
  

  const StyledCard = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    height: "50%",
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `url(${image})`,
    position: "relative",
    paddingLeft: "28px",


  }));


    return (
      <ThemeProvider theme={theme}>
      <StyledCard>
       
        <Typography
          sx={{
            width: "70%",
            position: "absolute",
            top: "60%",
            textTransform: "upperCase",
            fontWeight:'bold',
            fontSize: "1em",
          }} variant='caption'
        >
          
          {title}
        </Typography>
      </StyledCard>
    </ThemeProvider>
      );
};

export default CategoryRectCard;