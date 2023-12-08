import ProfileIcon from "../assets/aboutUs.png";
import RatingIcon from "../assets/rating-star.png";
import CButton from "../components/CButton";

import styles from "./styles.module.scss";

export const prepareApiDataForRegistration = (data) => {
  const apiData = {
    active: true,
    email: data.email,
    fullName: data.fullName,
    password: data.password,
  };

  return apiData;
};

export const parseTherapistListing = (data, handleViewBtn = () => {}) => {
  return data.length > 0
    ? data.map((item) => {
        return {
          therapistId: item.id,
          // tharapist: item?.fullName ? item?.fullName : "N/A",
          tharapist: (
            <>
              <div className={styles.profileIconBlock}>
                <img
                  src={item?.profileImage ?? ProfileIcon}
                  alt="rating-icon"
                  className={styles.profileIcon}
                />

                {item?.fullName}
              </div>
            </>
          ),
          status: item.active ? "Online" : "Offline",
          profileImage: item.image,
          fee: <span className="font-bold">$ 50.00</span>,
          // rating: 4.4,
          rating: (
            <div className={styles.ratingImg}>
              <img
                src={RatingIcon}
                alt="rating-icon"
                className={styles.ratingIcon}
              />

              <span>4.4</span>
            </div>
          ),
          action: (
            <>
              <CButton
                title="View"
                customClassName={styles.viewBtn}
                onClick={() => handleViewBtn(item)}
              />
            </>
          ),
        };
      })
    : [];
};
