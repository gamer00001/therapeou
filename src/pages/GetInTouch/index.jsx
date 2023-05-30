import React from "react";
import { Grid, Input, Typography } from "@mui/material";
import styles from "./style.module.css";
import CButton from "../../components/CButton";
import { ContactInfo } from "../../constants/GetInTouch";
// import MapImg from "../../assets/map-view.png";

const GetInTouch = () => {
  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={9}>
          <Grid
            container
            className={styles.container}
            style={{ paddingTop: "100px", width: "100vh" }}
          >
            <Grid item>
              <Typography component="h3" className={styles.title}>
                Get In <span className={styles.touchText}>Touch</span>
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={styles.container}>
            <Grid item className={styles.subtitle}>
              DO YOU GOT ANY INQUIRIES? FEEL FREE TO CONTACT US.
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.container}
            style={{ paddingTop: "50px" }}
          >
            <Grid item>
              <Input placeholder="Name" className={styles.inputField} />
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.container}
            style={{ paddingTop: "20px" }}
          >
            <Grid item>
              <Input placeholder="Email" className={styles.inputField} />
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.container}
            style={{ paddingTop: "20px" }}
          >
            <Grid item>
              <Input
                type="number"
                placeholder="Phone Number"
                className={styles.inputField}
              />
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.container}
            style={{ paddingTop: "20px" }}
          >
            <Grid item>
              <Input
                placeholder="How did you find us?"
                className={styles.inputField}
              />
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.container}
            style={{ paddingTop: "25px" }}
          >
            <Grid item>
              <CButton title="Send" type="Submit" width="545px" height="50px" />
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.container}
            spacing={8}
            style={{ paddingTop: "60px", paddingBottom: "60px" }}
          >
            {ContactInfo.map((item) => {
              return (
                <Grid item className={styles.contactBox}>
                  <div>
                    <img src={item.logo} alt={item.logo} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className={styles.contactBoxSubtitle}>
                      {item.subtitle}
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>

          {/* <Grid container>
            <Grid item className={styles.mapView}>
              <img className={styles.mapImage} src={MapImg} alt="map-view" />
            </Grid>
          </Grid> */}
        </Grid>

        <Grid item xs={3} className={styles.getInTouchRightSide}></Grid>
      </Grid>
    </>
  );
};

export default GetInTouch;
