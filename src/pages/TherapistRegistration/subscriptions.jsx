import React, { useState } from "react";
import SubscriptionCard from "../../components/SubscriptionCard";
import styles from "./styles.module.scss";
import { Grid } from "@mui/material";
import CButton from "../../components/CButton";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Subscriptions = () => {
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const navigate = useNavigate();

  const handlePackage = () => {
    setIsCheckoutPage(!isCheckoutPage);
  };

  if (isCheckoutPage) {
    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    );
  }
  return (
    <>
      <div className={styles.subscriptionTitlesRow}>
        <div className={styles.subscriptionTitle}>Subscriptions</div>
        <div className={styles.subscriptionSubtitle}>
          Choose the plan that’s right for you
        </div>
      </div>

      <div className={styles.subscriptionBlock}>
        <SubscriptionCard isPremium={true} handlePackage={handlePackage} />

        <SubscriptionCard
          packageName="Standard"
          packageAmount="$50/mo."
          handlePackage={handlePackage}
        />
      </div>

      <Grid container justifyContent="center" style={{ paddingTop: "40px" }}>
        <Grid item>
          <CButton
            formType="submit"
            // disabled={isSubmitting}
            onClick={() => navigate("/admin/therapist-home")}
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
