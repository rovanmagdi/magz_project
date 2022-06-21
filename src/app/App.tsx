import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/palette";
import { Box, useMediaQuery, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/navbar/Header";
import Image from "../assets/background.png";
import Footer from "../components/footer/Footer";
import Login from "../pages/Sign/Login";
import Homenews from "./HomePage";
import Interested from "../pages/Interested/Interested";
import ProfilePge from "../pages/profilePage/ProfilePage";
import Done from "../pages/Done/Done";
import { ColorModeProvider } from '../contexts/ColorModeContext';
import {Paper} from "@mui/material";
import Details from "../pages/details/Details";
function App() {
  const Home = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "fixed",
  }));
  const Info = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}`,
    width: "950px",
    margin: "auto",
    position: "relative",
    fontFamily: ["Open Sans"],
    // padding:'20px',
    "@media (min-width: 780px)": {
      width: "80%",
    },
    "@media (max-width: 780px)": {
      width: "80%",
    },
  }));

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ColorModeProvider>
    <Paper>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<CircularProgress />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homenews />}>
                <Route path="/Profile" element={<ProfilePge />} />
                <Route path="/details" element={<Details />} />
                
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="interested" element={<Interested />} />
              <Route path="done" element={<Done />} />

            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </Provider>
    </Paper>
    </ColorModeProvider>
  );
}

export default App;
