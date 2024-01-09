import React, { useContext } from "react";
import { Input, InputAdornment, Typography } from "@mui/material";
import styles from "./styles.module.scss";
// import { AccountCircle } from "@mui/icons-material";
import SearchIcon from "../../assets/search-icon.png";
import { isNil } from "lodash";
import { ChatContext } from "../../context/ChatContext";

const UserChatRow = ({
  name,
  time,
  lastMessage,
  userImg = "/user-logo.png",
  handleSelect,
}) => {
  let date, finalTime;
  if (time) {
    const milliseconds =
      time.seconds * 1000 + Math.floor(time.nanoseconds / 1000000);
    date = new Date(milliseconds);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    let period = "AM";

    if (hours >= 12) {
      period = "PM";
      hours = hours % 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    finalTime = `${hours}:${minutes} ${period}`;
  }

  return (
    <Typography
      className={styles.chatRowContainer}
      component="div"
      onClick={handleSelect}
    >
      <Typography component="div" className={styles.nameImgBlock}>
        <img className={styles.userImg} src={userImg} alt="user-img" />

        <div>
          <Typography className={styles.userName} component="h5">
            {name}
          </Typography>
          <span>{lastMessage}</span>
        </div>
      </Typography>

      <Typography className={styles.userName} component="h5">
        {finalTime}
      </Typography>
    </Typography>
  );
};

const ChatListingSection = ({
  state,
  handleKey,
  handleSelect,
  handleUserSearch,
}) => {
  const { dispatch } = useContext(ChatContext);

  const handleChatSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <Typography className={styles.listingSectionContainer} component="div">
      <Typography className={styles.messageTitle} component="h2">
        Messages
      </Typography>

      <Input
        value={state.username}
        id="input-with-icon-adornment"
        placeholder="Search Chat"
        onKeyDown={handleKey}
        className={styles.chatSearchField}
        onChange={handleUserSearch}
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
        {!isNil(state.user) ? (
          <UserChatRow
            name={state.user?.displayName}
            {...state.user}
            handleSelect={handleSelect}
          />
        ) : (
          Object.entries(state?.chats)
            .sort((a, b) => b[1].date - a[1].date)
            .map((chat) => {
              return (
                <UserChatRow
                  key={chat[0]}
                  name={chat[1].userInfo?.displayName}
                  time={chat[1].date}
                  lastMessage={chat[1].lastMessage?.text}
                  handleSelect={() => handleChatSelect(chat[1].userInfo)}
                />
              );
            })
        )}
      </Typography>
    </Typography>
  );
};

export default ChatListingSection;
