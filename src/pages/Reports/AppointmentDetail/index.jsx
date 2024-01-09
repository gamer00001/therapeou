import React, { useEffect, useState } from "react";
import { Grid, Modal, Typography } from "@mui/material";
import AdminLayoutView from "../../../components/layout/AdminView";
import styles from "../styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import PatientAppointmentGeneralInfo from "./PatientAppointmentGeneralInfo";
import {
  addNoteToAppointmentApi,
  updateAppointmentApi,
  updateNoteToAppointmentApi,
} from "../../../api/therapist-api";
import { toast } from "react-toastify";
import AddAppointmentNote from "../../../components/AddAppointmentNote";
import Loader from "../../../components/Loader";
import { isEmpty } from "lodash";
import {
  getUserInfoFromStorage,
  isCurrentUserPatient,
} from "../../../utility/common-helper";
import {
  addPatientReportsToAppointmentApi,
  uploadPatientReportsDocumnetApi,
} from "../../../api/patient-api";

const AppointmentDetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState({
    ...location.state,
    isLoading: false,
    isNoteModalOpen: false,
    appointmentNote: "",
    patientReports: [],
  });

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isNoteModalOpen: !state?.isNoteModalOpen,
    }));
  };

  const handleSubmit = (option) => {
    let appointmentInfo = {
      ...state?.appointmentInfo?.appointmentCompleteInfo,
      appointmentStatus: option,
    };

    if (option) {
      updateAppointmentApi(state.appointmentInfo.appointmentId, appointmentInfo)
        .then((res) => {
          toast.success("Appointment Status updated successfully.");

          setTimeout(() => {
            navigate("/admin/reports");
          }, 500);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  };

  const handleNote = (e) => {
    const appointmentNote = e.target?.value;

    setState((prev) => ({
      ...prev,
      appointmentNote,
    }));
  };

  const handleAddNoteAction = () => {
    const { appointmentNote, appointmentInfo } = state;

    handleModal();

    handleLoader();

    let updatedAppointmentInfo = {
      appointment: { ...appointmentInfo?.appointmentCompleteInfo },
      appointmentId: appointmentInfo.appointmentId,
      notes: appointmentNote,
    };

    const apiToCall = isEmpty(state.appointmentInfo?.noteList)
      ? addNoteToAppointmentApi
      : updateNoteToAppointmentApi;

    console.log({ updatedAppointmentInfo });
    apiToCall(updatedAppointmentInfo, state.appointmentInfo?.noteList[0]?.id)
      .then((res) => {
        toast.success("Appointment Note added successfully.");

        handleLoader();

        setTimeout(() => {
          navigate("/admin/reports");
        }, 500);
      })
      .catch((error) => {
        handleLoader();

        console.log({ error });
      });
  };

  const handlePatientReports = (e) => {
    const { appointmentInfo } = state;

    const currentUserInfo = getUserInfoFromStorage();

    handleLoader();

    const formData = new FormData();
    const imageList = [];
    const files = Array.from(e.target.files);

    for (let i = 0; i < files.length; i++) {
      imageList.push(files[i]);
      formData.append(`imageList`, files[i]);
    }

    const data = {
      formData,
    };

    uploadPatientReportsDocumnetApi(
      currentUserInfo.id,
      "appointmentDocs",
      data.formData,
      appointmentInfo?.id
    )
      .then((fileResp) => {
        const fileUrls = fileResp.data.map((item) => item.secure_url);

        let finalList = fileUrls.map((item, index) => ({
          name: files[index]?.name,
          url: item,
        }));

        setState((prev) => ({
          ...prev,
          patientReports: finalList,
        }));

        handleLoader();
      })
      .catch((error) => {
        console.log({ error });
        handleLoader();
      });
  };

  const handlePatientReportsSaveAction = async () => {
    const { patientReports, appointmentInfo } = state;

    handleLoader();

    await patientReports.forEach(async (item) => {
      const apiPayload = {
        appointmentId: appointmentInfo?.id,
        docName: item.name,
        url: item.url,
      };
      await addPatientReportsToAppointmentApi(apiPayload);
    });

    handleLoader();

    setTimeout(() => {
      navigate("/admin/appointments");
    }, 500);
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      ...location.state,
    }));
  }, [location.state]);

  return (
    <>
      {state.isLoading && <Loader />}

      <AdminLayoutView>
        <div>
          <Typography className={styles.mainHeading} component="h2">
            {state.parent === "pastAppointments" ? "Past" : "Ongoing"} Booking
            View Details
          </Typography>

          <Grid container className={styles.appointmentInfoContainer}>
            <Grid item sm={5}>
              <PatientAppointmentGeneralInfo
                state={state}
                parent={state.parent}
                handleSubmit={handleSubmit}
                appointmentInfo={state.appointmentInfo}
                handlePatientReports={handlePatientReports}
                handlePatientReportsSaveAction={handlePatientReportsSaveAction}
              />
            </Grid>

            <Grid item sm={7} position="relative">
              <Grid container>
                <Grid item>
                  <div className={styles.verticalBar} />
                  <div className={styles.title}>
                    {state.parent === "pastAppointments"
                      ? "Review:"
                      : "General Description:"}
                  </div>

                  <div className={styles.reviewDetails}>
                    {state.parent === "pastAppointments"
                      ? `“I feel compelled to express my utmost gratitude for the
              exceptional care and guidance provided by my therapist. From the
              very first session, I knew I had found someone who truly
              understood the depths of my struggles and who possessed the
              knowledge and empathy to guide me towards healing.”`
                      : state.appointmentInfo.purpose}
                  </div>
                </Grid>

                {state.parent === "onGoingAppointments" &&
                  isEmpty(state.appointmentInfo?.noteList) && (
                    <Grid container>
                      <Grid item width="100%">
                        <div
                          className={`${styles.title} ${styles.notesBlock} pt-20`}
                        >
                          Add Note:
                          <img
                            onClick={handleModal}
                            className="cursor-pointer"
                            src="/add-schedule-icon.svg"
                            alt="add-note"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  )}

                {!isEmpty(state.appointmentInfo?.noteList) && (
                  <Grid container>
                    <Grid item width="100%">
                      <div
                        className={`${styles.title} ${styles.notesBlock} pt-20`}
                      >
                        Note:
                        {!isCurrentUserPatient() && (
                          <img
                            onClick={handleModal}
                            className="cursor-pointer"
                            src="/edit-note.svg"
                            alt="add-note"
                          />
                        )}
                      </div>

                      <div>{state.appointmentInfo?.noteList[0]?.notes}</div>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              {/* <hr /> */}
            </Grid>

            <div>
              <img
                className={styles.appointmentIcon}
                src="/appointment-detail-page-icon.png"
                alt="icon"
              />
            </div>
          </Grid>
        </div>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={state.isNoteModalOpen}
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
          <AddAppointmentNote
            isOpen={state.isNoteModalOpen}
            handleNote={handleNote}
            handleAddNoteAction={handleAddNoteAction}
          />
        </Modal>
      </AdminLayoutView>
    </>
  );
};

export default AppointmentDetail;
