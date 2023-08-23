import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const List = [
  {
    id: "onGoingAppointments",
    title: "On going Appointment",
    link: "/admin/reports/ongoing-appointments",
  },

  {
    id: "pastAppointments",
    title: "Appointment History",
    link: "/admin/reports/past-appointments",
  },
  {
    id: "",
    title: "Patient details",
    link: "",
  },
  {
    id: "",
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
            <ActionItem title={item.title} link={item.link} id={item.id} />
          </>
        ))}
      </div>
    </AdminLayoutView>
  );
};

export default Reports;

const ActionItem = ({ title, link, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.actionBlock}
      onClick={() =>
        navigate(link, {
          state: {
            id,
          },
        })
      }
    >
      {title}

      <img src="/side-icon.svg" alt="icon" />
    </div>
  );
};
