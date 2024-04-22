import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import UsersTab from "./UsersTab";
import StatsCard from "../../components/StatsCard";
import AdminLayoutView from "../../components/layout/AdminView";
import {
  SubscriptionRevenueInfo,
  SubscriptionUsersInfo,
} from "../../constants/common";
import StatsBlock from "../../components/StatsBlock";

import "./tab.scss";
import BarChart from "../../components/BarChart";
import { fetchAdminDashboardStats } from "../../api/admin-api";
import { parseAdminDashboardStats } from "../../data-parsers/admin-parser";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const [state, setState] = useState({
    isLoading: true,
    tabId: "1",
    statsInfo: {},
    statsList: [],
  });

  const fetchDashboardStats = async () => {
    try {
      const statsResp = await fetchAdminDashboardStats();

      const parseStats = parseAdminDashboardStats(statsResp.data);

      setState((prev) => ({
        ...prev,
        isLoading: false,
        allStats: parseStats,
        statsList: parseStats?.patient,
        statsInfo: statsResp?.data,
      }));
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const handleChange = (event, newValue) => {
    setState((prev) => ({
      ...prev,
      tabId: newValue,
      statsList:
        newValue === "2"
          ? state?.allStats?.therapist
          : state?.allStats?.patient,
    }));
  };

  return (
    <>
      <AdminLayoutView>
        <div className="p-28 statsContainer">
          <h1 className="pt-20">Stats</h1>
          <div className="d-flex justify-center pt-8">
            <UsersTab state={state} handleChange={handleChange} />
          </div>

          <div className="pt-20 d-flex gap-28">
            {state.statsList.map((card, index) => (
              <StatsCard key={index} statsInfo={state.statsInfo} {...card} />
            ))}
          </div>

          <Grid container className="pt-20" gap={10}>
            <Grid item sm={7}>
              <BarChart />
            </Grid>

            <Grid item>
              <div className="pt-20">
                <StatsBlock list={SubscriptionUsersInfo} />
              </div>

              <div className="pt-20">
                <StatsBlock list={SubscriptionRevenueInfo} />
              </div>
            </Grid>
          </Grid>
        </div>
      </AdminLayoutView>

      {state?.isLoading && <Loader />}
    </>
  );
};

export default Dashboard;
