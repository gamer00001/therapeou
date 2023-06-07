import React from "react";
import HomePageWrapper from "../../hoc/HomePageWrapper";
import { Grid, Typography } from "@mui/material";
import ABoutUsImg1 from "../../assets/about-us-img-1.png";
import ABoutUsImg2 from "../../assets/about-us-img-2.png";

import TopPatternImg from "../../assets/top-pattern.png";
import BottomPatternImg from "../../assets/bottom-pattern.png";
import styles from "./styles.module.scss";
import { ServicesList } from "../../constants/AboutUs";

const SuccessBlock = ({ heading, title, description }) => {
  return (
    <>
      <div>
        <Typography className={styles.headingText} component="h3">
          {heading}
        </Typography>

        <Typography className={styles.titleText} component="h3">
          {title}
        </Typography>

        <Typography className={styles.descriptionText} component="h3">
          {description}
        </Typography>
      </div>
    </>
  );
};

const ServicesBlock = ({ icon, title, subtitle }) => {
  return (
    <Typography className={styles.servicesBlockContainer} component="div">
      <img src={icon} alt="icon" />

      <Typography className={styles.servicesTitle} component="h3">
        {title}
      </Typography>

      <Typography className={styles.servicesSubtitle} component="h3">
        {subtitle}
      </Typography>
    </Typography>
  );
};

const AboutUs = () => {
  return (
    <HomePageWrapper>
      <Grid container justifyContent="center">
        <Grid item>
          <img className="w-100" src={ABoutUsImg1} alt="about-us-1" />

          <Typography className={styles.aboutUsTextContainer}>
            <Typography className={styles.aboutUsTitle} component="h1">
              Our team helps you get your <br /> life back on track.
            </Typography>

            <Typography className={styles.aboutUsSubtitle} component="h3">
              Our team of highly trained professionals uses the latest healing
              technologies to restore you to pain-free health quickly and
              easily. We thoroughly evaluate & treat all of the contributing
              root factors related to your issue. Includes, but is not limit,
              your work and home stressors.
            </Typography>
          </Typography>

          <Typography component="div" className="d-flex justify-center">
            <img className="" src={ABoutUsImg2} alt="about-us-1" />
          </Typography>

          <Grid container className={styles.successBlockContainer}>
            <Grid item xs={6}>
              <SuccessBlock
                heading="THE LEADERS"
                title={
                  <span>
                    Your Privacy and <br /> Security.
                  </span>
                }
                description="We understand that privacy and security are of utmost importance when it comes to therapy. Rest assured that our web app employs the latest encryption technology and strict privacy measures to protect your personal information and maintain the confidentiality of your therapy sessions."
              />
            </Grid>

            <Grid item xs={6}>
              <SuccessBlock
                heading="OUR STORY"
                title={
                  <span>
                    Our mission is to help patients <br /> live better.
                  </span>
                }
                description="Collaboratively administrate empowered markets via plug-and-play networks. users after installed base benefits. Dramatically visualize customer."
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item>
              <Typography className={styles.therapistContainer} component="div">
                <img
                  className={styles.topPattern}
                  src={TopPatternImg}
                  alt="pattern-1"
                />

                <Typography className={styles.therapistTitle} component="h2">
                  Our Therapists
                </Typography>

                <Typography className={styles.therapistSubtitle} component="h5">
                  Our therapists are licensed professionals with extensive
                  experience in various areas of mental health and counseling.
                  They undergo a rigorous screening process to ensure they meet
                  our high standards of expertise, empathy, and professionalism.
                </Typography>

                <img
                  className={styles.bottomPattern}
                  src={BottomPatternImg}
                  alt="pattern-2"
                />
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={styles.valuesContainer}>
            <Grid item xs={6}>
              <Typography className={styles.valuesTitle} component="h2">
                Our values that drive success
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography className={styles.valuesSideTitle} component="h5">
                Our team of highly trained professionals uses the latest healing
                technologies to restore you to pain-free health quickly and
                easily. We thoroughly evaluate & treat all of the contributing
                root factors related to your issue. Includes, but is not limit,
                your work and home stressors.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.servicesContainer}
            rowSpacing={1}
            columns={12}
          >
            {ServicesList.map((item) => (
              <Grid
                sx={{ width: 1 }}
                item
                xs={6}
                sm={4}
                md={4}
                lg={3}
                xl={2}
                className="d-flex justify-center"
              >
                <ServicesBlock {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </HomePageWrapper>
  );
};

export default AboutUs;
