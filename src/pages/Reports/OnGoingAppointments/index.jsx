import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminLayoutView from "../../../components/layout/AdminView";
import AppointmentCard from "../../../components/AppointmentCard";
import { Grid, Typography } from "@mui/material";
import styles from "../styles.module.scss";
import { getUserInfoFromStorage } from "../../../utility/common-helper";
import { fetchTherapistAppointmentsApi } from "../../../api/therapist-api";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import { parseTherapistAppointmentListing } from "../../../data-parsers/therapist-parser";
import { isEmpty } from "lodash";

const INITIAL_STATE = {
  isLoading: false,
  appointmentListing: [],
};

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
  const [state, setState] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const fetchTherapistAppointments = async () => {
    handleLoader();

    const userInfo = getUserInfoFromStorage();

    const resp = await fetchTherapistAppointmentsApi(userInfo.id);

    handleLoader();
    if (resp.status === 200) {
      const parseData = parseTherapistAppointmentListing(resp.data);

      setState((prev) => ({
        ...prev,
        appointmentListing: parseData,
      }));
    } else {
      return toast.error("Some Error Occured while fetching appointments.");
    }
  };

  useEffect(() => {
    fetchTherapistAppointments();
  }, []);

  return (
    <>
      {state.isLoading && <Loader />}

      <AdminLayoutView>
        <Typography className={styles.mainHeading} component="h2">
          {location.state.id === "onGoingAppointments" ? "On Going" : "Past"}{" "}
          Appointments
        </Typography>

        <Grid container gap={10} style={{ padding: "40px" }}>
          {!isEmpty(state.appointmentListing) &&
            state?.appointmentListing
              ?.filter((item) =>
                (location.state.id === "onGoingAppointments"
                  ? ["pending"]
                  : ["completed", "cancelled"]
                ).includes(item.status)
              )
              .map((item) => (
                <Grid item>
                  <AppointmentCard
                    {...item}
                    handleAppointmentDetailAction={() =>
                      navigate("/admin/reports/appointments-detail", {
                        state: {
                          appointmentInfo: item,
                          parent: location?.state?.id,
                        },
                      })
                    }
                  />
                </Grid>
              ))}
        </Grid>
      </AdminLayoutView>
    </>
  );
};

export default OnGoingAppointments;
