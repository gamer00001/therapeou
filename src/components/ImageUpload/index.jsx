import React from "react";
import ImagePlaceholder from "../../assets/user-placeholder.jpg";
import CameraIcon from "../../assets/camera-icon.png";

import styles from "./styles.module.scss";

const ImageUpload = ({
  state,
  fileUploadInputChange,
  fileUploadAction,
  inputReference,
}) => {
  return (
    <div className={styles.profile} onClick={fileUploadAction}>
      <input
        hidden
        type="file"
        alt="fff"
        ref={inputReference}
        onChange={fileUploadInputChange}
        accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
      />
      <img
        className={styles.profileImage}
        src={state.image ?? ImagePlaceholder}
        alt="placeholder"
      />
      <div className={styles.overlay}>
        <img src={CameraIcon} alt="fff"></img>
      </div>
    </div>
  );
};

export default ImageUpload;
