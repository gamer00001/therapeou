import React from "react";
import SubscriptionCard from "../../components/SubscriptionCard";
import styles from "./styles.module.scss";
import { Grid } from "@mui/material";
import CButton from "../../components/CButton";

const Subscriptions = () => {
  return (
    <>
      <div className={styles.subscriptionTitlesRow}>
        <div className={styles.subscriptionTitle}>Subscriptions</div>
        <div className={styles.subscriptionSubtitle}>
          Choose the plan that’s right for you
        </div>
      </div>

      <div className={styles.subscriptionBlock}>
        <SubscriptionCard isPremium={true} />

        <SubscriptionCard packageName="Standard" packageAmount="$50/mo." />
      </div>

      <Grid container justifyContent="center" style={{ paddingTop: "40px" }}>
        <Grid item>
          <CButton
            formType="submit"
            // disabled={isSubmitting}
            title={"Save"}
            type="Submit"
            width="462px"
            height="67px"
            style={{ paddingTop: "40px" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Subscriptions;
