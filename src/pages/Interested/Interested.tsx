import { Box, Checkbox, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import FooterSign from "../../components/footerSign/FooterSign";
import NavbarSign from "../../components/navbarSign/NavbarSign";
import StepperTab from "../../components/stepper/Stepper";
import { styled } from "@mui/material/styles";
import { Content, Home, Info } from "../../styled/HomePage";
import { StyledDescription, StyledTitle } from "../../styled/CategoryIntersted";
import { useDispatch, useSelector } from "react-redux";
import { InterstedCatergory } from "../../redux/actions/interestedAction";
import { StyledLine } from "../../styled/Footer";
import { AddInterested } from "../../redux/actions/addInterested";
import { StyledButton } from "../../styled/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
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

  const [userinfo, setUserInfo] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    console.log(`${value} is ${checked}`);

    if (checked) {
      setUserInfo((old: any) => [...old, value]);
      dispatch(AddInterested(value));
    } else {
      const newState = userinfo?.filter((el) => {
        return el !== value;
      });

      setUserInfo((old) => [...newState]);
    }
  };
  console.log(userinfo);
  const intersted = useSelector((state: any) => state.interseted);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(InterstedCatergory());

    console.log(intersted);
  }, []);
const nagivate=useNavigate()
  const handleGoDone=()=>
  {
    nagivate("/done")
  }
  return (
    <Box>
      <Home />
      <Content>
        <NavbarSign />
        <StepperTab activeStep={1}/>
        <Box
          sx={{
            // display: "flex",
            border: `1px solid #D9D9D9`,
            margin: "0px 150px 0px 200px",
            height: "auto",
            position: "relative",
          }}
        >
          <StyledGridRightTitle sx={{ color: "black", marginBottom: "50px" }}>
            Contact Us
            <StyledGridRightLine />
          </StyledGridRightTitle>
          {intersted?.map((item: any) => {
            return (
              <>
                <Box
                  sx={{
                    paddingTop: "25px",
                    display: "flex",
                    margin: "auto",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    height="150px"
                    width="190px"
                  />

                  <Box>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledDescription>{item.description}</StyledDescription>
                    <Checkbox
                      {...label}
                      name="intersets"
                      value={item.title}
                      onChange={handleChange}
                    />
                    Yes,
                  </Box>
                </Box>
                <StyledLine sx={{ width: "650px" }} />
              </>
            );
          })}
          <StyledButton
            endIcon={<ArrowForwardIcon />}
            sx={{ color: "white", transform: "translateX(300%)" }}
            onClick={handleGoDone}
          >
            Continue
          </StyledButton>
        </Box>
        <FooterSign />
      </Content>
    </Box>
  );
};

export default Interested;
