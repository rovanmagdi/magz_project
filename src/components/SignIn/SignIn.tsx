import { Box } from "@mui/material";
import { BootstrapInput } from "../../styled/Input";
import { FormControl, Button } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import { useState } from "react";

export default function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [error, setError] = useState("");

  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log(value);
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    console.log("done");
  };
  return (
    <Box>
      <BootstrapInput
        placeholder="Email"
        type="text"
        value={email}
        onChange={handLeInputChange}
        name="email"
      />
      <BootstrapInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={handLeInputChange}
        sx={{ marginTop: "20px" }}
        name="password"
      />
      <StyledButton variant="contained" type="submit" onClick={handleSubmit}>
        Sign in
      </StyledButton>
    </Box>
  );
}
