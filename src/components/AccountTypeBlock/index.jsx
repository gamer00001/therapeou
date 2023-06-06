import React from "react";
import styles from "./styles.module.scss";
import { Grid, Typography } from "@mui/material";

const AccountTypeBlock = ({ img, text, customStyles, onClick }) => {
  return (
    <Grid className={styles.container} style={customStyles} onClick={onClick}>
      <img className={styles.accountImg} src={img} alt="text" />

      <Typography className={styles.descriptionText} component="div">
        {text}
      </Typography>
    </Grid>
  );
};

export default AccountTypeBlock;
