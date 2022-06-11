import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "../theme/palette";
import { Box, useMediaQuery, CircularProgress } from "@mui/material";
import { Home, Info } from "../styled/HomePage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Homenews from "../pages/home/Homenews";
import SportsPage from "../pages/sportsPage/SportsPage";
import Interested from "../pages/Interested/Interested";

function HomePage() {
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* <Roues></Roues> */}
      <Home />
      <Info>
        <Header />
        <Routes>
          <Route path="index" element={<Interested />} />
        </Routes>
        <Homenews />
        <SportsPage />
        <Footer />
      </Info>
    </>
  );
}

export default HomePage;
