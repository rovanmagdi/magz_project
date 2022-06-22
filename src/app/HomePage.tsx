import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "../theme/palette";
import { Box, useMediaQuery, CircularProgress } from "@mui/material";
import { Home, Info, Content } from "../styled/HomePage";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import Homenews from "../pages/home/Homenews";
import ProfilePge from "../pages/profilePage/ProfilePage";
import Interested from "../pages/Interested/Interested";
import Done from "../pages/Done/Done";
import Login from "../pages/Sign/Login";
import Details from "../pages/details/Details";

function HomePage() {
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* <Roues></Roues> */}
      <Home />
      <Content>
        <Header />
        <Info>
        <Routes>
          <Route path="/" element={<Homenews />} />

          <Route path="/Profile" element={<ProfilePge />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Info>

        <Footer />
      </Content>
    </>
  );
}

export default HomePage;
