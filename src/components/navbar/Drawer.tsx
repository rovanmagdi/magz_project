import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { useState, useEffect,useCallback } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { InterstedCatergory } from "../../redux/actions/interestedAction";
import { useNavigate } from "react-router-dom";

const DrawerList = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = ["new", "opinion", "sport", "life style"];

  const StyledMenu = styled(MenuIcon)(({ theme }) => ({
    color: `${theme.palette.primary.light}`,
    marginRight: "10px",
    fontSize: "50px",
  }));
  const StyledListItemText = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.light}`,
    marginBottom: "10px",
    fontSize: "18px",
    textTransform: "uppercase",
    fontFamily: "Oswald",
    fontWeight: 900,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
    },
  }));
  const BoxLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.main}`,
    height: "2px",
    width: "350px",
    marginTop: "10px",
  }));

  const StyledRightOne = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 10px 60px",
  }));
  const StyledRightOneConatiner = styled(Box)(({ theme }) => ({
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: `${theme.palette.primary.main}`,
  }));
  const PersonIconNav = styled(PersonIcon)(({ theme }) => ({
    color: `${theme.palette.secondary.main}`,
  }));
  const RegisterInfo = localStorage.getItem("RegisterInfo");
  const userInfoObj = JSON.parse(`${localStorage.getItem("RegisterInfo")}`);

  const intersted = useSelector((state: any) => state.interseted);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(InterstedCatergory());

    console.log(intersted);
  }, []);
  const nagivate: any = useNavigate();
  const handleRoute = (page: any) => {
    console.log("go");
    nagivate(`/${page}`);
  
  };
  const subCatergoryState = useSelector((state: any) => state?.Subcategory);
 

 
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <Box>
            {!RegisterInfo ? (
              <StyledRightOne>
                <StyledRightOneConatiner>
                  <PersonIconNav />
                </StyledRightOneConatiner>
                <Typography
                  sx={{ margin: "10px", fontSize: "12px" }}
                  component={"span"}
                  variant={"body2"}
                >
                  Sign in
                </Typography>
              </StyledRightOne>
            ) : (
              <StyledRightOne>
                <StyledRightOneConatiner>
                  <Box
                    component="img"
                    src={`${userInfoObj.image}`}
                    height="30px"
                    width="30px"
                    borderRadius="50%"
                    textTransform="capitalize"
                  ></Box>
                </StyledRightOneConatiner>
                <Typography
                  sx={{ margin: "10px", fontSize: "12px" }}
                  component={"span"}
                  variant={"body2"}
                >
                  {`${userInfoObj.firstName} ${userInfoObj.lastName} `}
                </Typography>
              </StyledRightOne>
            )}

            <BoxLine sx={{ marginLeft: "60px" }} />
          </Box>
          {subCatergoryState.map((page: any, index: any) => {
            return (
              <ListItemButton key={index} sx={{ width: "500px" }}>
                <ListItemIcon sx={{ marginLeft: "50px" }}>
                  <StyledListItemText onClick={() => handleRoute(page._id)}>
                    {page._id}
                    <BoxLine />
                  </StyledListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
          <FormControl
            sx={{ m: 5, width: "43ch", marginLeft: "60px" }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{ height: "45px", borderRadius: "40px", color: "#000" }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#000" }} />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <StyledMenu />
      </IconButton>
    </React.Fragment>
  );
};
export default DrawerList;
