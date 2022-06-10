import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled, ThemeProvider } from "@mui/system";
import Post from "../../types/post";
import { theme } from "../../theme/palette";

export default function PostCard(props: Post) {
  const { title, image, updatedAt } = props;
  

  const PostTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: ".9em",
    width:'250px',
    
    
  }));

  const PostDate = styled(Typography)(({ theme }) => ({
    fontSize: ".8em",
    color: 'gray',
    
    
  }));

  const AutherName = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    color: "black",
  }));

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          // width: "30%",
          // minHeight: "300px",
          border: ".1px solid lightGray",
          // mb: 10,
        }}
      >
        <CardMedia
          component="img"
          height="250px"
          image={image}
          alt=""
        />
        <CardContent sx={{ py: "20px" }}>
          <PostTitle color="text.dark">{title}
         
          
          </PostTitle>
          <PostDate variant="body1" ml={1} mt={1}>
            {/* September 14, 2016 */}
            {updatedAt}
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
      </Card>
    </ThemeProvider>
  );
}
