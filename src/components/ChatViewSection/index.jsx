import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/user-logo.png";
import styles from "./styles.module.scss";
import { Divider, TextField } from "@mui/material";
import Message from "../Message";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import {
  arrayUnion,
  updateDoc,
  doc,
  Timestamp,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

const ChatViewSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);



  const handleSend = async () => {

    if (data.chatId !== "null") {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
        [data.chatId + ".time"]: new Date(),
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
        [data.chatId + ".time"]: new Date(),
      });

      setText("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.userBlock}>
        <img className={styles.userLogo} src={logo} alt="logo" />

        <span className={styles.userTitle}>{data.user?.displayName ?? ""}</span>
      </div>
      <Divider />

      <div className={styles.messages}>
        {messages.map((messgae) => (
          <Message message={messgae} key={messgae.id} />
        ))}
      </div>

      <TextField
        className={`${styles.messageInput} messageSendField`}
        value={text}
        onKeyDown={(e) => {
          e.code === "Enter" && handleSend();
        }}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          endAdornment: (
            <img
              className="cursor-pointer"
              src="/send-message.svg"
              alt="send-btn"
              onClick={handleSend}
            />
          ),
        }}
      />
    </div>
  );
};

export default ChatViewSection;
