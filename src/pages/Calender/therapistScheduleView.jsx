import React from "react";
import styles from "./styles.module.scss";
// import { scheduleTiming } from "../../constants/Calender";
// import { Input } from "@mui/material";
import CButton from "../../components/CButton";
import TimePicker from "react-time-picker";
import "./styles.scss";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const TherapistScheduleView = ({
  schedule,
  addSchedule,
  handleAddSchedule,
  handleFieldChange,
}) => {
  // const [value, onChange] = useState("10:00");
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
                    <TimePicker
                      format="HH:mm"
                      disableClock
                      onChange={(value) =>
                        handleFieldChange("startTime", value, item)
                      }
                      value={item.startTime}
                    />
                    &nbsp;-&nbsp;
                    <TimePicker
                      format="HH:mm"
                      disableClock
                      value={item.endTime}
                      onChange={(value) =>
                        handleFieldChange("endTime", value, item)
                      }
                    />
                    <div>
                      <CButton
                        title="Save"
                        type="viewmore"
                        onClick={() => addSchedule(item)}
                      />
                    </div>
                  </div>
                )}
              </div>

              <img
                className="cursor-pointer"
                src={
                  item.addFields ? "/delete-icon.svg" : "/add-schedule-icon.svg"
                }
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
