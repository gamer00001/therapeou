import React from "react";
import styles from "./styles.module.scss";

const FileUpload = ({ title = "Add Education Certifiate" }) => {
  return (
    <div className={styles.container} id="fileInput">
      <div>
        <img src="/eduction-icon.svg" alt="icon" />
      </div>

      <div className={styles.block}>{title}</div>
    </div>
  );
};

export default FileUpload;
