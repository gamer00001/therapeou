import React from "react";
import styles from "./styles.module.scss";

const AboutSection = ({ userInfo }) => {
  return (
    <div className={styles.aboutSection}>
      <div className="d-flex justify-between align-center pb-16">
        <span className={styles.heading}>About</span>
      </div>

      <div className={styles.notesListingBlock}>
        <ul>
          <li>{userInfo?.profileDescription || "N/A"}</li>
        </ul>
      </div>

      <span className={styles.seeAll}>Read More</span>
    </div>
  );
};

export default AboutSection;
