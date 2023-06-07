import React from "react";
import { Grid } from "@mui/material";
import AdminLayoutView from "../../components/layout/AdminView";
import styles from "./styles.module.scss";
import ChatListingSection from "../../components/ChatListingSection";
import ChatViewSection from "../../components/ChatViewSection";

const Chat = () => {
  return (
    <AdminLayoutView>
      <Grid container className={styles.chatContainer}>
        <Grid item>
          <ChatListingSection />
        </Grid>
        <Grid item>
          <ChatViewSection />
        </Grid>
      </Grid>
    </AdminLayoutView>
  );
};

export default Chat;
