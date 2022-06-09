import { BootstrapInput } from "../../styled/Input";
import { FormControl, Box, Alert } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import { useEffect, useState } from "react";
import { LoginInterFace } from "../../types/login";
import Joi from "joi";
import { StyledError } from "../../styled/Error";
import { RegisterInterFace } from "../../types/Register";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/registerAction";

export default function Register() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmePassword: "",
  });
  const { firstName, lastName, email, password, confirmePassword } = state;
  const [errorList, setErrorList] = useState([]);
  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);
    setState({ ...state, [name]: value });
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
  const { status } = useSelector((any: any) => any);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorList([]);
    let validationLoginFormResult: any = validateLoginForm(state);
    if (validationLoginFormResult.error) {
      setErrorList(validationLoginFormResult.error.details);
    } else {
      // dispatch(loginAdmin(login));
      console.log("done");
      dispatch(
        registerUser(
          state.lastName,
          state.firstName,
          state.email,
          state.password
        )
      );
      setErrorList([]);
    }
  };

  useEffect(() => {
    console.log(status.errorStatus);
  }, [status]);
  return (
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
              return <StyledError key={index}>First Name Invalid </StyledError>;
            }
          })
        : ""}

      <BootstrapInput
        placeholder="Last Name"
        type="text"
        value={lastName}
        sx={{ marginTop: "20px" }}
        onChange={handLeInputChange}
        name="lastName"
      />
      {errorList
        ? errorList.map((error: any, index: any) => {
            if (error.path[0] === "lastName") {
              return <StyledError key={index}>Last Name Invalid </StyledError>;
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
      <StyledError>{status.errorStatus}</StyledError>
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
      <BootstrapInput
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
        : ""}
      <StyledButton variant="contained" type="submit">
        Sign in
      </StyledButton>
    </form>
  );
}
