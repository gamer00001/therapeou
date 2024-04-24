import React, { useEffect, useState } from "react";
import TherapistProfile from "../../components/TherapistProfile";
import AdminLayoutView from "../../components/layout/AdminView";
import BookAppointment from "../../components/BookAppointment";
import { Modal } from "@mui/material";

import {
  fetchTherapistAppointmentSlots,
  fetchTherapistInfoApi,
} from "../../api/therapist-api";
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
    isLoading: true,
    therapistInfo: {},
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

  const handleLoader = (loading) => {
    setState((prev) => ({
      ...prev,
      isLoading: loading ?? !prev.isLoading,
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
    } else {
      toast.error("Something went wrong.");
    }
    handleLoader(false);
  };

  const fetchAppointmentSlots = async (day = "Monday") => {
    const therapistId = location.state.therapistId;
    const slotsResp = await fetchTherapistAppointmentSlots(therapistId, day);

    if (slotsResp.status === 200) {
      let parseSlots = makeTuplesOfSlots(slotsResp?.data || []);

      setState((prev) => ({
        ...prev,
        timeSlots: parseSlots,
      }));
    } else {
      return toast.error("Failed to fetch appointment Slots.");
    }
  };

  const fetchTherapistInfo = () => {
    // handleLoader();

    const therapistId = location.state.therapistId;

    fetchTherapistInfoApi(therapistId)
      .then((res) => {
        // handleLoader(false);

        setState((prev) => ({
          ...prev,
          isLoading: false,
          therapistInfo: res.data,
        }));
      })
      .catch((error) => {
        handleLoader(false);
        console.log({ error });
      });
  };

  const handleFilesChange = () => {};

  useEffect(() => {
    fetchAppointmentSlots();

    fetchTherapistInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state.isLoading && <Loader isShow={state.isLoading} />}

      <AdminLayoutView>
        <TherapistProfile
          therapistInfo={state.therapistInfo}
          handleBookAppointment={handleClose}
        />

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
            handleFilesChange={handleFilesChange}
            fetchAppointmentSlots={fetchAppointmentSlots}
          />
        </Modal>
      </AdminLayoutView>
    </>
  );
};

export default TherapistProfilePage;
