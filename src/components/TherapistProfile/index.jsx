import React from "react";
import { Grid, Typography } from "@mui/material";
import CButton from "../CButton";

import TherapistImg from "../../assets/doctor-img.png";

import styles from "./styles.module.scss";
import DoctorSpeciality from "../DoctorSpeciality";
import { useNavigate } from "react-router-dom";

// const list = [
//   "Psychotherapy",
//   "Behavior therapy",
//   "Cognitive behavioral therapy",
// ];

const LeftSection = ({ therapistInfo }) => {
  return (
    <div>
      <img src={TherapistImg} alt="therapist-profile" />
      <Typography className={styles.doctorName} component="div">
        Dr {therapistInfo?.fullName || "N/A"}
      </Typography>
      <Typography className={styles.doctorDescription} component="div">
        {therapistInfo?.profileDescription || "N/A"}
      </Typography>
    </div>
  );
};

const RightSection = ({ therapistInfo, handleBookAppointment }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography className={styles.profileTitle} component="h3">
        PROFILE
      </Typography>

      <Typography className={styles.doctorName} component="h3">
        Dr. {therapistInfo?.fullName || "N/A"}
      </Typography>

      <Typography className={styles.speciality} component="h3">
        {therapistInfo?.profileTitle || "N/A"}
      </Typography>

      <Typography className={styles.speciality} component="h3">
        {therapistInfo?.city || "N/A"}, {therapistInfo?.country || "N/A"}
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        Specialty
      </Typography>

      <Typography className={styles.specialityList} component="div">
        {/* {list.map((item) => ( */}
        <DoctorSpeciality title={therapistInfo?.specialization || "N/A"} />
        {/* ))} */}
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        EXPERIENCE
      </Typography>

      <Typography className={styles.speciality} component="h3">
        {therapistInfo?.experience} years +
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        CONTACT
      </Typography>

      <Typography className={styles.speciality} component="h3">
        {therapistInfo?.phone || "N/A"}
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        ADDRESS
      </Typography>

      <Typography className={styles.speciality} component="h3">
        {therapistInfo?.address || "N/A"}
      </Typography>

      <Typography className={styles.btnList} component="div">
        <CButton
          width="50%"
          type="appointment"
          title="Book An Appointment"
          onClick={handleBookAppointment}
        />
        <CButton
          title="Chat Now"
          type="chat"
          width="50%"
          onClick={() => navigate("/admin/chat")}
        />
      </Typography>
    </div>
  );
};

const TherapistProfile = ({ therapistInfo, handleBookAppointment }) => {
  return (
    <Grid container>
      <Grid item xs={6} className={styles.leftSectionContainer}>
        <LeftSection therapistInfo={therapistInfo} />
      </Grid>
      <Grid item xs={6} className={styles.rightSectionContainer}>
        <RightSection
          therapistInfo={therapistInfo}
          handleBookAppointment={handleBookAppointment}
        />
      </Grid>
    </Grid>
  );
};

export default TherapistProfile;
