import React from "react";
import styles from "./styles.module.scss";
// import { scheduleTiming } from "../../constants/Calender";
import { Input } from "@mui/material";
import CButton from "../../components/CButton";

const TherapistScheduleView = ({ schedule, handleAddSchedule }) => {
  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.mainTitle}>Set your availability</div>

      <div className={styles.scheduleTitle}>Schedule</div>

      <div className={styles.scheduleBlock}>
        <div className={styles.title}>Set your weekly hours</div>

        {schedule.map((item, index) => (
          <>
            <div className={styles.singleDayRow}>
              <div className={styles.inputBlock}>
                <span className={styles.dayName}>{item.title}</span>
                {!item.addFields ? (
                  <span className={styles.unavailableText}>Unavailable</span>
                ) : (
                  <div className={styles.fieldsBlock}>
                    <Input className={styles.timeField} />
                    &nbsp;-&nbsp;
                    <Input className={styles.timeField} />
                    <div>
                      <CButton title="Save" type="viewmore" />
                    </div>
                  </div>
                )}
              </div>

              <img
                className="cursor-pointer"
                src="/add-schedule-icon.svg"
                alt="icon"
                onClick={() => {
                  handleAddSchedule(item, index);
                }}
              />
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default TherapistScheduleView;
