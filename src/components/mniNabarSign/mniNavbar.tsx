import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import Register from "../register/Register";
import SignIn from "../SignIn/SignIn";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MniNavbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ margin: "auto", marginTop: "60px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label=" Sign In" {...a11yProps(0)} sx={{textTransform:"none"}}/>
          <Tab label="Register" {...a11yProps(1)} sx={{textTransform:"none"}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SignIn/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register/>
      </TabPanel>
    </Box>
  );
};
export default MniNavbar;
