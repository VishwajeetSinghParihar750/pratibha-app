import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { stepsSliceActions } from "../../store/stepsSlice";

const steps = [
  {
    label: "Step 1",
  },
  {
    label: "Step 2",
  },
  {
    label: "Step 3",
  },
  {
    label: "Step 4",
  },
  {
    label: "Review & Confirm",
  },
];

export default function VerticalLinearStepper() {
  let dispatch = useDispatch();
  const activeStep = useSelector((state) => state.steps.activeStep);

  const handleReset = () => {
    dispatch(stepsSliceActions.setActiveStep(0));
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
