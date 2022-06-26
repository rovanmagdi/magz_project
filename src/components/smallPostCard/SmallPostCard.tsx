import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

import { red } from "@mui/material/colors";
import {  ThemeProvider } from "@mui/system";
import Post from "../../types/post";
import { theme } from "../../theme/palette";
import {PostTitle,PostDate,AutherName} from '../../styled/styledTypography'
import CustomPostDate from '../postDate/PostDate'
import {OverlayPostBox} from '../../styled/styledBox'
import {StyledPostCard} from '../../styled/styledCard'
import { useNavigate } from 'react-router-dom';

export default function SmallPostCard(props: Post) {
  const { title, image, updatedAt,_id } = props;
  

  const nagivate: any = useNavigate();
  
  const handleGoDetails = (id: any) => {
    console.log("go details");
    nagivate(`/details/${id}`);


  }

  return (
    <ThemeProvider theme={theme}>
      <StyledPostCard
      onClick={()=>handleGoDetails(_id)}
        
      >
        <OverlayPostBox></OverlayPostBox>
        <CardMedia
          component="img"
          height="250px"
          image={image}
          alt=""
        />
        <OverlayPostBox height={'250px'}></OverlayPostBox>
        <CardContent sx={{ py: "20px" }}>
          <PostTitle color="text.dark">{title}
         
          
          </PostTitle>
          <PostDate variant="body1" ml={1} mt={1}>
         
          <CustomPostDate date={updatedAt}/>
          </PostDate>
         
        </CardContent>

        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              src={image}
              aria-label="recipe"
            ></Avatar>
          }
          subheader={<AutherName>Author Name</AutherName>}
          sx={{ pt: 0, pb: "20px", color: "text.dark" }}
        />
        {/* <PostTitle>Author Name</PostTitle>
         </CardHeader> */}
      </StyledPostCard>
    </ThemeProvider>
  );
}
