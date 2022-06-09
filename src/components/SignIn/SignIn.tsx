import { BootstrapInput } from "../../styled/Input";
import { FormControl, Box } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log(isSubmitting);

  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);
    setState({ ...state, [name]: value });
  };

  const validate = (values: any) => {
    let errors = { email: "", password: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Enter please Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Enter please password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    
    return errors;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(isSubmitting);
    setFormErrors(validate(state))
    if(formErrors)
    {
      console.log();
      
    }
    console.log(isSubmitting);
 
  };
 
  useEffect(() => {
    if (isSubmitting) {
      console.log("done");
    }
  }, [isSubmitting]);

  return (
    <form onSubmit={handleSubmit}>
      <BootstrapInput
        placeholder="Email"
        type="text"
        value={email}
        onChange={handLeInputChange}
        name="email"
      />

      {formErrors.email && <Box sx={{ color: "red" }}>{formErrors.email}</Box>}
      <BootstrapInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={handLeInputChange}
        sx={{ marginTop: "20px" }}
        name="password"
      />
      {formErrors.password && (
        <Box sx={{ color: "red" }}>{formErrors.password}</Box>
      )}
      <StyledButton variant="contained" type="submit">
        Sign in
      </StyledButton>
    </form>
  );
}
