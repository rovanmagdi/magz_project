import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "../theme/palette";
import { Box, useMediaQuery, CircularProgress } from "@mui/material";
import { Home, Info } from "../styled/HomePage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SportsPage from '../pages/sportsPage/SportsPage'



function HomePage() {
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Home />
      <Info>
        <Header />
        k
        
        <SportsPage/>
        
        <Footer />
      </Info>
    </>
  );
}

export default HomePage;
