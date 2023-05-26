import React from "react";
import styles from "./style.module.css";

const SocialLinkButton = ({ icon, text = "Sign up with Google" }) => {
  return (
    <div className={styles.socialButtonContainer}>
      <img alt="fb-social" src={icon} className={styles.socialIcon} />
      <span className={styles.socialMethodText}>{text}</span>
    </div>
  );
};

export default SocialLinkButton;
