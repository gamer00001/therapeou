import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./style.module.css";
import { termsConditions } from "../../constants/TermsConditions";
import CButton from "../../components/CButton";

const TermsAndConditions = () => {
  return (
    <>
      <Grid container className={styles.container}>
        <Grid item width="100%">
          <Grid container justifyContent="center">
            <Grid item>
              <Typography className={styles.title} component="h3">
                Terms of Agreement
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item>
              <hr className={styles.horizontalLine} />
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            <Grid item xs={4}>
              <ol class="clause-list">
                {termsConditions.map((item) => {
                  return <li className={styles.leftListing}>{item.heading}</li>;
                })}
              </ol>
            </Grid>

            <Grid item xs={8} className={styles.pointsBlock}>
              <Typography className={styles.text} component="p">
                {termsConditions.map((item) => {
                  return (
                    <span class="clause">
                      {item.content.map((item) => {
                        return (
                          <>
                            <h3>{item.subHeading}</h3>
                            <ol>
                              <span>
                                {item.points.map((item) => {
                                  return <li>{item}</li>;
                                })}
                              </span>
                            </ol>
                          </>
                        );
                      })}
                    </span>
                  );
                })}
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item style={{ marginRight: "250px", paddingTop: "30px" }}>
              <CButton
                title="Accept"
                type="Submit"
                borderRadius="20px"
                customStyles={{ marginRight: "20px" }}
              />
              <CButton title="Decline" type="Decline" borderRadius="20px" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TermsAndConditions;
