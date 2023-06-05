import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import UpIcon from "../../assets/up-icon.png";
import DownIcon from "../../assets/down-icon.png";
import CButton from "../CButton";

const ChangePassword = () => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div
        className={styles.changePasswordContainer}
        style={{
          height: expand ? "100%" : "60px",
          justifyContent: !expand ? "start" : "center",
        }}
      >
        <div>
          {expand ? (
            <div>
              <div className={styles.changeTitle}>
                Change Password
                <img
                  src={expand ? UpIcon : DownIcon}
                  alt="down-cion"
                  className={
                    expand ? styles.dropdownUpIcon : styles.dropdownIcon
                  }
                  onClick={() => setExpand(!expand)}
                />
              </div>

              <div style={{ paddingTop: "50px" }}>
                <Input
                  placeholder={"Enter Old Password"}
                  className={styles.profileFields}
                />
              </div>

              <div style={{ paddingTop: "50px" }}>
                <Input
                  placeholder={"Enter New Password"}
                  className={styles.profileFields}
                />
              </div>
            </div>
          ) : (
            <div>
              Change Password
              <img
                src={expand ? UpIcon : DownIcon}
                alt="down-cion"
                className={styles.dropdownIcon}
                onClick={() => setExpand(!expand)}
              />
            </div>
          )}
        </div>
      </div>

      {expand && (
        <div container justifyContent="center" className={styles.btnBlock}>
          <CButton
            title="Save Changes"
            type="submit"
            width="180px"
            borderRadius="20px"
            height="50px"
          />
        </div>
      )}
    </>
  );
};

export default ChangePassword;
