import moment from "moment";
import { isEmpty } from "lodash";
import { scheduleTiming } from "../constants/Calender";
import UserInfoBlock from "../components/UserInfoBlock";
import ActionTooltip from "../components/ActionTooltip";

export const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WEEK_DAYS_SMALL = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const makeTuplesOfSlots = (slots) => {
  if (isEmpty(slots)) {
    return [];
  }

  const timeTuples = [];
  for (let i = 0; i < slots.length - 1; i++) {
    timeTuples.push({
      startTime: slots[i],
      endTime: slots[i + 1],
    });
  }

  return timeTuples;
};

export const parseBookAppointmentData = (
  data,
  therapistId = 87,
  patientId = 69
) => {
  const dateString = data.date;
  const slot = data.slot;
  const [startTime, endTime] = slot.split("-");
  const startDateTime = new Date(`${dateString}T${startTime}:00Z`);
  const endDateTime = new Date(`${dateString}T${endTime}:00Z`);

  return {
    appointmentStatus: "pending",
    appointmentReason: data?.appointmentReason,
    date: moment(data.date).toISOString(),
    endTime: endDateTime.toISOString(),
    startTime: startDateTime.toISOString(),
    patientId: patientId,
    paymentId: 0,
    therapistId: therapistId,
  };
};

export const prepareDataForApi = (data, therapistId) => {
  return {
    day: WEEK_DAYS[data.id],
    endTime: data.endTime,
    startTime: data.startTime,
    therapistId: therapistId,
  };
};

export const parseScheduleListing = (data) => {
  let parseData = [];
  parseData = !isEmpty(data)
    ? WEEK_DAYS_SMALL.map((item, index) => {
        const d = data.filter((schedule) => schedule.day === item);
        return {
          id: index,
          title: item,
          startTime: d[0]?.startTime,
          endTime: d[0]?.endTime,
          isEdit: d.length === 0 ? false : true,
          addFields: d.length === 0 ? false : true,
        };
      })
    : scheduleTiming;

  return parseData;
};

export const parseTherapistAppointmentListing = (data) => {
  return data.map((item) => {
    return {
      appointmentCompleteInfo: { ...item },
      noteList: item?.noteList,
      status: item.appointmentStatus,
      patientInfo: item.patientName,
      therapistInfo: item.therapistName,
      patientName: item.patientName.fullName,
      purpose: item.appointmentReason ?? "N/A",
      rating: 4.4,
      appointmentId: item.id,
      date: moment(item.date).format("MMMM-DD-yyyy"),
    };
  });
};

export const parseTherapistListing = (data, handleUserStatus) => {
  return data.map((item) => {
    return {
      apiData: { ...item },
      id: item.id,
      therapistInfo: (
        <>
          <UserInfoBlock name={item.fullName || "N/A"} />
        </>
      ),
      // eslint-disable-next-line eqeqeq
      status: item?.active == "true" ? "Active" : "Inactive",
      username: item.fullName || "N/A",
      subtitle: "Weekly Visit",
      email: item.email || "N/A",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip
            data={item}
            status={item?.active == "true" ? "Active" : "Inactive"}
            handleUserStatus={() => handleUserStatus(item)}
          />
        </div>
      ),
    };
  });
};
