import React from "react";
import styles from "./styles.module.scss";

const NotesSection = () => {
  return (
    <div className={styles.notesSection}>
      <div className="d-flex justify-between align-center pb-16">
        <span className={styles.heading}>Notes</span>

        <span className={styles.seeAll}>See All</span>
      </div>

      <div className={styles.notesListingBlock}>
        <ul>
          <li>This patient needs to get full amount of tests.</li>
          <li>This patient needs to get full amount of tests.</li>
          <li>This patient needs to get full amount of tests.</li>
          <li>This patient needs to get full amount of tests.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotesSection;
