import moment from "moment";
import Logo from "../assets/aboutUs.png";

export const parseAppointmentListing = (data) => {
  return data.map((item) => {
    return {
      ...item,
      orderId: item.id,
      orderDate:
        moment(item.date).format("MMMM DD, yyyy") +
        " , " +
        moment(item.startTime).format("hh:mm A") +
        " - " +
        moment(item.endTime).format("hh:mm A"),
      logo: Logo,
      name: item.therapistName,
      time: moment(item.startTime).format("hh:mm A"),
    };
  });
};
