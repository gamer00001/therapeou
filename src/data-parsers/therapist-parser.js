import moment from "moment";

export const makeTuplesOfSlots = (slots) => {
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
