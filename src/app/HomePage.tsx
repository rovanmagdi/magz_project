import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "../theme/palette";
import { Box, useMediaQuery, CircularProgress } from "@mui/material";
import { Home, Info, Content } from "../styled/HomePage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Homenews from "../pages/home/Homenews";
import ProfilePge from "../pages/profilePage/ProfilePage";
import Interested from "../pages/Interested/Interested";

function HomePage() {
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* <Roues></Roues> */}
      <Home />
      <Content>
        <Header />
        <Routes>
          <Route path="index" element={<Interested />} />
        </Routes>
        <Info>
          {" "}
          <ProfilePge />
        </Info>

<Homenews></Homenews>

     


        
        
        
        <Footer />
      </Content>
    </>
  );
}

export default HomePage;
