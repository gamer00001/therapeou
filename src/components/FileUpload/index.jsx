import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { uploadTherapistDocumnetApi } from "../../api/therapist-api";
import { getUserInfoFromStorage } from "../../utility/common-helper";

const FileUpload = ({
  title = "Add Education Certifiate",
  fileUploadInputChange,
}) => {
  const [file, setFile] = useState(null);
  const currentUserInfo = getUserInfoFromStorage();
  const inputRef = useRef();

  const uploadFile = async (e) => {
    const formData = new FormData();
    const imageList = [];
    const files = e.target.files;

    console.log({ files });

    for (let i = 0; i < files.length; i++) {
      imageList.push(files[i]);
      formData.append(`imageList[${i}]`, files[i]);
    }

    const data = {
      // docType: "education",
      imageList: formData,
      // imageList: [file],
    };

    setFile(file);

    console.log({ data });

    // const filResp = await uploadTherapistDocumnetApi(
    //   currentUserInfo.id,
    //   "education",
    //   data
    // );
  };
  return (
    <div className={styles.container} onClick={() => inputRef.current.click()}>
      <input
        id="fileInput"
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

      {file && <div className="pt-8">{file.name}</div>}
    </div>
  );
};

export default FileUpload;
