import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const List = [
  {
    title: "On going Appointment",
    link: "/admin/reports/ongoing-appointments",
  },

  {
    title: "Appointment History",
    link: "",
  },
  {
    title: "Patient details",
    link: "",
  },
  {
    title: "Total Earnings",
    link: "",
  },
];

const Reports = () => {
  return (
    <AdminLayoutView>
      <div className={styles.container}>
        {List.map((item) => (
          <>
            <ActionItem title={item.title} link={item.link} />
          </>
        ))}
      </div>
    </AdminLayoutView>
  );
};

export default Reports;

const ActionItem = ({ title, link }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.actionBlock} onClick={() => navigate(link)}>
      {title}

      <img src="/side-icon.svg" alt="icon" />
    </div>
  );
};
