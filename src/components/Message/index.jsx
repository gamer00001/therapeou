import React, { useContext, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      className={`${styles.message} ${
        message.senderId === currentUser.uid && `${styles.owner}`
      }`}
      ref={ref}
    >
      <div className={styles.messageInfo}>
        <img src={"/user-logo.png"} alt="ff" />
      </div>
      <div className={styles.messageContent}>
        <p>{message?.text ?? "Hello"}</p>
        {message?.img && <img src={message?.img} alt="" />}
        {/* <span>just now</span> */}
      </div>
    </div>
  );
};

export default Message;
