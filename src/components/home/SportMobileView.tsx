import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { StyledOpinionCard } from "../../styled/styledCard";
import Post from "../../types/post";
import { TypographyCardTitle } from "../../styled/styledTypography";
import { DateTypography } from "../../styled/styledTypography";
import { OverlaySportMobileBox } from "../../styled/styledBox";
import { StyledSportMobileCard } from "../../styled/styledCard";
import PostDate from "../postDate/PostDate";
import { ReadMoreTypography } from "../../styled/styledTypography";
import { useNavigate } from "react-router-dom";

const SportMobileView: React.FC<Post> = (props) => {
  const{title,image,description,updatedAt, autherFirstName, autherLastName,_id, autherImage}=props;
  const nagivate: any = useNavigate();
  const handleGoDetails = (id: any) => {
    // console.log("go details");
    // console.log(props);
    nagivate(`/details/${id}`); }
  return (
    <>
      <StyledSportMobileCard onClick={() => handleGoDetails(_id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ borderRadius: "2px" }}
            height={200}
            image={image}
            alt="green iguana"
          />

          <OverlaySportMobileBox> <ReadMoreTypography>read more...</ReadMoreTypography></OverlaySportMobileBox>
          <CardContent>
            <TypographyCardTitle gutterBottom  >
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
          
          <Box
            component="img"
            height="30px"
            width="30px"
            borderRadius="50%"
            marginLeft={2}
            marginRight={2}
            src={autherImage}
            alt="green iguana"
          />
          
          <Typography textTransform={"capitalize"}>{ autherFirstName+" "+ autherLastName}</Typography>
        </CardActions>
      </StyledSportMobileCard>
    </>
  );
};

export default SportMobileView;
