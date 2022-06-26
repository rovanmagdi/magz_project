import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "../theme/palette";
import { Box, useMediaQuery, CircularProgress } from "@mui/material";
import { Home, Info, Content } from "../styled/HomePage";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import Homenews from "../pages/home/Homenews";
import ProfilePge from "../pages/profilePage/ProfilePage";

import Details from "../pages/details/Details";
import AuthorPage from "../pages/author/AuthorPage";
import SportsPage from "../pages/categoryPage/CategoryPage";
import { ColorModeContext } from "./../contexts/ColorModeContext";
import { useContext } from "react";


import { SxProps, Theme} from "@mui/material";

const ContentStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "white",
        backgroundColor: "white",

      };

    case "light": {
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor:"rgba(0,0,0,.8)"
      };
    }
  }
};
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
          
            <Route path="/details/:id" element={<Details />} />
            <Route path="/auther/:id" element={<AuthorPage />} />
            <Route path="/:page" element={<SportsPage />} />



          </Routes>
        </Info>

        <Footer />
      </Content>
    </>
  );
}

export default HomePage;
