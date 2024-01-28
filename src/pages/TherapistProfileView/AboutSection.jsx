import React from "react";
import styles from "./styles.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className="d-flex justify-between align-center pb-16">
        <span className={styles.heading}>About</span>
      </div>

      <div className={styles.notesListingBlock}>
        <ul>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </li>
        </ul>
      </div>

      <span className={styles.seeAll}>Read More</span>
    </div>
  );
};

export default AboutSection;
