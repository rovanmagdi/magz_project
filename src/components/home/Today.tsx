import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled, ThemeProvider } from "@mui/system";
import { theme } from "../../theme/palette";
import Post from "../../types/post";
import postAPI from "../../api/postsApi";
import { OverlayTodayBox } from "../../styled/styledBox";
import { StyledTodayCard } from "../../styled/styledCard";
import { TodayLabelBox } from "../../styled/styledBox";
import PostDate from "../postDate/PostDate";
import { StyledCircleIcon } from "../../styled/StyledIcon";
import { DateTypography } from "../../styled/styledTypography";
import { useNavigate } from "react-router-dom";

const Today: React.FC<Post> = (props) => {
  const { title, image, description, auther, updatedAt, _id } = props;

  // const Today: React.FC<Post> = (props) => {
  //   const { title, image, description, auther } = props;

  // console.log({ title }, { image });
  const nagivate: any = useNavigate();
  const handleGoDetails = (id: any) => {
    console.log("go details");
    console.log(props);
    nagivate(`/details/${id}`);

  }
  return (
    <StyledTodayCard elevation={0} onClick={() => handleGoDetails(_id)}>
      <CardActionArea>
        <TodayLabelBox>Today</TodayLabelBox>
        <CardMedia
          component="img"
          sx={{ borderRadius: "8px", backgroundSize: "contain" }}
          height="380"
          image={image}
          alt="green iguana"
        />
        <OverlayTodayBox></OverlayTodayBox>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <DateTypography>
            <StyledCircleIcon ></StyledCircleIcon>
            {`${new Date(updatedAt).toLocaleString("en-GB", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}`}
          </DateTypography>
          <Typography variant="body2" color="text.secondary" sx={{
            whiteSpace: "nowrap",
            width: "8000px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
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
        <Typography>{auther} </Typography>
      </CardActions>
    </StyledTodayCard>
  );
};

export default Today;
