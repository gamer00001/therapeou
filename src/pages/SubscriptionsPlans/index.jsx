import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import SubscriptionPlan from "../../components/SubscriptionPlan";

import styles from "./styles.module.scss";

const PREMIUM_LIST = [
  "Access to experienced therapists",
  "20 sessions",
  "Bi Weekly progress report",
  "Online Support groups",
];

const PLATINUM_LIST = [
  "Unlimited access to top rated therapists",
  "Unlimted sessions",
  "Weekly progress report",
  "Exclusive support",
];

const SubscriptionsPlans = () => {
  return (
    <AdminLayoutView>
      <div className="p-20">
        <h1 className={`pt-12 ${styles.title}`}>Subscriptions Plans</h1>

        <span className={`pt-12 ${styles.subtitle}`}>Manage and Customize</span>

        <div className={`p-20 ${styles.container}`}>
          <SubscriptionPlan
            title="Premium"
            packagePrice={"10$/month"}
            perksList={PREMIUM_LIST}
          />

          <SubscriptionPlan
            title="Platinum"
            packagePrice={"90$/year"}
            perksList={PLATINUM_LIST}
          />
        </div>
      </div>
    </AdminLayoutView>
  );
};

export default SubscriptionsPlans;
