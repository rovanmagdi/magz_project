import React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider } from "@mui/system";
import { theme } from "../../theme/palette";
import Person from "../../assets/person.png";
import Typography from "@mui/material/Typography";
import Post from '../../types/post'

const CategorySquareCardComponent: React.FC<Post> = (props) => {
  
  const{title,image,description,updatedAt}=props;
  console.log(title,image,description,updatedAt);

  const StyledCard = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    width: "35%",
    minHeight: "300px",
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `url(${Person})`,
    position: "relative",
   
    
    padding: "28px",


  }));

  

  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
       
        <Typography
          sx={{
            width: "80%",
            position: "absolute",
            top: "70%",
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

export default CategorySquareCardComponent;
