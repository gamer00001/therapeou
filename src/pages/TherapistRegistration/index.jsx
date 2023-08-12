import React from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import RegistrationProcess from "./registrationProcess";

import PersonalInformation from "./personalInformation";
import ProfessionalInformation from "./professionalInformation";
import Subscriptions from "./subscriptions";

import "./tabs.scss";
import styles from "./styles.module.scss";

const TherapistRegistration = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.registrationConatiner}>
      <Grid container minHeight={"100vh"}>
        <Grid item sm={3} className={styles.sideSection} gap={2}>
          <SideSection tabId={value} handleChange={handleChange} />
        </Grid>

        <Grid item sm={9}>
          <div
            role="tabpanel"
            hidden={value !== 0}
            id={`vertical-tabpanel-${0}`}
            aria-labelledby={`vertical-tab-${0}`}
            value={value}
            index={0}
          >
            <PersonalInformation />
          </div>

          <div
            role="tabpanel"
            hidden={value !== 1}
            id={`vertical-tabpanel-${1}`}
            aria-labelledby={`vertical-tab-${1}`}
            value={value}
            index={1}
          >
            <ProfessionalInformation />
          </div>

          <div
            role="tabpanel"
            hidden={value !== 2}
            id={`vertical-tabpanel-${2}`}
            aria-labelledby={`vertical-tab-${2}`}
            value={value}
            index={2}
          >
            <Subscriptions />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TherapistRegistration;

const SideSection = ({ tabId, handleChange }) => {
  return (
    <>
      <Tabs
        orientation="vertical"
        value={tabId}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label={<RegistrationProcess title="Personal Information" />} />
        <Tab label={<RegistrationProcess title="Professional Information" />} />
        <Tab label={<RegistrationProcess title="Subscription" />} />
      </Tabs>
    </>
  );
};
