
import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { color } from '@mui/system';
import { StyledCultureCard } from '../../styled/styledCard';
import { OverlayCultureBox } from '../../styled/styledBox';
import Post from '../../types/post';
import { ReadMoreTypography, TypographyCardTitle } from '../../styled/styledTypography';
import { DateTypography } from '../../styled/styledTypography';
import PostDate from '../postDate/PostDate';
import { useNavigate } from 'react-router-dom';

const Culture: React.FC<Post> = (props) => {

  const{title,image,updatedAt, autherFirstName, autherLastName, _id, autherImage}=props;
  const nagivate: any = useNavigate();
  const handleGoDetails = (id: any) => {
    console.log("go details");
    console.log(props);
    nagivate(`/details/${id}`);  }
return(
<>
 
     <StyledCultureCard  onClick={() => handleGoDetails(_id)} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img" sx={{borderRadius:"2px"}}
          height="200" 
          image={image}
          alt="green iguana"
        />
        <OverlayCultureBox><ReadMoreTypography>read more...</ReadMoreTypography></OverlayCultureBox>
        <CardContent>
          <TypographyCardTitle gutterBottom >
          {title}
          </TypographyCardTitle>
          <DateTypography>
            
      
            <Box sx={{ color: "text.secondary", fontSize: "13px" }}>
              {<PostDate date={updatedAt} />}
            </Box>
          </DateTypography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box component="img"
height="30px" width="30px" borderRadius="50%" marginLeft={2} marginRight={2}
src={autherImage}
alt="green iguana"

/>
<Typography textTransform={"capitalize"}>{ autherFirstName+" "+ autherLastName}</Typography>
      </CardActions>
    </StyledCultureCard>
    </>
  );
}


export default Culture;