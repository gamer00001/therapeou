import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import RatingStar from "../../assets/rating-star.png";
import CButton from "../CButton";

const AppointmentOrderBlock = ({
  tabId = "1",
  orderId,
  orderDate,
  profileLogo,
  name,
  rating,
}) => {
  return (
    <div className={styles.infoContainer}>
      <Typography className={styles.orderId} component="div">
        Order ID: {orderId}
      </Typography>
      <Typography className={styles.orderDate} component="div">
        {orderDate}
      </Typography>

      <Typography component="div" className={styles.profileBlock}>
        <Typography component="div" className={styles.rowList}>
          <img className={styles.profileLogo} src={profileLogo} alt="dd" />

          <Typography component="div" className={styles.nameRatingInfo}>
            <Typography component="h4">{name}</Typography>
            <Typography component="h4" className={styles.ratingContainer}>
              <img className={styles.ratingStar} src={RatingStar} alt="ff" />
              {rating}
            </Typography>
          </Typography>
        </Typography>

        {tabId === "1" && (
          <Typography component="div">
            <CButton title="Cancel" type="decline" borderRadius="10px" />
          </Typography>
        )}

        {tabId === "2" && (
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
            />
            <CButton
              title="Write a Review"
              type="decline"
              width="160px"
              borderRadius="10px"
            />
          </Typography>
        )}
      </Typography>
    </div>
  );
};

export default AppointmentOrderBlock;
