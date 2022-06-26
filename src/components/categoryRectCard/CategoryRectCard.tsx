import React from 'react';
import Box from "@mui/material/Box";
import { styled, ThemeProvider } from "@mui/system";
import { theme } from "../../theme/palette";
import Typography from "@mui/material/Typography";
import Post from '../../types/post'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OverlayPostBox } from '../../styled/styledBox'

const CategoryRectCard: React.FC<Post> = (props) => {

  const { title, image ,_id} = props;

  // console.log({ title }, { image });


  const StyledCard = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    height: "50%",
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `url(${image})`,
    position: "relative",
    paddingLeft: "28px",


  }));
  const { catergory } = useSelector((state: any) => state);

  const nagivate: any = useNavigate();

  const handleGoDetails = (id: any) => {
    console.log("go details");
    nagivate(`/details/${id}`);


  }
  return (
    <ThemeProvider theme={theme}>

      <StyledCard sx={{
        "&:hover": {
          cursor: "pointer",
        }
      }}
      onClick={()=>handleGoDetails(_id)}>
<OverlayPostBox height={'100%'} sx={{borderRadius:'5px'}}></OverlayPostBox>
        <Typography
          sx={{
            width: "70%",
            position: "absolute",
            top: "60%",
            textTransform: "upperCase",
            fontWeight: 'bold',
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