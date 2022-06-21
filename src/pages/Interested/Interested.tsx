import { Box, Checkbox, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import FooterSign from "../../components/footerSign/FooterSign";
import NavbarSign from "../../components/navbarSign/NavbarSign";
import StepperTab from "../../components/stepper/Stepper";
import { styled } from "@mui/material/styles";
import { Content, Home, Info } from "../../styled/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { InterstedCatergory } from "../../redux/actions/interestedAction";
import { StyledButton } from "../../styled/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/actions/userActions";
import { UserInfo } from "../../types/profile";
import {
  StyledGridRightTitle,
  StyledGridRightLine,
} from "../../styled/interested";
import InterestedComponent from "../../components/interested/Interested";

const Interested = () => {
  const [userinfo, setUserInfo] = useState<string[]>([]);

  // console.log(userinfo);

  const intersted = useSelector((state: any) => state.interseted);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(InterstedCatergory());

    // console.log(intersted);
  }, []);
  const nagivate = useNavigate();
  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );
  const handleGoDone = () => {
    dispatch(updateUser({ intersted: userinfo }));
    nagivate("/done");
  };
  return (
    <Box>
      <Home />
      <Content>
        <NavbarSign />
        <StepperTab activeStep={1} />
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
              <InterestedComponent
                key={item._id}
                image={item.image}
                description={item.description}
                title={item.title}
                id={item._id}
              />
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
