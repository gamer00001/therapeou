import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AdminLayoutView from "../../components/layout/AdminView";
import styles from "./styles.module.scss";
import ChatListingSection from "../../components/ChatListingSection";
import ChatViewSection from "../../components/ChatViewSection";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Chat = () => {
  const [state, setState] = useState({
    username: "",
    user: null,
    chats: [],
  });

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setState((prev) => ({
          ...prev,
          chats: doc.data(),
        }));
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSearchField = (e) => {
    setState((prev) => ({
      ...prev,
      username: e.target.value,
      user: null,
    }));
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", state.username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setState((prev) => ({
          ...prev,
          user: doc.data(),
        }));
      });
    } catch (err) {
      return toast.error(err ?? "Some Error Occured.");
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const { user } = state;
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            // photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            // photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setState((prev) => ({
      ...prev,
      user: null,
      username: "",
    }));
  };

  return (
    <AdminLayoutView>
      <Grid container className={styles.chatContainer}>
        <Grid item>
          <ChatListingSection
            state={state}
            handleKey={handleKey}
            handleSelect={handleSelect}
            handleUserSearch={handleSearchField}
          />
        </Grid>
        <Grid item>
          <ChatViewSection />
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default Chat;
