import React, { useEffect, useState } from "react";
import { AppointmentCalenderSection } from "../Appointments";
import { Grid } from "@mui/material";
import AdminNavbar from "../../components/AdminNavbar";
import AppointmentLeftSection from "../Appointments/appointmentLeftSection";
import AdminLayoutView from "../../components/layout/AdminView";

import styles from "./styles.module.scss";
import AppointmentDetailsSection from "../Appointments/appointmentDetailsSection";
import { getUserInfoFromStorage } from "../../utility/common-helper";
// import { fetchPatientAppointmentsApi } from "../../api/patient-api";
import { parseAppointmentListing } from "../../data-parsers/patient-parser";
import { fetchTherapistAppointmentsApi } from "../../api/therapist-api";
import Loader from "../../components/Loader";

const TherapistHome = () => {
  const [state, setState] = useState({
    viewAllCheck: false,
    isLoading: false,
    listing: [],
  });

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const fetchAppointmentListing = async () => {
    handleLoader();

    const userInfo = getUserInfoFromStorage();

    const resp = await fetchTherapistAppointmentsApi(userInfo.id);

    if (resp.status === 200) {
      const parseData = parseAppointmentListing(resp.data);

      handleLoader();

      setState((prev) => ({
        ...prev,
        listing: parseData,
      }));
    }
  };

  useEffect(() => {
    fetchAppointmentListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
                fromTherapist={true}
                img={"/therapist-home.png"}
                listing={state.listing}
                viewAllCheck={state.viewAllCheck}
                setViewAllCheck={() =>
                  setState((prev) => ({
                    ...prev,
                    viewAllCheck: !prev?.viewAllCheck,
                  }))
                }
              />
            ) : (
              <AppointmentDetailsSection listing={state.listing} />
            )}
          </Grid>

          <Grid item xs={4}>
            <AppointmentCalenderSection />
          </Grid>
        </Grid>
        {/* <AppointmentsPage img="/therapist-home.png" /> */}
      </AdminLayoutView>

      {state.isLoading && <Loader />}
    </>
  );
};

export default TherapistHome;
