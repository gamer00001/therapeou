import React, { useState } from "react";

import { Grid } from "@mui/material";
import UsersTab from "./UsersTab";
import StatsCard from "../../components/StatsCard";
import AdminLayoutView from "../../components/layout/AdminView";
import {
  PatientStatsCardList,
  SubscriptionRevenueInfo,
  SubscriptionUsersInfo,
  TherapistStatsCardList,
} from "../../constants/common";
import StatsBlock from "../../components/StatsBlock";

import "./tab.scss";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const [state, setState] = useState({
    tabId: "1",
    statsList: PatientStatsCardList,
  });

  const handleChange = (event, newValue) => {
    setState((prev) => ({
      ...prev,
      tabId: newValue,
      statsList:
        newValue === "2" ? TherapistStatsCardList : PatientStatsCardList,
    }));
  };

  return (
    <AdminLayoutView>
      <div className="p-28">
        <h1 className="pt-20">Stats</h1>
        <div className="d-flex justify-center pt-8">
          <UsersTab state={state} handleChange={handleChange} />
        </div>

        <div className="pt-20 d-flex gap-28">
          {state.statsList.map((card, index) => (
            <StatsCard {...card} />
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
  );
};

export default Dashboard;
