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
import PostDate from "../postDate/PostDate";
const Lifestyle: React.FC<Post> = (props) => {
  const { title, image, description, updatedAt , auther} = props;
  console.log(title, image, description, updatedAt);
  return (
    <>
   
      <StyledLifestyleCard>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ borderRadius: "2px" }}
            height="200"
            image={image}
            alt="green iguana"
          />
          <OverlayLifestyleBox></OverlayLifestyleBox>
          <CardContent>
            <TypographyCardTitle gutterBottom  >
             {title}
            </TypographyCardTitle>
            {/* <Typography variant="body2" color="text.secondary">
{description}            </Typography> */}
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
          <Typography>{auther}</Typography>
        </CardActions>
      </StyledLifestyleCard>
    </>
  );
};

export default Lifestyle;
