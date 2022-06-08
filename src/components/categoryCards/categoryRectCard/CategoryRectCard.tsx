import React from 'react';
import Box from "@mui/material/Box";
import { styled, ThemeProvider } from "@mui/system";
import { theme } from "../../../theme/palette";
import Person from "../../../assets/person.png";
import Typography from "@mui/material/Typography";




  
 

const CategoryRectCard:React.FC = () => {

  const StyledCard = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    width: "52%",
    minHeight: "145px",
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
            width: "70%",
            position: "absolute",
            top: "60%",
            textTransform: "upperCase",
            fontWeight:'bold',
            fontSize: "1em",
          }} variant='caption'
        >
          
          Adwoa Aboah Opens Up About Her Suicide Attempt on World Mental Health
          Day
        </Typography>
      </StyledCard>
    </ThemeProvider>
      );
};

export default CategoryRectCard;