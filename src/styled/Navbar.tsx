import {
  Box,
  Tabs,
  Select,
  Tab,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export const StyledNavTop = styled(Box)(({ theme }) => ({
  borderRadius: "3px",
  width: "95%",
  height: "30px",
  backgroundColor: `${theme.palette.secondary.main}`,
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 0px 0px 10px",
}));

export const BoxTitleSub = styled(Box)(({ theme }) => ({

  width: "100px",
  cursor: "pointer",
  background:
    theme.palette.mode === "light"
      ? `#2b2b2b`
      : "white",
      textTransform:"capitalize",
      color:
      theme.palette.mode === "light"
        ? `white`
        : "#2b2b2b",


}));
export const BoxTitleCategory = styled(Box)(({ theme }) => ({
  width: "100px",
  cursor: "pointer",
  color:
    theme.palette.mode === "light"
      ? `whtie`
      : "black",

}));
export const StyledNavConatiner = styled(Box)(({ theme }) => ({
  fontSize: "12px",
}));
export const StyledNavTopRight = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
export const StyledRightOne = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  cursor: "pointer",
}));
export const PersonIconNav = styled(PersonIcon)(({ theme }) => ({
  color: `${theme.palette.secondary.main}`,
}));
export const StylesSelected = styled(Select)(({ theme }) => ({
  color: `${theme.palette.text.secondary}`,
  height: "30px ",
  fontSize: "12px",
  "&:focus": {
    border: "1px solid transparent",
  },
}));
export const StyledRightOneConatiner = styled(Box)(({ theme }) => ({
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  marginRight: "10px",

  backgroundColor: `${theme.palette.primary.light}`,
}));
export const StyledImage = styled(Box)(({ theme }) => ({
  padding: "0px 0px 0px 50px",
}));
export const StyledNavBottom = styled(Box)(({ theme }) => ({
  borderRadius: "3px",
  width: "95%",
  height: "50px",
  backgroundColor: `${theme.palette.primary.light}`,
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 0px 0px 10px",
  // position:"sticky"
}));
export const StyledListNavLeft = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}`,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "space-between",
  padding: "0px 0px 0px 10px",
}));
export const StyledListNavRight = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 10px 0px 10px",
}));
export const StyledListNavLeftContent = styled(Button)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}`,
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "Oswald",
  "&:hover": {
    backgroundColor: `${theme.palette.primary.main}`,
  },
}));
export const StyledListNavLeftMore = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}`,
  fontSize: "18px",
  textTransform: "uppercase",
  fontFamily: "Oswald",
  marginLeft: "15px",
  // padding: "6px",
  fontWeight: "bold",
  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#000"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark"
            ? `${theme.palette.primary.main}`
            : `${theme.palette.primary.main}`,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "white"
        : `${theme.palette.primary.contrastText}`,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        `${theme.palette.primary.main}`
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "#8796A5"
        : `${theme.palette.primary.main}`,
    borderRadius: 20 / 2,
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  height: "140px",
  width: "350px",
  position: "absolute",
  left: "148px",
  marginTop: "24px",
  fontFamily: "Oswald",
  cursor: "pointer",
  backgroundColor: `${theme.palette.primary.light}`,
  display: "flex",
  justifyContent: "space-between",
}));
export const StyledBorsder = styled(Box)(({ theme }) => ({
  height: "120px",
  width: "1.5px",
  marginTop: "5px",
  backgroundColor: `${theme.palette.primary.contrastText}`,
}));
export const StypledMedia = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledLink = styled(Box)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.text.secondary}`,
}));
