import React from "react";
import styles from "./styles.module.scss";

const FILES = [
  {
    name: "Blood Tests.pdf",
    fileSize: "27 KB",
  },
  {
    name: "Medical Prescription.pdf",
    fileSize: "27 KB",
  },
  {
    name: "Blood tests.pdf",
    fileSize: "27 KB",
  },
  {
    name: "Blood Tests.pdf",
    fileSize: "27 KB",
  },
];

const DocumentSection = () => {
  return (
    <div className={styles.documentSection}>
      <div className="d-flex justify-between align-center pb-16">
        <span className={styles.heading}>Files/ Documents</span>

        {/* <span className={styles.seeAll}>Add Files</span> */}
      </div>

      <div className={styles.fileBlockContainer}>
        {FILES.map((file, key) => (
          <div className={styles.documentBlock} key={key}>
            <div className={styles.fileBlock}>
              <span className={styles.title}>{file.name}</span>
              <span className={styles.title}>{file.fileSize}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentSection;
