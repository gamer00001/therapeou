import React, { useRef, useState } from "react";
import { isEmpty } from "lodash";
import { uploadTherapistDocumnetApi } from "../../api/therapist-api";
import { getUserInfoFromStorage } from "../../utility/common-helper";

import styles from "./styles.module.scss";

const FileUpload = ({
  setIsLoading,
  name,
  title = "Add Education Certifiate",
  fileUploadInputChange,
}) => {
  const [files, setFiles] = useState([]);

  const currentUserInfo = getUserInfoFromStorage();
  const inputRef = useRef();

  const uploadFile = (e) => {
    setIsLoading();
    const formData = new FormData();
    const imageList = [];
    const files = Array.from(e.target.files);

    for (let i = 0; i < files.length; i++) {
      imageList.push(files[i]);
      formData.append(`imageList`, files[i]);
    }

    const data = {
      formData,
    };

    uploadTherapistDocumnetApi(currentUserInfo.id, name, data.formData)
      .then((fileResp) => {
        const fileUrls = fileResp.data.map((item) => item.secure_url);
        setFiles(imageList);

        fileUploadInputChange(fileUrls);
        setIsLoading();
      })
      .catch((error) => {
        console.log({ error });
        setIsLoading();
      });
  };
  return (
    <>
      <div
        className={styles.container}
        onClick={() => inputRef.current.click()}
      >
        <input
          id="fileInput"
          name={name}
          hidden
          ref={inputRef}
          type="file"
          accept=".pdf"
          multiple
          onChange={uploadFile}
        />
        <div>
          <img src="/eduction-icon.svg" alt="icon" />
        </div>

        <div className={styles.block}>{title}</div>

        {!isEmpty(files) &&
          files.map((file) => <div className="pt-8">{file?.name}</div>)}
      </div>
    </>
  );
};

export default FileUpload;
