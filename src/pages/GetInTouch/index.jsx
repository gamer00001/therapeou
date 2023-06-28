import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import styles from "./style.module.css";
import CButton from "../../components/CButton";
import { ContactInfo, FAQsMock } from "../../constants/GetInTouch";
import HomePageWrapper from "../../hoc/HomePageWrapper";

const GetInTouch = () => {
  return (
    <HomePageWrapper>
      <Grid container style={{ height: "100%" }}>
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
                placeholder="Message"
                type="text"
                multiline
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

          <Grid container>
            <Grid item>
              <AccordianBlock />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={styles.getInTouchRightSide}></Grid>
      </Grid>
    </HomePageWrapper>
  );
};

export default GetInTouch;

const AccordianBlock = () => {
  const [expanded, setExpanded] = React.useState("0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.accordianBlockContainer}>
      <Typography component="h4" className={styles.faqsTitle}>
        FAQ's
      </Typography>
      {FAQsMock.map((item) => {
        return (
          <Accordion
            className={styles.accordianMain}
            expanded={expanded === item.type}
            onChange={handleChange(item.type)}
          >
            <AccordionSummary
              className={styles.accordianSummary}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{item?.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordianSummary}>
              <Typography>{item.subtitle}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
