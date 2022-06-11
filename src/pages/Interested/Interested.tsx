import { Box, Checkbox, Grid } from "@mui/material";
import React, { useState } from "react";
import FooterSign from "../../components/footerSign/FooterSign";
import NavbarSign from "../../components/navbarSign/NavbarSign";
import StepperTab from "../../components/stepper/Stepper";
import { styled } from "@mui/material/styles";
import { Home, Info,Content } from "../../styled/HomePage";
const Interested = () => {
  const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    fontFamily: "Oswald",
    fontWeight: "800",
    fontSize: "14px",
    textTransform: "uppercase",
    position: "absolute",
    paddingLeft: "20px",
    marginTop: "-10px",
    backgroundColor: "white",
  }));
  const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.light}`,
    height: "3px",
    width: "370px",
    borderRadius: "10px",
    margin: "8px 0px 0px 15px",
  }));
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [userinfo, setUserInfo] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    // const { intersets }= userinfo;

    console.log(`${value} is ${checked}`);

    if (checked) {
    //  setUserInfo((old)=> value)
    }

    else {
      // setUserInfo({
      //   intersets: intersets.filter((e) => e !== value),
      // });
    }
  };
  return (
    <Box>
      <Home />
      <Content>
        <NavbarSign />
        <StepperTab />
        <Box
          sx={{
            display: "flex",
            border: `1px solid #D9D9D9`,
            margin: "0px 150px 0px 200px",
            height: "auto",
            position: "relative",
          }}
        >
          <StyledGridRightTitle sx={{ color: "black" }}>
            Contact Us
            <StyledGridRightLine />
          </StyledGridRightTitle>
          <Box sx={{ paddingTop: "40px" }}>
            <Checkbox
              {...label}
              name="intersets"
              value="Sport"
              onChange={handleChange}
            />
          </Box>
        </Box>
        <FooterSign />
      </Content>
    </Box>
  );
};

export default Interested;
