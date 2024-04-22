import React, { useState } from "react";
import SubscriptionCard from "../../components/SubscriptionCard";
import styles from "./styles.module.scss";
import { Grid } from "@mui/material";
import CButton from "../../components/CButton";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { addSubscriptionPackageForTherapistApi } from "../../api/admin-api";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const PLATINUM = {
  description: "string",
  duration: 12,
  id: 0,
  price: 90,
  title: "platinum",
};

const PREMIUM = {
  description: "string",
  duration: 1,
  id: 0,
  price: 10,
  title: "premium",
};

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Subscriptions = ({ handleTabChange }) => {
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const [state, setState] = useState({
    isLoading: false,
    selectedPackage: null,
  });
  const navigate = useNavigate();

  const location = useLocation();

  const userInfo = location?.state?.userInfo;

  const handlePackage = (name) => {
    // setIsCheckoutPage(!isCheckoutPage);
    setState((prev) => ({
      ...prev,
      selectedPackage: name,
    }));
  };

  const addSubscription = async () => {
    const { selectedPackage } = state;

    const payload = {
      ...PREMIUM,
      id: userInfo.id ?? 1,
      price: selectedPackage === "platinum" ? PLATINUM.price : PREMIUM.price,
      title: selectedPackage,
    };

    try {
      addSubscriptionPackageForTherapistApi(payload);
      // console.log({ resp });
      toast.success("Subscription added successfully!");
      navigate("/admin/therapist-home");
    } catch (error) {
      console.log({ error });
    }
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
        <SubscriptionCard
          packageName="Platinum"
          packageAmount="$90/year."
          isSelected={state.selectedPackage === "platinum"}
          handlePackage={() => handlePackage("platinum")}
        />
        <SubscriptionCard
          isPremium={true}
          packageAmount="$10/month"
          isSelected={state.selectedPackage === "premium"}
          handlePackage={() => handlePackage("premium")}
        />
      </div>

      <Grid container justifyContent="center" style={{ paddingTop: "40px" }}>
        <Grid item className="d-flex" gap={4}>
          <CButton
            // formType="submit"
            title={"Previous"}
            type="Submit"
            width="462px"
            height="67px"
            style={{ paddingTop: "40px" }}
            onClick={() => handleTabChange(null, 1)}
          />
          <CButton
            formType="submit"
            // disabled={isSubmitting}
            onClick={addSubscription}
            title={"Save"}
            type="Submit"
            width="462px"
            height="67px"
            style={{ paddingTop: "40px" }}
          />
        </Grid>
      </Grid>

      {state.isLoading && <Loader />}
    </>
  );
};

export default Subscriptions;
