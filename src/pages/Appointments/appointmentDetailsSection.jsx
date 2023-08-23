import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import AppointmentOrderBlock from "../../components/AppointmentOrderBlock";
import styles from "./styles.module.scss";
import "./tabs.scss";

const AppointmentDetailsSection = ({
  listing,
  fromPatient = false,
  handleModal,
  cancelAppointment,
  handleAgainApppintment,
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${styles.listingContainer}`}>
      <Typography component="h3" className={styles.appointmentListTitle}>
        My Appointments
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className={styles.tabsContainer}
      >
        <Tab label="Upcoming" value="1" className={styles.tabsView} />
        <Tab label="Past" value="2" className={styles.tabsView} />
      </Tabs>

      {value === "1" &&
        listing
          .filter((item) => item.status === "pending")
          .map((item) => {
            return (
              <div style={{ padding: "35px 70px" }}>
                <AppointmentOrderBlock
                  {...item}
                  tabId="1"
                  fromPatient={fromPatient}
                  profileLogo={item.logo}
                  cancelAppointment={cancelAppointment}
                />
              </div>
            );
          })}

      {value === "2" &&
        listing
          .filter((item) =>
            ["completed", "cancelled"].includes(item.appointmentStatus)
          )
          .map((item) => {
            return (
              <div style={{ padding: "35px 70px" }}>
                <AppointmentOrderBlock
                  {...item}
                  tabId="2"
                  profileLogo={item.logo}
                  fromPatient={fromPatient}
                  handleModal={handleModal}
                  cancelAppointment={cancelAppointment}
                  handleAgainApppintment={() => handleAgainApppintment(item)}
                />
              </div>
            );
          })}
    </div>
  );
};

export default AppointmentDetailsSection;
