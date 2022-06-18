import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { StyledButton } from "../../styled/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setFalseProfileEditFlag } from "../../redux/actions/flagsAction";
import { UserInfo } from "../../types/profile";
import { useState } from "react";
import Joi from "joi";
import { StyledError } from "../../styled/Error";
import { updateUser } from "../../redux/actions/userActions";

export default function ProfileForm() {
  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );

  const firstName = `${userInfoObj.firstName}`;
  const lastName = `${userInfoObj.lastName}`;
  const email = `${userInfoObj.email}`;
  const userToken = `${userInfoObj.token}`;

  const [state, setState] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  const [errorState, setErrorState] = useState([]);

  const dispatch: any = useDispatch();

  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
 

  const validations = (state: any) => {
    const schema = Joi.object({
      firstName: Joi.string()
        .alphanum()
        .min(3)
        .required()
        .regex(/^[A-Z]+[a-zA-Z]*$/),
      lastName: Joi.string()
        .alphanum()
        .min(3)
        .required()
        .regex(/^[A-Z]+[a-zA-Z]*$/),
      email: Joi.string().regex(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
    });

    return schema.validate({ ...state }, { abortEarly: false });
  };

  const handleSaveClick = () => {
    let errors: any = [];

    validations(state).error?.details.forEach((element) => {
      errors.push(element.path[0]);
    });
    console.log(validations(state).error?.details);
    setErrorState(errors);

    const isValidData = !validations(state).error;
    if (isValidData) {
      dispatch(updateUser(state));

      dispatch(setFalseProfileEditFlag());
    }
  };

  const handleCancelClick = () => {
    dispatch(setFalseProfileEditFlag());
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>
                <TextField
                  id="outlined-helperText"
                  label="Required *"
                  defaultValue={firstName}
                  fullWidth
                  name="firstName"
                  onChange={handLeInputChange}
                />

                {errorState.find((el) => el === "firstName") ? (
                  <StyledError>
                    First name must be more than 3 letters statrted with capital
                    letter
                  </StyledError>
                ) : (
                  <StyledError></StyledError>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>
                <TextField
                  id="outlined-helperText"
                  label="Required *"
                  defaultValue={lastName}
                  fullWidth
                  name="lastName"
                  onChange={handLeInputChange}
                />

                {errorState.find((el) => el === "lastName") ? (
                  <StyledError>
                    Last name must be more than 3 letters statrted with capital
                    letter
                  </StyledError>
                ) : (
                  <StyledError></StyledError>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-mail</TableCell>
              <TableCell>
                <TextField
                  id="outlined-helperText"
                  label="Required *"
                  defaultValue={email}
                  fullWidth
                  name="email"
                  onChange={handLeInputChange}
                />

                {errorState.find((el) => el === "email") ? (
                  <StyledError>
                    E-mail must be like "example@domain.com"
                  </StyledError>
                ) : (
                  <StyledError></StyledError>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <StyledButton onClick={handleSaveClick}>
          <Typography color={"white"}>Save</Typography>
        </StyledButton>
        <StyledButton sx={{ marginLeft: "20px" }} onClick={handleCancelClick}>
          <Typography color={"white"}>Cancel</Typography>
        </StyledButton>
      </Box>
    </>
  );
}
