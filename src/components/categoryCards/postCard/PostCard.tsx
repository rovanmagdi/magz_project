import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Person from "../../../assets/person.png";
import { styled, ThemeProvider } from "@mui/system";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}



export default function PostCard() {


    const PostTitle=styled(Typography)(({ theme }) => ({
        fontWeight:'bold',
        fontSize:'.9em',
    
      }));

      const PostDate=styled(Typography)(({ theme }) => ({
        
        fontSize:'.8em',
        ml:1
    
      }));

      const AutherName=styled(Typography)(({ theme }) => ({
        
        fontSize:'1em',
        color:'black'
       
    
      }));
  

  return (
    <Card sx={{ width: '30%' , minHeight:'300px',border:'.1px solid lightGray',mb:10,}} >
     
      <CardMedia
        component="img"
        height="250px"
        image= {Person}
        alt="Paella dish"
        
      />
      <CardContent sx={{py:'20px',}} >
        <PostTitle  color="text.dark" >
        Nina Dobrev Got A Chin-Length, Asymmetrical Bob For The CFDA…
        </PostTitle>
        <PostDate variant='body1'  >
        September 14, 2016
        </PostDate>

      </CardContent>

      <CardHeader
     
        avatar={
          <Avatar sx={{ bgcolor: red[500],}} src={Person}  aria-label="recipe">
         
          </Avatar>
        }
       
        subheader={<AutherName>Author Name</AutherName>}
        sx={{pt:0,pb:'20px',color:'text.dark'}}
        
      />
          {/* <PostTitle>Author Name</PostTitle>
          </CardHeader> */}
     
    </Card>
  );
}
