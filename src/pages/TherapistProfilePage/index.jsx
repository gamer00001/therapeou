import React, { useEffect, useState } from "react";
import TherapistProfile from "../../components/TherapistProfile";
import AdminLayoutView from "../../components/layout/AdminView";
import BookAppointment from "../../components/BookAppointment";
import { Modal } from "@mui/material";

import { fetchTherapistAppointmentSlots } from "../../api/therapist-api";
import {
  makeTuplesOfSlots,
  parseBookAppointmentData,
} from "../../data-parsers/therapist-parser";
import { AddPatientAppointmentApi } from "../../api/patient-api";

import styles from "./styles.module.scss";
import "./modal.scss";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { getUserInfoFromStorage } from "../../utility/common-helper";

const TherapistProfilePage = () => {
  const location = useLocation();

  const [state, setState] = useState({
    isOpen: false,
    isLoading: false,
    timeSlots: [],
    formValues: {
      name: "",
      email: "",
      date: "",
      slot: "",
      description: "",
    },
  });

  const handleClose = () => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleSubmit = async (data) => {
    const therapistId = location.state.therapistId;
    const userInfo = getUserInfoFromStorage();

    handleClose();

    handleLoader();

    const parseData = parseBookAppointmentData(data, therapistId, userInfo.id);

    const addAppointmentResp = await AddPatientAppointmentApi(parseData);

    if (addAppointmentResp.status === 201) {
      toast.success("Appointment Booked Successfully.");
    }
    handleLoader();
  };

  const fetchAppointmentSlots = async (day = "Monday") => {
    const therapistId = location.state.therapistId;
    const slotsResp = await fetchTherapistAppointmentSlots(therapistId, day);

    let parseSlots = makeTuplesOfSlots(slotsResp.data);

    setState((prev) => ({
      ...prev,
      timeSlots: parseSlots,
    }));

    console.log({ slotsResp });
  };

  useEffect(() => {
    fetchAppointmentSlots();
  }, []);

  return (
    <>
      {state.isLoading && <Loader isShow={state.isLoading} />}

      <AdminLayoutView>
        <TherapistProfile handleBookAppointment={handleClose} />

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={state.isOpen}
          onClose={handleClose}
          closeAfterTransition
          className={styles.modalContainer}
          // slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <BookAppointment
            isOpen={state.isOpen}
            timeSlots={state.timeSlots}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            formValues={state.formValues}
            fetchAppointmentSlots={fetchAppointmentSlots}
          />
        </Modal>
      </AdminLayoutView>
    </>
  );
};

export default TherapistProfilePage;
