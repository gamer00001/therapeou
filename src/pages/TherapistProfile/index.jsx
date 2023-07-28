import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Divider, Grid, Typography } from "@mui/material";
import AdminNavbar from "../../components/AdminNavbar";
import DoctorInfo from "../../components/DoctorInfo";
import { AppointmentCalenderSection } from "../Appointments";

import styles from "./styles.module.scss";

const TherapistProfile = () => {
  return (
    <AdminLayoutView>
      <Grid container>
        <Grid item className="w-100">
          <AdminNavbar />
        </Grid>
      </Grid>
      <Grid container className={styles.mainContainer}>
        <Grid item xs={8}>
          <DoctorInfo title="Specialization" subtitle="Sports Therapist" />

          <TherapistInfo />
        </Grid>

        <Grid item xs={4}>
          <AppointmentCalenderSection />
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default TherapistProfile;

const TherapistInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <Grid container>
        <Grid item sm={6}>
          <Typography className={styles.mainTitle} component="h3">
            General Info
          </Typography>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Email" subtitle="daniyal@gmail.com" />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="Gender" subtitle="Female" />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Phone No" subtitle="123-432-455" />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="Post Code" subtitle="45" />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Country" subtitle="USA" />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="City" subtitle="Austin" />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow title="Address" subtitle="45 New Avenue, New York" />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Specialization" subtitle="XYZ" />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="Fee" subtitle="250 $" />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow title="Experience" subtitle="4 Years" />
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        <Grid item sm={6} className={styles.verticalLine}>
          <Typography className={styles.mainTitle} component="h3">
            Education
          </Typography>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow
                title="Education"
                subtitle="BS Therapy Certificate.PDF"
              />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow title="Insurance" subtitle="Insurance Certificate.PDF" />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow title="DBS Check" subtitle="DBS Check Certificate.PDF" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const InfoRow = ({ title, subtitle }) => {
  return (
    <div>
      <div className={styles.fieldTitle}>{title}</div>
      <div className={styles.fieldSubtitle}>{subtitle}</div>
    </div>
  );
};
