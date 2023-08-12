import React, { useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import TherapistScheduleView from "./therapistScheduleView";
import { scheduleTiming } from "../../constants/Calender";

const INITIAL_STATE = {
  schedule: scheduleTiming,
};

const Calender = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleAddSchedule = (item, index) => {
    const { schedule } = state;

    const updatedSchedule = [...schedule];
    updatedSchedule[index].addFields = !updatedSchedule[index].addFields;
    setState((prev) => ({
      ...prev,
      schedule: updatedSchedule,
    }));
  };

  return (
    <AdminLayoutView>
      <TherapistScheduleView
        schedule={state.schedule}
        handleAddSchedule={handleAddSchedule}
      />
    </AdminLayoutView>
  );
};

export default Calender;
