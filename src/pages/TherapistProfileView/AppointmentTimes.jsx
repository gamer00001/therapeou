import React from "react";
import styles from "./styles.module.scss";

const AppointmentTimes = ({ schedule = [] }) => {
  return (
    <div className={styles.appointmentBlock}>
      <div className="d-flex justify-between align-center pb-16">
        <span className={styles.heading}>Appointment Times</span>
      </div>

      {schedule.map((item, key) => (
        <div key={key} className="d-flex justify-between pb-8">
          <span className={styles.title}>{item.day}</span>
          <span
            className={styles.title}
          >{`${item.startDate} - ${item.endDate}`}</span>
        </div>
      ))}
    </div>
  );
};

export default AppointmentTimes;
