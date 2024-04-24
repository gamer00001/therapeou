import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import SubscriptionPlan from "../../components/SubscriptionPlan";

import styles from "./styles.module.scss";
import { fetchSubscriptionsPlansApi } from "../../api/admin-api";
import { useNavigate } from "react-router-dom";

const PREMIUM_LIST = [
  "Access to experienced therapists",
  "20 sessions",
  "Bi Weekly progress report",
  "Online Support groups",
];

// const PLATINUM_LIST = [
//   "Unlimited access to top rated therapists",
//   "Unlimted sessions",
//   "Weekly progress report",
//   "Exclusive support",
// ];

const SubscriptionsPlans = () => {
  const [state, setState] = useState({
    plans: [],
  });

  const navigate = useNavigate();

  const fetchSubscriptionsPlans = async () => {
    try {
      const resp = await fetchSubscriptionsPlansApi();

      setState((prev) => ({
        ...prev,
        plans: resp?.data,
      }));
    } catch (error) {
      console.log({ error });
    }
  };

  const handleEditAction = (id) => {
    navigate(`/admin/subscription-plans/edit/${id}`);
  };

  useEffect(() => {
    fetchSubscriptionsPlans();
  }, []);

  return (
    <AdminLayoutView>
      <div className="p-20">
        <h1 className={`pt-12 ${styles.title}`}>Subscriptions Plans</h1>

        <span className={`pt-12 ${styles.subtitle}`}>Manage and Customize</span>

        <div className={`p-20 ${styles.container}`}>
          {state.plans.map((plan) => (
            <SubscriptionPlan
              title={plan.title}
              perksList={PREMIUM_LIST}
              onEditAction={() => handleEditAction(plan.id)}
              packagePrice={`${plan.price}$/month`}
            />
          ))}
        </div>
      </div>
    </AdminLayoutView>
  );
};

export default SubscriptionsPlans;
