import { Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from'../assets/background.png';
export const Home = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "fixed",
  }));
  export const Content = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}`,
    width: "950px",
    margin: "auto",
    position: "relative",

    fontFamily: ["Open Sans"],
    "@media (min-width: 780px)": {
      width: "80%",
    },
    "@media (max-width: 780px)": {
      width: "80%",
    },
  }));

  export const Info=styled(Box)(({ theme }) => ({
   
    padding:'20px', 
    
  }));