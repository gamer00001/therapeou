import React, { useState } from "react";
import styles from "../styles.module.scss";
import Dropdown from "../../../components/Dropdown";
import CButton from "../../../components/CButton";

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
  parent,
  appointmentInfo,
  handleSubmit,
}) => {
  const [option, setOption] = useState(null);

  const handleOptionChange = (option) => {
    setOption(option.target.value);
  };

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

      <div className={styles.title}>Patient Report:</div>
      <div className={styles.value}>Medical Report.pdf</div>
      <div className={styles.value}>Xray Report.pdf</div>
      <div className={styles.value}>Images.jpg</div>

      {parent !== "pastAppointments" && (
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

      {parent === "pastAppointments" && (
        <>
          <div className={styles.title}>Amount Paid:</div>
          <div className={styles.value}>$250/-</div>
        </>
      )}
    </>
  );
};

export default PatientAppointmentGeneralInfo;
