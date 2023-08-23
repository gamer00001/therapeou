import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Grid, Input, Typography } from "@mui/material";
import BasicTable from "../../components/TableListing";

import styles from "./styles.module.scss";
import UserProfileBlock from "../../components/UserProfileBlock";
import { useNavigate } from "react-router-dom";
import { getUserInfoFromStorage } from "../../utility/common-helper";
import {
  fetchAllTherapistApi,
  searchTherapistApi,
} from "../../api/therapist-api";
import { parseTherapistListing } from "../../data-parsers/user-registration";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

import NotificationIcon2 from "../../assets/notification-icon-1.svg";
import ChatIcon from "../../assets/chat-icon.svg";

const Overview = () => {
  const [state, setState] = useState({
    search: "",
    userInfo: getUserInfoFromStorage(),
    listing: [],
    loading: true,
  });

  const navigate = useNavigate();

  const fetchTherapistListing = async () => {
    const data = await fetchAllTherapistApi();
    if (data.status === 200) {
      let parsedData = parseTherapistListing(data?.data);
      setState({ ...state, listing: parsedData, loading: false });
    } else {
      return toast.error(
        "Some Error Occured While Fetching Therapist Lisitng."
      );
    }
  };

  useEffect(() => {
    fetchTherapistListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewBtn = (data) => {
    navigate("/admin/therapist-profile", {
      state: {
        therapistId: data.therapistId,
      },
    });
  };

  const handleTherapistSearch = (e) => {
    // const searchResp = searchTherapistApi();

    setState((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  return (
    <>
      {state.loading && <Loader isShow={state.loading} />}
      <AdminLayoutView>
        <>
          <Grid container className={styles.container}>
            <Grid item className="w-100">
              <Grid container>
                <Grid item xs={8}>
                  <Typography className={styles.overviewHeading} component="h2">
                    Overview
                    <div className={styles.fieldBlock}>
                      <Input
                        value={state.search}
                        placeholder="Search your nearby therapist"
                        className={styles.searchTherapistField}
                        onChange={handleTherapistSearch}
                      />

                      <img
                        className={styles.notificationIcon}
                        src={ChatIcon}
                        alt="notification-icon"
                      />

                      <img
                        className={styles.notificationIcon}
                        src={NotificationIcon2}
                        alt="notification-icon"
                      />
                    </div>
                  </Typography>

                  <Typography
                    className={styles.overviewSubtitle}
                    component="h5"
                  >
                    Welcome back, {state?.userInfo?.fullName}! Your progress is
                    really good. Keep it up
                  </Typography>

                  <Typography
                    className={styles.suggestionHeading}
                    component="h4"
                  >
                    Suggestion
                  </Typography>

                  {state?.listing?.length > 0 ? (
                    <BasicTable
                      listing={state?.listing}
                      handleViewBtn={handleViewBtn}
                    />
                  ) : (
                    <Typography className={styles.noDataFound} component="div">
                      No Therapist Found
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={4}>
                  <UserProfileBlock
                    username={state?.userInfo?.fullName}
                    profileImage={state.userInfo?.image}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      </AdminLayoutView>
    </>
  );
};

export default Overview;
