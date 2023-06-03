import React from "react";
import { Button, Container, Grid, Input } from "@mui/material";
import Logo from "../../assets/logo.png";
import { MENU_LINKS } from "../../constants/Menu";
import MenuLink from "../../components/MenuLink";
import mind from "../../assets/mind.png";
import aboutUs from "../../assets/aboutUs.png";
import { SERVICE_CONTENT } from "../../constants/Service";
import { TESTIMONIAL } from "../../constants/Testimonial";
import {
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
} from "@mui/material";
import Footer from "../../components/Footer";

import CButton from "../../components/CButton";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Container
          maxWidth={false}
          sx={{ backgroundColor: "#F8F8F8", paddingBottom: 7 }}
        >
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item>
              <img src={Logo} alt="logo" />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2} direction="row">
                {MENU_LINKS.map((item) => (
                  <Grid
                    item
                    style={{
                      paddingTop: 0,
                      cursor: "pointer",
                      pointerEvents: "auto",
                    }}
                  >
                    <MenuLink name={item.name} link={item.route} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} direction="row">
                <Grid item style={{ paddingTop: 0 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      borderColor: "#3C5671",
                      color: "#3C5671",
                    }}
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid item style={{ paddingTop: 0 }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 50,
                      background: "#3C5671",
                      borderColor: "#3C5671",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item md={6}>
              <Typography ml={10} component="div">
                <Typography variant="h6" component="h6">
                  HEALING THERAPY
                </Typography>
                <Typography variant="h2" component="h2">
                  Choose your own therapist.
                </Typography>
                <Typography variant="h6" mt={3} mb={3}>
                  Create a positive change in your life with therapy that
                  focuses on your individual strengths and values.
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#3C5671" }}>
                  {" "}
                  Book an Appointment{" "}
                </Button>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <img
                src={mind}
                style={{ width: "-webkit-fill-available" }}
                alt="Mind"
              />
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth={false}
          sx={{ backgroundColor: "#C8C8C8", marginTop: 5, paddingBottom: 5 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ textAlign: "center", padding: "20px 210px" }}
          >
            <Grid item>
              <Typography
                variant="h5"
                component="h5"
                style={{ color: "#3C5671" }}
              >
                Services
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" component="h2">
                Experienced in multiple therapy practices
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="h6">
                Multiple therapies refer to the integration of different
                therapeutic modalities to create a comprehensive and
                personalized treatment plan.
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" spacing={2}>
            {SERVICE_CONTENT.map((item) => (
              <Grid item>
                <Card
                  sx={{
                    maxWidth: 270,
                    borderRadius: "6px",
                    minHeight: "240px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        variant="square"
                        src={item.image}
                        sx={{ bgcolor: "#DBE7FF" }}
                      />
                    }
                  />
                  <CardContent style={{ paddingTop: 0 }}>
                    <Typography variant="h6" component="h6" color="#3C5671">
                      {item.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container
          maxWidth={false}
          sx={{ backgroundColor: "#E8F1FB", marginTop: 5, paddingBottom: 5 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ textAlign: "center", padding: "20px 220px" }}
          >
            <Grid item>
              <Typography
                variant="h5"
                component="h5"
                style={{ color: "#204EA5" }}
              >
                Dr. Adaria Warner
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                component="h2"
                style={{ fontWeight: 500 }}
              >
                Watch video to learn why he is the right therapist for you
              </Typography>
            </Grid>
            <Grid item style={{ width: "100%", marginTop: 35 }}>
              <CardMedia
                component="video"
                autoPlay
                controls
                src="https://www.youtube.com/watch?v=FOF71Lb5SkA"
                style={{ borderRadius: 12 }}
              />
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth={false}
          sx={{ backgroundColor: "#C8C8C8", marginTop: 8, paddingBottom: 5 }}
        >
          <Grid container direction="row" style={{ padding: 20 }} spacing={3}>
            <Grid item md={6}>
              <CardMedia
                component="img"
                src={aboutUs}
                style={{ borderRadius: 18 }}
              />
            </Grid>
            <Grid item md={6} style={{ marginTop: 37 }}>
              <Typography variant="h4" component="h4" color="#3C5671">
                About Us
              </Typography>
              <Typography variant="h3" component="h3">
                A dedicated therapist with the core mission to help
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                color="#323232"
                style={{ marginTop: 30 }}
              >
                Their core mission is to provide compassionate, non-judgmental
                support to individuals who are struggling with mental health
                issues, relationship difficulties, and other life challenges.
              </Typography>
              <Typography
                variant="div"
                component="div"
                style={{ marginTop: 64 }}
              >
                <Button
                  variant="contained"
                  style={{ background: "#3C5671", marginRight: 30 }}
                >
                  {" "}
                  Book an Appointment{" "}
                </Button>
                <Button
                  variant="outlined"
                  style={{ borderColor: "#3C5671", color: "#3C5671" }}
                >
                  About Us
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth={false}
          sx={{ backgroundColor: "#C8C8C8", marginTop: 5, paddingBottom: 5 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ textAlign: "center", padding: "20px 210px" }}
          >
            <Grid item>
              <Typography
                variant="h5"
                component="h5"
                style={{ color: "#3C5671" }}
              >
                TESTIMONIALS
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" component="h2">
                Our Patients Says
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" spacing={2}>
            {TESTIMONIAL.map((item, i) => (
              <Grid item>
                <Card
                  sx={{
                    maxWidth: 370,
                    borderRadius: "6px",
                    minHeight: "160px",
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe" src={item.image} />}
                    title={item.title}
                    subheader={item.subTitle}
                    style={{ paddingTop: i === 1 ? 0 : "" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container
          maxWidth={false}
          style={{
            backgroundColor: "#f8f8f8",
            marginTop: 50,
            paddingBottom: "60px",
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "60px",
          }}
        >
          <Grid container style={{ marginTop: "50px" }}>
            <GetInTouch />
          </Grid>
        </Container>

        <Container
          maxWidth={false}
          style={{
            backgroundColor: "#f8f8f8",
            marginTop: 50,
            paddingBottom: "60px",
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "60px",
          }}
        >
          <Footer />
        </Container>
      </>
    </div>
  );
};

export default Home;

const GetInTouch = () => {
  return (
    <Grid container className={styles.getInTouchContainer}>
      <Grid item xs={12} md={12} className={styles.innerContainer}>
        <Typography className={styles.textTitle} component="h3">
          LETS GET IN TOUCH
        </Typography>

        <Typography className={styles.textSubtitle} component="h3">
          Have something to say! Our team is all ears
        </Typography>

        <Grid container alignItems="center" style={{ paddingTop: "20px" }}>
          <Grid item xs={6} className={styles.firstInputRow}>
            <Input
              placeholder="Enter Your Name"
              className={styles.inputField}
            />
          </Grid>

          <Grid item xs={6}>
            <Input
              placeholder="Enter your email address"
              className={styles.inputField}
            />
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ paddingTop: "20px" }}
        >
          <Grid
            item
            xs={12}
            justifyContent="center"
            className={styles.firstInputRow}
          >
            <Input
              placeholder="Kindly tell how can we help you"
              className={styles.inputFieldTextArea}
              multiline
              rows={3}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item style={{ paddingTop: "20px" }}>
            <CButton type="Submit" title="Submit" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
