import { BootstrapInput } from "../../styled/Input";
import { FormControl, Box, Alert } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import React, { useEffect, useState } from "react";
import { LoginInterFace } from "../../types/login";
import Joi from "joi";
import { StyledError } from "../../styled/Error";
import { RegisterInterFace } from "../../types/Register";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/registerAction";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../redux/actions/statusActions";
import GoogleLogin from "react-google-login";
import { RegisterUser } from "../../redux/actions/userData";

function Register() {
  const [state, setStateList] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // confirmePassword: "",
  });
  const { firstName, lastName, email, password } = state;
  const [errorList, setErrorList] = useState([]);
  const [errorRes, setErrorRes] = useState("");

  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);
    setStateList({ ...state, [name]: value });
  };

  function validateLoginForm(login: any) {
    const schema = Joi.object({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().required(),
      confirmePassword: Joi.any().equal(Joi.ref("password")),
    });

    return schema.validate(login, { abortEarly: false });
  }
  const dispatch: any = useDispatch();
  const { loading, hasError, errorStatus } = useSelector(
    (state: any) => state.status
  );

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorList([]);

    let validationLoginFormResult: any = validateLoginForm(state);

    if (validationLoginFormResult.error) {
      setErrorList(validationLoginFormResult.error.details);
    } else {
      dispatch(RegisterUser(state.firstName, state.lastName, state.email, state.password));
      setErrorList([]);
    }
  };
  const data = useSelector((state: any) => state?.userData);
  useEffect(() => {
    if (data) {
      navigate("/interested");
    }
  }, [data]);

  const [stateGoogle, setStateGoogle] = useState({
    dataProfile: "",
    interested:[]
    
    // confirmePassword: "",
  });
  const handleSuccess = (results: any) => {
    console.log(results);
    setStateGoogle(results.profileObj);

    localStorage.setItem("RegisterInfo", JSON.stringify(stateGoogle));

    dispatch(
      RegisterUser(
        results.profileObj.givenName,
        results.profileObj.familyName,
        results.profileObj.email,
        results.profileObj.googleId,
        results.profileObj.imageUrl,
        
      )
    );
    navigate("/");
    console.log(results);
  };
  const handleFailure = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <StyledError>{errorStatus}</StyledError>

      <form onSubmit={handleSubmit}>
        <BootstrapInput
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={handLeInputChange}
          name="firstName"
        />
        {errorList
          ? errorList.map((error: any, index: any) => {
              if (error.path[0] === "firstName") {
                return (
                  <StyledError key={index}>
                    First name must start with Capetal letter{" "}
                  </StyledError>
                );
              }
            })
          : ""}

        <BootstrapInput
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={handLeInputChange}
          sx={{ marginTop: "20px" }}
          name="lastName"
        />
        {errorList
          ? errorList.map((error: any, index: any) => {
              if (error.path[0] === "lastName") {
                return (
                  <StyledError key={index}>
                    Last Name must start with Capetal letter{" "}
                  </StyledError>
                );
              }
            })
          : ""}
        <BootstrapInput
          placeholder="Email"
          type="text"
          value={email}
          sx={{ marginTop: "20px" }}
          onChange={handLeInputChange}
          name="email"
        />
        {errorList
          ? errorList.map((error: any, index: any) => {
              if (error.path[0] === "email") {
                return <StyledError key={index}>email Invalid</StyledError>;
              }
            })
          : ""}
        <BootstrapInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={handLeInputChange}
          sx={{ marginTop: "20px" }}
          name="password"
        />

        {errorList
          ? errorList.map((error: any, index: any) => {
              // console.log(error);

              if (error.path[0] === "password") {
                return <StyledError key={index}>Password Invalid</StyledError>;
              }
            })
          : ""}
        {/* <BootstrapInput
          placeholder="Confirm Password"
          type="password"
          value={confirmePassword}
          onChange={handLeInputChange}
          sx={{ marginTop: "20px" }}
          name="confirmePassword"
        />

        {errorList
          ? errorList.map((error: any, index: any) => {
              // console.log(error);
              if (error.path[0] === "confirmePassword") {
                return (
                  <StyledError key={index}>not match with Password</StyledError>
                );
              }
            })
          : ""} */}
        <StyledButton variant="contained" type="submit">
          Sign in
        </StyledButton>
      </form>
      <Box sx={{ marginTop: "10px" }}>
        <GoogleLogin
          clientId="776938136564-chuk0avh81c6be0b5659j1v864hlakc1.apps.googleusercontent.com"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </Box>
      {/* 776938136564-chuk0avh81c6be0b5659j1v864hlakc1.apps.googleusercontent.com */}
    </>
  );
}

export default React.memo(Register);
