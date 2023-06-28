import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import UpIcon from "../../assets/up-icon.png";
import DownIcon from "../../assets/down-icon.png";
import CButton from "../CButton";
import { patientChangePasswordApi } from "../../api/patient-api";
import { toast } from "react-toastify";

const ChangePassword = ({ email, setIsLoading }) => {
  const [expand, setExpand] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewpassword] = useState("");

  const changePassword = async () => {
    setIsLoading(true);
    const response = await patientChangePasswordApi({
      email: email,
      newPassword: newPassword,
      oldPassword: oldPassword,
    });

    setTimeout(() => {
      setIsLoading(false);

      if (response?.status === 200) {
        setOldPassword("");
        setNewpassword("");
        toast.success("Password Changed Successfully");
      } else if (response?.status === 401) {
        toast.error("Incorrect Old password");
      } else {
        toast.error("Some errors occur while updating the password.");
      }
    }, 500);
  };

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
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
              </div>

              <div style={{ paddingTop: "50px" }}>
                <Input
                  placeholder={"Enter New Password"}
                  className={styles.profileFields}
                  value={newPassword}
                  onChange={(e) => {
                    setNewpassword(e.target.value);
                  }}
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
            onClick={changePassword}
          />
        </div>
      )}
    </>
  );
};

export default ChangePassword;
