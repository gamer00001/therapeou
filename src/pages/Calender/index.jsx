import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import TherapistScheduleView from "./therapistScheduleView";
import { scheduleTiming } from "../../constants/Calender";
import {
  parseScheduleListing,
  prepareDataForApi,
} from "../../data-parsers/therapist-parser";
import { getUserInfoFromStorage } from "../../utility/common-helper";
import {
  addTherapistScheduleApi,
  fetchTherapistScheduleApi,
  updateTherapistScheduleByDayApi,
} from "../../api/therapist-api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const INITIAL_STATE = {
  isLoading: false,
  schedule: scheduleTiming,
};

const Calender = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const loggedInUserInfo = getUserInfoFromStorage();

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleAddSchedule = (item, index) => {
    const { schedule } = state;

    const updatedSchedule = [...schedule];
    updatedSchedule[index].addFields = !updatedSchedule[index].addFields;
    setState((prev) => ({
      ...prev,
      schedule: updatedSchedule,
    }));
  };

  const addSchedule = (data) => {
    if (!data.startTime || !data.endTime) {
      return toast.error("Fields cannot be empty");
    }
    let startTime = data.startTime.split(":")[0];
    let endTime = data.endTime.split(":")[0];

    if (parseInt(startTime) > parseInt(endTime)) {
      return toast.error("Start Time should be less then end time");
    }

    if (Number(startTime) === Number(endTime)) {
      return toast.error("Start Time and End time cannot be same.");
    }

    if (Number(startTime) <= 0 || Number(endTime) >= 24) {
      return toast.error("Please enter time between 1 - 24 hours");
    }

    handleLoader();

    const parseData = prepareDataForApi(data, loggedInUserInfo.id);

    let apiToCall;

    if (data.isEdit) {
      apiToCall = updateTherapistScheduleByDayApi;
    } else {
      apiToCall = addTherapistScheduleApi;
    }

    apiToCall(parseData, loggedInUserInfo.id, data.title)
      .then((res) => {
        toast.success(
          data.isEdit ? "Schedule Updated Successfully." : res.data
        );

        handleLoader();

        setTimeout(() => {
          fetchTherapistSchedule();
        }, 500);
      })
      .catch((error) => {
        console.log({ error });
        handleLoader();
      });
  };

  const handleFieldChange = (name, value, data) => {
    const { schedule } = state;
    let updatedRecord = schedule[data.id];

    updatedRecord[name] = value;

    schedule[data.id] = updatedRecord;

    setState((prev) => ({
      ...prev,
      schedule: [...schedule],
    }));
  };

  const fetchTherapistSchedule = () => {
    handleLoader();

    fetchTherapistScheduleApi(loggedInUserInfo.id)
      .then((res) => {
        const parseData = parseScheduleListing(res.data);

        handleLoader();

        setState((prev) => ({
          ...prev,
          schedule: parseData,
        }));
      })
      .catch((error) => {
        handleLoader();
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchTherapistSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AdminLayoutView>
        <TherapistScheduleView
          schedule={state.schedule}
          addSchedule={addSchedule}
          handleFieldChange={handleFieldChange}
          handleAddSchedule={handleAddSchedule}
        />
      </AdminLayoutView>
      {state.isLoading && <Loader />}
    </>
  );
};

export default Calender;
