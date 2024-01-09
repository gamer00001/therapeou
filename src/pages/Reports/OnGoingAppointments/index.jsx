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
  isLoading: true,
  appointmentListing: [],
};

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
    const userInfo = getUserInfoFromStorage();

    const resp = await fetchTherapistAppointmentsApi(userInfo.id);

    if (resp.status === 200) {
      const parseData = parseTherapistAppointmentListing(resp.data);

      setState((prev) => ({
        ...prev,
        isLoading: false,
        appointmentListing: parseData,
      }));
    } else {
      handleLoader();
      return toast.error("Some Error Occured while fetching appointments.");
    }
  };

  useEffect(() => {
    fetchTherapistAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
