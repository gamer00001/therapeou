import React from "react";
import { Grid, Typography } from "@mui/material";
import CButton from "../CButton";

import TherapistImg from "../../assets/doctor-img.png";

import styles from "./styles.module.scss";
import DoctorSpeciality from "../DoctorSpeciality";

const list = [
  "Psychotherapy",
  "Behavior therapy",
  "Cognitive behavioral therapy",
];

const LeftSection = () => {
  return (
    <div>
      <img src={TherapistImg} alt="therapist-profile" />
      <Typography className={styles.doctorName} component="div">
        Dr Jassica
      </Typography>
      <Typography className={styles.doctorDescription} component="div">
        Physiotherapy is a healthcare profession focused on helping individuals
        improve their physical function, mobility, and quality of life.
      </Typography>
    </div>
  );
};

const RightSection = ({ handleBookAppointment }) => {
  return (
    <div>
      <Typography className={styles.profileTitle} component="h3">
        PROFILE
      </Typography>

      <Typography className={styles.doctorName} component="h3">
        Dr. Jassica
      </Typography>

      <Typography className={styles.speciality} component="h3">
        Physiotherapist
      </Typography>

      <Typography className={styles.speciality} component="h3">
        Appolo Hospital, New York, USA
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        Specialty
      </Typography>

      <Typography className={styles.specialityList} component="div">
        {list.map((item) => (
          <DoctorSpeciality title={item} />
        ))}
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        EXPERIENCE
      </Typography>

      <Typography className={styles.speciality} component="h3">
        6 years +
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        CONTACT
      </Typography>

      <Typography className={styles.speciality} component="h3">
        +949 000 000 000
      </Typography>

      <Typography className={styles.profileTitle} component="h3">
        ADDRESS
      </Typography>

      <Typography className={styles.speciality} component="h3">
        719 Woodland Terrace, Sacramento California
      </Typography>

      <Typography className={styles.btnList} component="div">
        <CButton
          width="50%"
          type="appointment"
          title="Book An Appointment"
          onClick={handleBookAppointment}
        />
        <CButton title="Chat Now" type="chat" width="50%" />
      </Typography>
    </div>
  );
};

const TherapistProfile = ({ handleBookAppointment }) => {
  return (
    <Grid container>
      <Grid item xs={6} className={styles.leftSectionContainer}>
        <LeftSection />
      </Grid>
      <Grid item xs={6} className={styles.rightSectionContainer}>
        <RightSection handleBookAppointment={handleBookAppointment} />
      </Grid>
    </Grid>
  );
};

export default TherapistProfile;
