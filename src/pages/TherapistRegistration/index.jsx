import React, { useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import RegistrationProcess from "./registrationProcess";

import PersonalInformation from "./personalInformation";
import ProfessionalInformation from "./professionalInformation";
import Subscriptions from "./subscriptions";

import "./tabs.scss";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

const TherapistRegistration = () => {
  const location = useLocation();
  // const [value, setValue] = useState(0);

  const [state, setState] = useState({
    tabValue: 0,
    personalInitialValues: {
      title: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      postalCode: "",
      gender: "",
      address: "",
    },
    professionalInitialValues: {
      specialization: "",
      experience: "",
      fee: "",
      education: "",
      insurance: "",
      dbsCheck: "",
    },
  });

  const handleTabChange = (event, newValue) => {
    console.log({ newValue });
    setState((prev) => ({
      ...prev,
      tabValue: newValue,
    }));
  };

  const handlePersonalInformationSubmit = (data) => {
    console.log({ data });
    setState((prev) => ({
      ...prev,
      tabValue: 1,
      personalInitialValues: { ...data },
    }));
  };

  const handleProfessionalInformationSubmit = (data) => {
    console.log({ data });
    setState((prev) => ({
      ...prev,
      tabValue: 1,
      professionalInitialValues: { ...data },
    }));
  };

  return (
    <div className={styles.registrationConatiner}>
      <Grid container minHeight={"100vh"}>
        <Grid item sm={3} className={styles.sideSection} gap={2}>
          <SideSection
            tabId={state.tabValue}
            handleTabChange={handleTabChange}
          />
        </Grid>

        <Grid item sm={9}>
          <div
            index={0}
            role="tabpanel"
            value={state.tabValue}
            hidden={state.tabValue !== 0}
            id={`vertical-tabpanel-${0}`}
            aria-labelledby={`vertical-tab-${0}`}
          >
            <PersonalInformation
              handleSubmit={handlePersonalInformationSubmit}
              handleTabChange={handleTabChange}
              initialValues={state.personalInitialValues}
            />
          </div>

          <div
            role="tabpanel"
            hidden={state.tabValue !== 1}
            id={`vertical-tabpanel-${1}`}
            aria-labelledby={`vertical-tab-${1}`}
            value={state.tabValue}
            index={1}
          >
            <ProfessionalInformation
              handleTabChange={handleTabChange}
              handleSubmit={handleProfessionalInformationSubmit}
              initialValues={state.professionalInitialValues}
            />
          </div>

          <div
            role="tabpanel"
            hidden={state.tabValue !== 2}
            id={`vertical-tabpanel-${2}`}
            aria-labelledby={`vertical-tab-${2}`}
            value={state.tabValue}
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
        // onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label={<RegistrationProcess title="Personal Information" />} />
        <Tab label={<RegistrationProcess title="Professional Information" />} />
        <Tab label={<RegistrationProcess title="Subscription" />} />
      </Tabs>
    </>
  );
};
