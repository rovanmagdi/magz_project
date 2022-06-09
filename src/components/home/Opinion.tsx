

import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CategoryLabelBox, HorizontalLineBox, OverlayOpinionBox } from '../../styled/styledBox';
import { OverlayTodayBox } from '../../styled/styledBox';
import { color } from '@mui/system';
import { StyledOpinionCard } from '../../styled/styledCard';
const Opinion = () => {
return(
<>
<Box position={"relative"} >
    <CategoryLabelBox sx={{backgroundColor:"#C29653"}} >opinion</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#C29653"}}></HorizontalLineBox>
    </Box>  
      <StyledOpinionCard>
      <CardActionArea>
      <OverlayOpinionBox> </OverlayOpinionBox>
        <CardMedia
          component="img" sx={{borderRadius:"2px"}}
          height="200" 
          image= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
          alt="green iguana"
        />
      
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Lizards are a widespread group of squamate reptiles...
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box component="img"
height="30px" width="30px" borderRadius="50%" marginLeft={2} marginRight={2}
src= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
alt="green iguana"

/>
<Typography>Author name</Typography>
      </CardActions>
    </StyledOpinionCard>
    </>
  );
}


export default Opinion;