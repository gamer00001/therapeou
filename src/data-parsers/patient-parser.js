import moment from "moment";
import Logo from "../assets/aboutUs.png";

export const parseAppointmentListing = (data) => {
  return data.map((item) => {
    return {
      ...item,
      noteList: item?.noteList,
      date: moment(item?.date).format("MMMM-DD-yyyy"),
      status: item.appointmentStatus,
      appointmentCompleteInfo: { ...item },
      rating: item.therapistName?.rating,
      orderId: item.id,
      purpose: item.appointmentReason ?? "N/A",
      orderDate:
        moment(item.date).format("MMMM DD, yyyy") +
        " , " +
        moment(item.startTime).format("hh:mm A") +
        " - " +
        moment(item.endTime).format("hh:mm A"),
      logo: Logo,
      patientName: item.patientName.fullName,
      therapistName: item.therapistName.fullName,
      time: moment(item.startTime).format("hh:mm A"),
    };
  });
};

export const parseReviewData = (
  data,
  therapistId,
  appointmentId,
  patientId
) => {
  return {
    patientId,
    therapistId,
    appointmentId,
    comment: data.review,
    rating: data.rating,
    date: moment(new Date()).toISOString(),
  };
};
