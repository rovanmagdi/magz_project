import { Box, Menu, useTheme, useMediaQuery } from "@mui/material";

import Logo from "../../assets/logo.png";

import { StyledNavConatiner, StypledMedia } from "../../styled/Navbar";
import DrawerList from "./Drawer";

import NavbarTop from "./NavbarTop";
import NavbarImage from "./NavbarImage";
import { useNavigate } from "react-router-dom";
import NavbarBottom from "./NavbarBottom";

import { SxProps, Theme} from "@mui/material";

const HeaderStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "white",
        backgroundColor: "black",

      };

    case "light": {
      return {
        ...defaultStyles,
        color: "black",
        backgroundColor: "#fff",
      };
    }
  }
};
const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const nagivate: any = useNavigate();
  const handleHome = () => {
    nagivate("/");
  };
  return (
    <StyledNavConatiner sx={HeaderStyles(theme)}>
      {isMatch ? (
        <StypledMedia>
          <Box sx={{ padding: " 20px" }}>
            <img src={Logo} height="70px" width="130px" onClick={handleHome} />
          </Box>
          <DrawerList />
        </StypledMedia>
      ) : (
        <StyledNavConatiner>
          <NavbarTop />
          <NavbarImage />
          <NavbarBottom />
        </StyledNavConatiner>
      )}
    </StyledNavConatiner>
  );
};
export default Header;
