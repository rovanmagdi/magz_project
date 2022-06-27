import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box, Checkbox, Grid, Stack
} from "@mui/material";
// import { Box } from "@mui/system";
import { StyledButton } from "../../styled/Button";
import TextField from "@mui/material/TextField";
import { useDispatch ,useSelector} from "react-redux";
import { setFalseProfileEditFlag } from "../../redux/actions/flagsAction";
import { UserInfo } from "../../types/profile";
import { useState } from "react";
import Joi from "joi";
import { StyledError } from "../../styled/Error";
import { updateUser } from "../../redux/actions/userActions";
import { InterstedCatergory } from "../../redux/actions/interestedAction";
import { StyledLine } from "../../styled/Footer";
import { StyledDescription, StyledTitle } from "../../styled/CategoryIntersted";


export default function ProfileForm() {
  const userInfoObj: UserInfo = JSON.parse(
    `${localStorage.getItem("RegisterInfo")}`
  );

  // const firstName = `${userInfoObj.firstName}`;
  // const lastName = `${userInfoObj.lastName}`;
  // const email = `${userInfoObj.email}`;
  const{firstName,lastName,email,imageUrl}=userInfoObj;
  const userToken = `${userInfoObj.token}`;
  const oldIntersted= userInfoObj.intersted;

    

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
        .regex(/^[a-zA-Z]*$/),
      lastName: Joi.string()
        .alphanum()
        .min(3)
        .required()
        .regex(/^[a-zA-Z]*$/),
       
      email: Joi.string().regex(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
    });

    return schema.validate({ ...state }, { abortEarly: false });
  };

  const handleSaveClick = () => {
    let errors: any = [];

    validations(state).error?.details.forEach((element) => {
      errors.push(element.path[0]);
    });
    // console.log(validations(state).error?.details);
    setErrorState(errors);

    const isValidData = !validations(state).error;
    if (isValidData) {
      dispatch(updateUser(state));
      dispatch(updateUser({ intersted: userIntests }));

      dispatch(setFalseProfileEditFlag());
    }
  };

  const handleCancelClick = () => {
    dispatch(setFalseProfileEditFlag());
  };

  const intersted = useSelector((state: any) => state.interseted);
  // const [oldInterests,setOldInterests]=useState<any>(userIntersted?userIntersted:[]);
  const [userIntests, setUserIntests] = useState<any>(oldIntersted?oldIntersted:[]);

  const handleIntersetedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // e.target.checked=true;
    const { value, checked } = e.target;

    // console.log(`${value} is ${checked}`);

    if (checked) {
      setUserIntests((old: any) => [...old, value]);
    } else {

      const newState = userIntests?.filter((el:any) => {
        return el !== value;
      });
      // setOldInterests(()=>[...newState]);
      setUserIntests(() => [...newState]);
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Table>
          <TableBody>
            {!imageUrl?(<><TableRow>
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
                    First name must be more than 3 letters and only letters
                    
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
                    Last name must be more than 3 letters and only letters
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
            </TableRow></>):('')}
            
            
            <TableRow>
              <TableCell>Interested</TableCell>
              <TableCell>
              {intersted?.map((item: any) => {
            return (
              <Stack key={item._id}>
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
                      // {...label} 
                      // defaultChecked
                      name="intersets"
                      value={item.title}
                      onChange={handleIntersetedChange}
                      checked={userIntests?.find((el:any)=>el===item.title)}
                    />
                    Yes,
                  </Box>
                </Box>
                <StyledLine sx={{ width: "650px" }} />
              </Stack>
            );
          })}
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
