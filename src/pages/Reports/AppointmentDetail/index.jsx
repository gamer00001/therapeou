import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import AdminLayoutView from "../../../components/layout/AdminView";
import styles from "../styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import PatientAppointmentGeneralInfo from "./PatientAppointmentGeneralInfo";
import { updateAppointmentApi } from "../../../api/therapist-api";
import { toast } from "react-toastify";

const AppointmentDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState(location.state);

  const handleSubmit = (option) => {
    let appointmentInfo = {
      ...state?.appointmentInfo?.appointmentCompleteInfo,
      appointmentStatus: option,
    };

    if (option) {
      updateAppointmentApi(state.appointmentInfo.appointmentId, appointmentInfo)
        .then((res) => {
          toast.success("Appointment Status updated successfully.");

          setTimeout(() => {
            navigate("/admin/reports");
          }, 500);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  };

  useEffect(() => {
    setState(location.state);
  }, [location.state]);

  return (
    <AdminLayoutView>
      <div>
        <Typography className={styles.mainHeading} component="h2">
          {state.parent === "pastAppointments" ? "Past" : "Ongoing"} Booking
          View Details
        </Typography>

        <Grid container className={styles.appointmentInfoContainer}>
          <Grid item sm={5}>
            <PatientAppointmentGeneralInfo
              parent={state.parent}
              handleSubmit={handleSubmit}
              appointmentInfo={state.appointmentInfo}
            />
          </Grid>

          <Grid item sm={7} position="relative">
            {/* <hr /> */}
            <div className={styles.verticalBar} />
            <div className={styles.title}>
              {state.parent === "pastAppointments"
                ? "Review:"
                : "General Description:"}
            </div>

            <div className={styles.reviewDetails}>
              {state.parent === "pastAppointments"
                ? `“I feel compelled to express my utmost gratitude for the
              exceptional care and guidance provided by my therapist. From the
              very first session, I knew I had found someone who truly
              understood the depths of my struggles and who possessed the
              knowledge and empathy to guide me towards healing.”`
                : state.appointmentInfo.purpose}
            </div>
          </Grid>
          <div>
            <img
              className={styles.appointmentIcon}
              src="/appointment-detail-page-icon.png"
              alt="icon"
            />
          </div>
        </Grid>
      </div>
    </AdminLayoutView>
  );
};

export default AppointmentDetail;
