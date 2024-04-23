import moment from "moment";
import Logo from "../assets/aboutUs.png";
import UserInfoBlock from "../components/UserInfoBlock";
import ActionTooltip from "../components/ActionTooltip";

export const parsePatientListing = (data, handleUserStatus) => {
  return data.map((item) => {
    return {
      apiData: { ...item },
      id: item?.id,
      patientInfo: (
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
            id={item.id}
            forPatient={true}
            handleUserStatus={() => handleUserStatus(item)}
            status={item?.active == "true" ? "active" : "inactive"}
          />
        </div>
      ),
    };
  });
};

export const parseAppointmentListing = (data) => {
  return data?.map((item) => {
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

export const parsePatientOverviewInfo = (data) => {
  return [
    {
      id: 1,
      title: "Gender",
      value: data?.gender || "N/A",
    },
    {
      id: 2,
      title: "Birthday",
      value: "28 feb, 2002",
    },
    {
      id: 3,
      title: "Phone number",
      value: data?.phone || "N/A",
    },
    {
      id: 4,
      title: "Address",
      value: data?.address || "N/A",
    },
    {
      id: 5,
      title: "City",
      value: data?.city || "N/A",
    },
    {
      id: 6,
      title: "Zip Code",
      value: data?.postCode || "N/A",
    },
    {
      id: 7,
      title: "Registration Date",
      value: data?.registrationDate || "N/A",
    },
    {
      id: 8,
      title: "Member Status",
      value: "Active",
    },
  ];
};

export const parseAppointmetStats = (data) => {
  let upcoming = 0,
    past = 0;

  data.forEach((item) => {
    if (
      ["ongoing", "pending"].includes(item.appointmentStatus?.toLowerCase())
    ) {
      upcoming += 1;
    } else {
      past += 1;
    }
  });

  return {
    upcoming,
    past,
  };
};
