import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Grid, Typography } from "@mui/material";
import BasicTable from "../../components/TableListing";

import styles from "./styles.module.scss";
import UserProfileBlock from "../../components/UserProfileBlock";

const Overview = () => {
  return (
    <AdminLayoutView>
      <>
        <Grid container>
          <Grid item className="w-100">
            <Grid container>
              <Grid item xs={8}>
                <Typography className={styles.overviewHeading} component="h2">
                  Overview
                </Typography>

                <Typography className={styles.overviewSubtitle} component="h5">
                  Welcome back, Irfan! Your progress is really good. Keep it up
                </Typography>

                <Typography className={styles.suggestionHeading} component="h4">
                  Suggestion
                </Typography>
                <BasicTable />
              </Grid>

              <Grid item xs={4}>
                <UserProfileBlock />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </AdminLayoutView>
  );
};

export default Overview;
