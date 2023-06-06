import React, { useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import AppointmentInfo from "../../components/AppointmentInfo";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import BlogRead from "../../components/BlogRead";
import DoctorInfo from "../../components/DoctorInfo";
import {
  AppointmentColors,
  AppointmentListMock,
  AppointmentsOrderInfo,
} from "../../constants/Appointments";
import PatientAppointemntInfo from "../../components/PatientAppointmentInfo";
import AppointmentOrderBlock from "../../components/AppointmentOrderBlock";

import styles from "./styles.module.scss";
import "./tabs.scss";

const AppointmentLeftSection = ({ viewAllCheck, setViewAllCheck }) => {
  return (
    <>
      <div style={{ paddingTop: "50px" }}></div>
      <DoctorInfo />

      <Typography
        component="div"
        style={{ marginTop: "20px", marginRight: "20px" }}
        className={styles.appointmentListContainer}
      >
        <Typography component="h3" className={styles.appointmentListTitle}>
          Appointment List
          <span
            className={styles.viewAllList}
            onClick={() => setViewAllCheck(!viewAllCheck)}
          >
            View All
          </span>
          <div>
            {AppointmentListMock.map((item, index) => {
              return (
                <div>
                  <PatientAppointemntInfo
                    {...item}
                    {...AppointmentColors[index]}
                  />
                </div>
              );
            })}
          </div>
        </Typography>
      </Typography>
    </>
  );
};

const AppointmentCalenderSection = () => {
  return (
    <>
      <AppointmentInfo />
      <Typography
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
        component="div"
      >
        <BlogRead />
      </Typography>
    </>
  );
};

const AppointmentDetailsSection = () => {
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
        AppointmentsOrderInfo.map((item) => {
          return (
            <div style={{ padding: "35px 70px" }}>
              <AppointmentOrderBlock {...item} />
            </div>
          );
        })}

      {value === "2" &&
        AppointmentsOrderInfo.map((item) => {
          return (
            <div style={{ padding: "35px 70px" }}>
              <AppointmentOrderBlock tabId="2" {...item} />
            </div>
          );
        })}
    </div>
  );
};

const AppointmentsPage = () => {
  const [viewAllCheck, setViewAllCheck] = useState(false);

  return (
    <AdminLayoutView>
      <Grid container className={styles.mainContainer}>
        <Grid item xs={8}>
          {!viewAllCheck ? (
            <AppointmentLeftSection
              viewAllCheck={viewAllCheck}
              setViewAllCheck={setViewAllCheck}
            />
          ) : (
            <AppointmentDetailsSection />
          )}
        </Grid>

        <Grid item xs={4}>
          <AppointmentCalenderSection />
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default AppointmentsPage;
