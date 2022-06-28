import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CategoryLabelBox, HorizontalLineBox } from "../../styled/styledBox";
import { color } from "@mui/system";
import { OverlayLifestyleBox } from "../../styled/styledBox";
import { StyledLifestyleCard } from "../../styled/styledCard";
import Post from "../../types/post";
import { TypographyCardTitle } from "../../styled/styledTypography";
import { DateTypography } from "../../styled/styledTypography";
import { StyledCircleIcon } from "../../styled/StyledIcon";
import { StyledAuthorPostCard } from "../../styled/styledCard";
import { TodayLabelBox } from "../../styled/styledBox";
import { AuthorPostLabelBox } from "../../styled/styledBox";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

const AuthorPost: React.FC<Post> = (props) => {
  const { _id,title, image, description, updatedAt , auther, category} = props;
  // console.log(title, image, description, updatedAt, autherFirstName);
  const nagivate: any = useNavigate();
  
  const handleGoDetails = (id: any) => {
    // console.log("go details");
    nagivate(`/details/${id}`);


  }
  
  return (
    <>
   
      <StyledAuthorPostCard onClick={()=>handleGoDetails(_id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ borderRadius: "2px" }}
            height="200"
            image={image}
            alt="green iguana"
          />
          <CardContent>
          <AuthorPostLabelBox>{category}</AuthorPostLabelBox>

            <TypographyCardTitle gutterBottom  >
             {title}
            </TypographyCardTitle>
            <DateTypography>
          
            <StyledCircleIcon ></StyledCircleIcon>
               {`${new Date(updatedAt).toLocaleString("en-GB", {
               month: "short",
              day: "numeric",
              year: "numeric",
            })}`}
          </DateTypography>
          <Typography variant="body2" color="text.secondary">
            {`${description.slice(0,120)}...`}
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box
            component="img"
            height="30px"
            width="30px"
            borderRadius="50%"
            marginLeft={2}
            marginRight={2}
            src={auther.image}
            alt="green iguana"
          />
          <Typography textTransform={"capitalize"}>{ auther.firstName+" "+ auther.lastName}</Typography>
        </CardActions>
      </StyledAuthorPostCard>
    </>
  );
};

export default AuthorPost;
