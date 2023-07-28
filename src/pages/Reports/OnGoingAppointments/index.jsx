import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLayoutView from "../../../components/layout/AdminView";
import AppointmentCard from "../../../components/AppointmentCard";
import { Grid, Typography } from "@mui/material";
import styles from "../styles.module.scss";

const List = [
  {
    patientName: "Franklin Sierra",
    purpose: "Chronic pain patient",
    rating: 4.4,
    id: "3333",
    date: "June-22-2022",
  },
  {
    patientName: "Franklin Sierra",
    purpose: "Chronic pain patient",
    rating: 4.4,
    id: "3333",
    date: "June-22-2022",
  },
  {
    patientName: "Franklin Sierra",
    purpose: "Chronic pain patient",
    rating: 4.4,
    id: "3333",
    date: "June-22-2022",
  },
  {
    patientName: "Franklin Sierra",
    purpose: "Chronic pain patient",
    rating: 4.4,
    id: "3333",
    date: "June-22-2022",
  },
];

const OnGoingAppointments = () => {
  const navigate = useNavigate();

  return (
    <AdminLayoutView>
      <Typography className={styles.mainHeading} component="h2">
        On Going Appointments
      </Typography>

      <Grid container gap={10} style={{ padding: "40px" }}>
        {List.map((item) => (
          <Grid item>
            <AppointmentCard
              {...item}
              handleAppointmentDetailAction={() =>
                navigate("/admin/reports/appointments-detail")
              }
            />
          </Grid>
        ))}
      </Grid>
    </AdminLayoutView>
  );
};

export default OnGoingAppointments;
