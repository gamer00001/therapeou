import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import { Typography, Button, Container, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@mui/styles";
import classes from "./styles.module.scss";

const NotFound = () => {
  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        404
      </Typography>
      <Typography variant="h5" className={classes.description}>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" className={classes.description}>
        The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
