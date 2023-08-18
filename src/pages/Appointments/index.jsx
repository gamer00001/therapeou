import React, { useEffect, useState } from "react";
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
import AdminNavbar from "../../components/AdminNavbar";
import { fetchPatientAppointmentsApi } from "../../api/patient-api";
import { getUserInfoFromStorage } from "../../utility/common-helper";
import { parseAppointmentListing } from "../../data-parsers/patient-parser";

const AppointmentLeftSection = ({
  img,
  listing,
  viewAllCheck,
  setViewAllCheck,
}) => {
  return (
    <>
      <div style={{ paddingTop: "50px" }}></div>
      <DoctorInfo img={img} />

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
            {listing.map((item, index) => {
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

export const AppointmentCalenderSection = () => {
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

const AppointmentDetailsSection = ({ listing }) => {
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
        AppointmentsOrderInfo
          // .filter(
          //   (item) => item.appointmentStatus === "pending"
          // )
          .map((item) => {
            return (
              <div style={{ padding: "35px 70px" }}>
                <AppointmentOrderBlock profileLogo={item.logo} {...item} />
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

const AppointmentsPage = ({ img }) => {
  // const [viewAllCheck, setViewAllCheck] = useState(false);
  const [state, setState] = useState({
    viewAllCheck: false,
    listing: [],
  });

  const fetchAppointmentListing = async () => {
    const userInfo = getUserInfoFromStorage();
    const resp = await fetchPatientAppointmentsApi(userInfo.id);
    const parseData = parseAppointmentListing(resp.data);
    setState((prev) => ({
      ...prev,
      listing: parseData,
    }));
    console.log({ resp, parseData });
  };

  useEffect(() => {
    // fetchAppointmentListing();
  }, []);

  return (
    <AdminLayoutView>
      <Grid container>
        <Grid item className="w-100">
          <AdminNavbar />
        </Grid>
      </Grid>
      <Grid container className={styles.mainContainer}>
        <Grid item xs={8}>
          {!state.viewAllCheck ? (
            <AppointmentLeftSection
              img={img}
              listing={AppointmentListMock}
              viewAllCheck={state.viewAllCheck}
              setViewAllCheck={() =>
                setState((prev) => ({
                  ...prev,
                  viewAllCheck: !prev?.viewAllCheck,
                }))
              }
            />
          ) : (
            <AppointmentDetailsSection listing={AppointmentListMock} />
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
