

import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { palette } from '@mui/system';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { OverlaySportBox } from '../../styled/styledBox';
import { StyledSportCard } from '../../styled/styledCard';
const Sport = () => {
return(
<>
<Box position={"relative"}>
    <CategoryLabelBox sx={{backgroundColor:"#dd2b2b"}}>sport</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#dd2b2b"}}></HorizontalLineBox>
    </Box>

    <StyledSportCard  elevation={0} >
      <CardActionArea sx={{ display:"flex"}}>
        <CardMedia
          component="img" sx={{borderRadius:"2px", maxWidth:"340px"}}
            height={280}
          image= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
          alt="green iguana"
        />
        <OverlaySportBox></OverlaySportBox>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Lizard are a widespread group of squamate reptiles, with over...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CardActions>
      <Box component="img"
height="30px" width="30px" borderRadius="50%" marginRight={2} marginLeft={-1}
src= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
alt="green iguana"

/>
<Typography>Author name</Typography>
      </CardActions>
          </CardContent>


          </CardActionArea>
    
    </StyledSportCard>
    </>
  );
}


export default Sport;