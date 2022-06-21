import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from "@mui/material/styles";


const steps = [
  'Create Accounte',
  'Newletters',
  'Done',
];



export default function StepperTab(props: any) {
  
  return (
    <Box sx={{ width: '50%',margin:"auto",marginTop:"50px",marginBottom:"50px",fontFamily:"Oswald" }}>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
