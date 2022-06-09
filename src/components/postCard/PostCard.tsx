import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from "@mui/system";
import Post from '../../types/post'





export default function PostCard(props:Post) {

  const{title,image,description,updatedAt}=props;
  console.log(title,image,description,updatedAt);


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
        image= {image}
        alt="Paella dish"
        
      />
      <CardContent sx={{py:'20px',}} >
        <PostTitle  color="text.dark" >
       {title}
        </PostTitle>
        <PostDate variant='body1'  >
        {/* September 14, 2016 */}
        {updatedAt}
        </PostDate>

      </CardContent>

      <CardHeader
     
        avatar={
          <Avatar sx={{ bgcolor: red[500],}} src={image}  aria-label="recipe">
         
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
