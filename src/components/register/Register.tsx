import { Box } from "@mui/material";
import React from "react";
import { FormControl, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BootstrapInput } from "../../styled/Input";
import { StyledButton } from "../../styled/Button";

export default function Register() {
  return (
    <Box>
      <FormControl variant="standard">
        <BootstrapInput
          placeholder="First Name"
          id="bootstrap-input"
          type="text"
        />
        <BootstrapInput
          placeholder="Last Name"
          id="bootstrap-input"
          type="password"
          sx={{ marginTop: "20px" }}
        />
        <BootstrapInput
          placeholder="Password"
          id="bootstrap-input"
          type="password"
          sx={{ marginTop: "20px" }}
        />
        <BootstrapInput
          placeholder="Confirm Password"
          id="bootstrap-input"
          type="password"
          sx={{ marginTop: "20px" }}
        />
         <StyledButton >Sign in</StyledButton>
      </FormControl>
    </Box>
  );
}
