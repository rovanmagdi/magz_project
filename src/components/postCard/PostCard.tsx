import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";
import Post from "../../types/post";
import { theme } from "../../theme/palette";
import {PostTitle,PostDate,AutherName} from '../../styled/styledTypography';
import CustomPostDate from '../postDate/PostDate'



export default function PostCard(props: Post) {
  const { title, image, updatedAt } = props;
  
  
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          border: ".1px solid lightGray",

        }}
      >
        <CardMedia
          component="img"
          height="250px"
          image={image}
          alt=""
        />
        <CardContent sx={{ py: "20px" }}>
          <PostTitle color="text.dark" sx={{width:'250px'}}>{title}
          
         
          
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
      </Card>
    </ThemeProvider>
  );
}
