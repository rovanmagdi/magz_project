import { BootstrapInput } from "../../styled/Input";
import { FormControl, Box, Alert, Typography } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import { useCallback, useEffect, useState } from "react";
import { LoginInterFace } from "../../types/login";
import Joi from "joi";
import { StyledError } from "../../styled/Error";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/userData";

export default function SignIn() {
  const [check, setCheck] = useState(true);
  const [state, setStateList] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const { loading, hasError, errorStatus } = useSelector(
    (state: any) => state.status
  );
  const [errorList, setErrorList] = useState([]);
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);
    setStateList({ ...state, [name]: value });
  };

  function validateLoginForm(login: LoginInterFace) {
    const schema = Joi.object({
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    });

    return schema.validate(login, { abortEarly: false });
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorList([]);

    let validationLoginFormResult: any = validateLoginForm(state);
    if (validationLoginFormResult.error) {
      setErrorList(validationLoginFormResult.error.details);
    } else {
      setErrorList([]);

      dispatch(loginUser(state));
      // console.log(errorStatus);
    }
  };
  const data = useSelector((state: any) => state.userData);
  // console.log(data);
  useEffect(() => {
    if (data) {
      // console.log("here");
      navigate("/");
    }
  }, [data]);

  const handleForgetPassword=()=>
  {
    navigate('/forget_password')
    // console.log("yes");
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <BootstrapInput
        placeholder="Email"
        type="text"
        value={email}
        onChange={handLeInputChange}
        name="email"
      />
      {errorList
        ? errorList.map((error: any, index: any) => {
            if (error.path[0] === "email") {
              return <StyledError key={index}>Email Invalid</StyledError>;
            }
          })
        : ""}
      <StyledError>{errorStatus}</StyledError>
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
            if (error.path[0] === "password") {
              return <StyledError key={index}>Password Invalid</StyledError>;
            }
          })
        : ""}
      <StyledButton variant="contained" type="submit">
        Sign in
      </StyledButton>
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          color: "#4D7E96",
          float: "right",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={handleForgetPassword}
        
      >
        Forget Password ?
      </Typography>
    </form>
  );
}
