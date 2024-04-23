import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Divider, Grid, Typography } from "@mui/material";
import AdminNavbar from "../../components/AdminNavbar";
import DoctorInfo from "../../components/DoctorInfo";
import { AppointmentCalenderSection } from "../Appointments";

import styles from "./styles.module.scss";
import { getUserInfoFromStorage } from "../../utility/common-helper";

const TherapistProfile = () => {
  const userInfo = getUserInfoFromStorage();

  return (
    <AdminLayoutView>
      <Grid container>
        <Grid item className="w-100">
          <AdminNavbar />
        </Grid>
      </Grid>
      <Grid container className={styles.mainContainer}>
        <Grid item xs={8}>
          <DoctorInfo
            name={userInfo?.fullName}
            title="Specialization"
            subtitle={userInfo?.specialization || "N/A"}
          />

          <TherapistInfo userInfo={userInfo} />
        </Grid>

        <Grid item xs={4}>
          <AppointmentCalenderSection />
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default TherapistProfile;

const TherapistInfo = ({ userInfo }) => {
  return (
    <div className={styles.infoContainer}>
      <Grid container>
        <Grid item sm={6}>
          <Typography className={styles.mainTitle} component="h3">
            General Info
          </Typography>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Email" subtitle={userInfo.email} />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="Gender" subtitle={userInfo?.gender || "N/A"} />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Phone No" subtitle={userInfo?.phone || "N/A"} />
            </Grid>
            <Grid item sm={6}>
              <InfoRow
                title="Post Code"
                subtitle={userInfo?.postCode || "N/A"}
              />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow title="Country" subtitle={userInfo?.country || "N/A"} />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="City" subtitle={userInfo?.city || "N/A"} />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow title="Address" subtitle={userInfo?.address || "N/A"} />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item sm={6}>
              <InfoRow
                title="Specialization"
                subtitle={userInfo?.specialization || "N/A"}
              />
            </Grid>
            <Grid item sm={6}>
              <InfoRow title="Fee" subtitle={`${userInfo?.fee || 0} $`} />
            </Grid>
          </Grid>

          <Grid container className="pb-12">
            <Grid item>
              <InfoRow
                title="Experience"
                subtitle={`${userInfo?.experience || 0} Years`}
              />
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
