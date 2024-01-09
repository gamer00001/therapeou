import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import RatingStar from "../../assets/rating-star.png";
import CButton from "../CButton";
import { useNavigate } from "react-router-dom";

const AppointmentOrderBlock = ({
  tabId = "1",
  item,
  status,
  orderId,
  orderDate,
  profileLogo,
  fromPatient,
  handleModal,
  patientName,
  therapistName,
  rating = 4.7,
  cancelAppointment,
  handleAgainApppintment,
  appointmentCompleteInfo,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.infoContainer}>
      <Typography className={styles.orderId} component="div">
        Order ID: {orderId}
      </Typography>
      <Typography className={styles.orderDate} component="div">
        Order Date: {orderDate}
      </Typography>
      <Typography className={styles.orderDate} component="div">
        Status:
        <span style={{ fontWeight: "bold" }}> {status}</span>
      </Typography>

      <Typography component="div" className={styles.profileBlock}>
        <Typography component="div" className={styles.rowList}>
          <img className={styles.profileLogo} src={profileLogo} alt="dd" />

          <Typography component="div" className={styles.nameRatingInfo}>
            <Typography component="h4">
              {fromPatient ? therapistName : patientName}
            </Typography>
            <Typography component="h4" className={styles.ratingContainer}>
              <img className={styles.ratingStar} src={RatingStar} alt="ff" />
              {rating}
            </Typography>
          </Typography>
        </Typography>

        {tabId === "1" && (
          <Typography
            component="div"
            className="d-flex flex-column"
            style={{ gap: "15px" }}
          >
            <CButton
              title="Cancel"
              type="decline"
              borderRadius="10px"
              width="160px"
              onClick={() =>
                cancelAppointment(orderId, appointmentCompleteInfo)
              }
            />
            <CButton
              title="View Details"
              type="submit"
              borderRadius="10px"
              width="160px"
              onClick={() =>
                navigate("/admin/reports/appointments-detail", {
                  state: {
                    appointmentInfo: item,
                    // parent: "patient",
                  },
                })
              }
            />
          </Typography>
        )}

        {tabId === "2" && fromPatient && (
          <Typography
            component="div"
            className="d-flex flex-column"
            style={{ gap: "15px" }}
          >
            <CButton
              title="Appoint Again"
              type="submit"
              width="160px"
              borderRadius="10px"
              onClick={handleAgainApppintment}
            />
            <CButton
              title="Write a Review"
              type="decline"
              width="160px"
              borderRadius="10px"
              onClick={() => handleModal(appointmentCompleteInfo)}
            />
          </Typography>
        )}
      </Typography>
    </div>
  );
};

export default AppointmentOrderBlock;
