
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
import { Paper } from "@mui/material";
import Details from "../pages/details/Details";
import AuthorPage from "../pages/author/AuthorPage";
import SportsPage from "../pages/categoryPage/CategoryPage";

import { getDesignMode } from "../theme/DarkMode";
import { createTheme } from "@mui/material";
import { ColorModeProvider } from "../contexts/ColorModeContext";
import SubCatergory from "../pages/subCatergory/SubCatergory";
function App() {


  return (
    <div className="App">
      <ColorModeProvider>


        <Provider store={store}>

          <Suspense fallback={<CircularProgress />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homenews />}>
                  <Route path="/Profile" element={<ProfilePge />} />
                  <Route path="/:page" element={<Details />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/auther/:id" element={<AuthorPage />} />
                  <Route path="/:page" element={<SportsPage />} />
                  <Route path="/:page/:Subpage" element={<SubCatergory />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="interested" element={<Interested />} />
                <Route path="done" element={<Done />} />
              </Routes>
            </BrowserRouter>
          </Suspense>

        </Provider>


      </ColorModeProvider>
    </div>

  );
}

export default App;
