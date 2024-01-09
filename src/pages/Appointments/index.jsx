import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import AppointmentInfo from "../../components/AppointmentInfo";
import { Grid, Modal, Typography } from "@mui/material";
import BlogRead from "../../components/BlogRead";

import styles from "./styles.module.scss";
import "./modal.scss";
import "./tabs.scss";
import AdminNavbar from "../../components/AdminNavbar";
import {
  addReviewToAppointmentApi,
  fetchPatientAppointmentsApi,
} from "../../api/patient-api";
import { getUserInfoFromStorage } from "../../utility/common-helper";
import {
  parseAppointmentListing,
  parseReviewData,
} from "../../data-parsers/patient-parser";
import AppointmentDetailsSection from "./appointmentDetailsSection";
import AppointmentLeftSection from "./appointmentLeftSection";
import Loader from "../../components/Loader";
import { updateAppointmentApi } from "../../api/therapist-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import RateAppointment from "../../components/RateAppointment";

export const AppointmentCalenderSection = () => {
  return (
    <>
      <AppointmentInfo />
      <Typography
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
        component="div"
      >
        <BlogRead />
      </Typography>
    </>
  );
};

const AppointmentsPage = ({ img }) => {
  // const [viewAllCheck, setViewAllCheck] = useState(false);
  const [state, setState] = useState({
    viewAllCheck: false,
    isLoading: true,
    listing: [],
    ratingModalIsOpen: false,
  });
  const navigate = useNavigate();

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleModal = (appointmentCompleteInfo) => {
    setState((prev) => ({
      ...prev,
      selectedAppointment: appointmentCompleteInfo,
      ratingModalIsOpen: !prev.ratingModalIsOpen,
    }));
  };

  const fetchAppointmentListing = async () => {
    const userInfo = getUserInfoFromStorage();

    const resp = await fetchPatientAppointmentsApi(userInfo.id);

    const parseData = parseAppointmentListing(resp.data);

    setState((prev) => ({
      ...prev,
      listing: parseData,
      isLoading: false,
    }));
  };

  const handleAgainApppintment = (data) => {
    navigate("/admin/therapist-profile", {
      state: {
        therapistId: data.therapistId,
      },
    });
  };

  const cancelAppointment = async (appointId, appointmentInfo) => {
    const updatedInfo = {
      ...appointmentInfo,
      appointmentStatus: "cancelled",
    };
    handleLoader();

    const resp = await updateAppointmentApi(appointId, updatedInfo);

    if (resp.status === 200) {
      toast.success("Appointment Cancelled Successfully.");

      fetchAppointmentListing();
    } else {
      toast.error("Some Error Occured. Please try again later.");
    }

    handleLoader();
  };

  const handleAppointmentRating = (data) => {
    const { selectedAppointment } = state;

    if (data.review) {
      const parseData = parseReviewData(
        data,
        selectedAppointment.therapistId,
        selectedAppointment.id,
        selectedAppointment.patientId
      );
      addReviewToAppointmentApi(parseData)
        .then((resp) => {
          toast.success("Review Added Successfully.");
          handleModal();
          fetchAppointmentListing();
        })
        .catch((error) => {
          console.log({ error });
          toast.success("Something went wrong.");
        });
    }
  };

  useEffect(() => {
    fetchAppointmentListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state.isLoading && <Loader />}

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
                img={img}
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
              <AppointmentDetailsSection
                fromPatient={true}
                listing={state.listing}
                handleModal={handleModal}
                cancelAppointment={cancelAppointment}
                handleAgainApppintment={handleAgainApppintment}
              />
            )}
          </Grid>

          <Grid item xs={4}>
            <AppointmentCalenderSection />
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={state.ratingModalIsOpen}
          onClose={handleModal}
          closeAfterTransition
          className={styles.modalContainer}
          // slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <RateAppointment
            isOpen={state.ratingModalIsOpen}
            handleAppointmentRating={handleAppointmentRating}
          />
        </Modal>
      </AdminLayoutView>
    </>
  );
};

export default AppointmentsPage;
