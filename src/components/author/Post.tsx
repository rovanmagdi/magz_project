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

const AuthorPost: React.FC<Post> = (props) => {
  const { title, image, description, updatedAt , autherFirstName, autherLastName, category, autherBrief,autherImage} = props;
  console.log(title, image, description, updatedAt, autherFirstName);
  return (
    <>
   
      <StyledAuthorPostCard>
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
            {description}
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
            src={image}
            alt="green iguana"
          />
          <Typography textTransform={"capitalize"}>{ autherFirstName+" "+ autherLastName}</Typography>
        </CardActions>
      </StyledAuthorPostCard>
    </>
  );
};

export default AuthorPost;
