import { Typography } from "@mui/material";
import React from "react";
import PatientAppointemntInfo from "../../components/PatientAppointmentInfo";
import DoctorInfo from "../../components/DoctorInfo";
import { AppointmentColors } from "../../constants/Appointments";

import styles from "./styles.module.scss";
import { isEmpty } from "lodash";

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
            {isEmpty(listing.filter((item) => item.status === "pending")) ? (
              <div style={{ fontSize: "16px" }}>No Appointments Found.</div>
            ) : (
              listing
                .filter((item) => item.status === "pending")
                .map((item, index) => {
                  return (
                    <div>
                      <PatientAppointemntInfo
                        {...item}
                        {...AppointmentColors[index]}
                      />
                    </div>
                  );
                })
            )}
          </div>
        </Typography>
      </Typography>
    </>
  );
};

export default AppointmentLeftSection;
