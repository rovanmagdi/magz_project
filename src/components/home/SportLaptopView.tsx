

import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { palette } from '@mui/system';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';
import { OverlaySportBox } from '../../styled/styledBox';
import { StyledSportCard } from '../../styled/styledCard';
import Post from '../../types/post';
import { TypographyCardTitle } from '../../styled/styledTypography';
import { DateTypography } from '../../styled/styledTypography';
import PostDate from '../postDate/PostDate';
import { ReadMoreTypography } from '../../styled/styledTypography';
const SportLaptopView: React.FC<Post> = (props) => {
  
  const{title,image,description,updatedAt, autherFirstName, autherLastName,_id}=props;
  // console.log(title,image,description,updatedAt,auther);
return(
<>


    <StyledSportCard  elevation={0} >
      <CardActionArea >
        < Stack direction={"row"}>
        <CardMedia
          component="img" sx={{borderRadius:"2px", maxWidth:"340px"}}
            height={275}
            image={image}
          alt="green iguana"
        />
        <OverlaySportBox><ReadMoreTypography>read more...</ReadMoreTypography></OverlaySportBox>
        <CardContent>
          <TypographyCardTitle gutterBottom >
            {title}
          </TypographyCardTitle>
          <DateTypography>
            
      
            <Box sx={{ color: "text.secondary", fontSize: "13px" }}>
              {<PostDate date={updatedAt} />}
            </Box>
          </DateTypography>
          <Box height="80px" overflow={"hidden"}>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
          </Box>
          <CardActions>
      <Box component="img"
height="30px" width="30px" borderRadius="50%" marginRight={2} marginLeft={-1}
src={image}
alt="green iguana"

/>
<Typography>{ autherFirstName+" "+ autherLastName}</Typography>
      </CardActions>
          </CardContent>

          </Stack>
          </CardActionArea>
    
    </StyledSportCard>
    </>
  );
}
// Ahmed

export default SportLaptopView;