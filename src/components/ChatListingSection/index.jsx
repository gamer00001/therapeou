import React from "react";
import { Input, InputAdornment, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { ChatList } from "../../constants/Chat";
// import { AccountCircle } from "@mui/icons-material";
import SearchIcon from "../../assets/search-icon.png";

const UserChatRow = ({ userImg, name, time }) => {
  return (
    <Typography className={styles.chatRowContainer} component="div">
      <Typography component="div" className={styles.nameImgBlock}>
        <img className={styles.userImg} src={userImg} alt="user-img" />

        <Typography className={styles.userName} component="h5">
          {name}
        </Typography>
      </Typography>

      <Typography className={styles.userName} component="h5">
        {time}
      </Typography>
    </Typography>
  );
};

const ChatListingSection = () => {
  return (
    <Typography className={styles.listingSectionContainer} component="div">
      <Typography className={styles.messageTitle} component="h2">
        Messages
      </Typography>

      <Input
        id="input-with-icon-adornment"
        placeholder="Search Chat"
        className={styles.chatSearchField}
        startAdornment={
          <InputAdornment position="start">
            <img
              className={styles.searchIcon}
              src={SearchIcon}
              alt="search-icon"
            />
          </InputAdornment>
        }
      />

      <Typography component="div">
        {ChatList.map((item) => {
          return <UserChatRow {...item} />;
        })}
      </Typography>
    </Typography>
  );
};

export default ChatListingSection;
