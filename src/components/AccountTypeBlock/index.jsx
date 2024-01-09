import React from "react";
import styles from "./styles.module.scss";
import { Grid, Radio, Typography } from "@mui/material";

const AccountTypeBlock = ({ img, text, isPatient, customStyles, onClick }) => {
  return (
    <Grid className={styles.container} style={customStyles} onClick={onClick}>
      <img className={styles.accountImg} src={img} alt="text" />

      <Radio
        checked={isPatient}
        onChange={onClick}
        value="a"
        name="radio-buttons"
        className={styles.radioBtn}
        // inputProps={{ "aria-label": "A" }}
      />

      <Typography className={styles.descriptionText} component="div">
        {text}
      </Typography>
    </Grid>
  );
};

export default AccountTypeBlock;
