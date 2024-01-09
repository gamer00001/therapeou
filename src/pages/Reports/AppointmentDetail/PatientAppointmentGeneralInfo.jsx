import React, { useRef, useState } from "react";
import styles from "../styles.module.scss";
import Dropdown from "../../../components/Dropdown";
import CButton from "../../../components/CButton";
import { isCurrentUserPatient } from "../../../utility/common-helper";
import { isEmpty } from "lodash";

const StatusOptions = [
  {
    label: "Complete",
    value: "completed",
  },
  {
    label: "Cancel",
    value: "cancelled",
  },
];

const PatientAppointmentGeneralInfo = ({
  state,
  parent,
  appointmentInfo,
  handleSubmit,
  handlePatientReports,
  handlePatientReportsSaveAction,
}) => {
  const [option, setOption] = useState(null);
  const inputRef = useRef();

  const handleOptionChange = (option) => {
    setOption(option.target.value);
  };

  const { patientReports } = state;

  let reports = !isEmpty(patientReports)
    ? patientReports
    : appointmentInfo?.appointmentDocs;

  return (
    <>
      <div className={styles.title}>Status:</div>
      <div className={styles.value}>{appointmentInfo.status}</div>
      <div className={styles.title}>Patient General Detail:</div>
      <div className={styles.value}>
        <span>Name:&nbsp; {appointmentInfo.patientName}&nbsp; </span>
        <span> &nbsp;Age:25</span>
      </div>
      {parent === "pastAppointments" && (
        <div className={styles.value}>
          <span>Patient Type: </span>
          <span> {appointmentInfo.purpose}</span>
        </div>
      )}

      <div className={styles.title}>Appointment Date:</div>
      <div className={styles.value}>{appointmentInfo.date}</div>

      <div className={styles.title}>
        Patient Reports:
        {isCurrentUserPatient() && (
          <img
            className={styles.editReportsIcon}
            src="/edit-note.svg"
            alt="add-reports-icon"
            onClick={() => inputRef.current.click()}
          />
        )}
        <input
          id="patientReports"
          ref={inputRef}
          type="file"
          accept=".pdf"
          multiple
          hidden
          onChange={handlePatientReports}
        />
      </div>
      {isEmpty(reports) ? (
        <div className={`${styles.value}`}>No Reports Found</div>
      ) : (
        reports?.map((item) => (
          <div
            className={`${styles.value} cursor-pointer`}
            onClick={() => {
              window.open(item?.url);
            }}
          >
            {item?.name ?? item?.docName}
          </div>
        ))
      )}

      {parent === "onGoingAppointments" && (
        <div className={styles.dropdownBlock}>
          <Dropdown
            label="Status"
            handleChange={handleOptionChange}
            options={StatusOptions}
          />

          <div className="pt-20">
            <CButton
              title="Submit"
              type="submit"
              onClick={() => handleSubmit(option)}
            />
          </div>
        </div>
      )}

      {parent !== "onGoingAppointments" && (
        <>
          <div className={styles.title}>Amount Paid:</div>
          <div className={styles.value}>$250/-</div>
        </>
      )}

      {isCurrentUserPatient() && (
        <div className="pt-20">
          <CButton
            title="Save"
            type="submit"
            onClick={handlePatientReportsSaveAction}
          />
        </div>
      )}
    </>
  );
};

export default PatientAppointmentGeneralInfo;
