import React from "react";
import styles from "./styles.module.scss";

const APPOINTMENTS_TIME = [
  {
    name: "Monday",
    time: "9am - 5pm",
  },
  {
    name: "Tuesday",
    time: "9am - 5pm",
  },
  {
    name: "Wednesday",
    time: "9am - 5pm",
  },
  {
    name: "Thursday",
    time: "9am - 5pm",
  },
  {
    name: "Friday",
    time: "9am - 5pm",
  },
  {
    name: "Saturday",
    time: "9am - 5pm",
  },
];

const AppointmentTimes = () => {
  return (
    <div className={styles.appointmentBlock}>
      <div className="d-flex justify-between align-center pb-16">
        <span className={styles.heading}>Appointment Times</span>
      </div>

      {APPOINTMENTS_TIME.map((item, key) => (
        <div key={key} className="d-flex justify-between pb-8">
          <span className={styles.title}>{item.name}</span>
          <span className={styles.title}>{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export default AppointmentTimes;
