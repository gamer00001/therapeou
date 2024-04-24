import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../../components/layout/AdminView";

import { Input } from "@mui/material";
import styles from "../styles.module.scss";
import CButton from "../../../components/CButton";
import { useNavigate, useParams } from "react-router-dom";
import {
  editSubscriptionsPlanByIdApi,
  fetchSubscriptionsPlanByIdApi,
} from "../../../api/admin-api";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

const EditSubscriptionPlans = () => {
  const [state, setState] = useState({
    isLoading: true,
    planInfo: {},
  });

  const params = useParams();
  const navigate = useNavigate();

  const fetchSubscriptionPlanById = async () => {
    try {
      const resp = await fetchSubscriptionsPlanByIdApi(params.id);

      setState((prev) => ({
        ...prev,
        isLoading: false,
        planInfo: resp.data,
      }));
    } catch (error) {
      console.log({ error });
      handleLoader();
    }
  };

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      planInfo: {
        ...prev.planInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSaveAction = async () => {
    const payload = {
      ...state.planInfo,
    };

    handleLoader();

    try {
      const resp = await editSubscriptionsPlanByIdApi(payload);

      if (resp.status === 200) {
        toast.success("Subscription Plan Updated Successfully!");
        navigate("/admin/subscripiton-plans");
      }
    } catch (error) {
      toast.error("Some Error Occured!");
    }
  };

  useEffect(() => {
    fetchSubscriptionPlanById();
  }, []);

  return (
    <>
      <AdminLayoutView>
        <div className="p-20">
          <h1 className={`pt-12 ${styles.title}`}>Edit Subscription Plan</h1>

          <div className={styles.inputsBlock}>
            <Input
              name={"title"}
              type={"text"}
              label={"Enter Title of Package"}
              value={state.planInfo.title}
              onChange={handleChange}
              placeholder={"Enter Title of Package"}
              className={`${styles.registerFields} form-control `}
            />

            <Input
              name={"price"}
              type={"number"}
              value={state.planInfo?.price}
              // label={"Enter Price of Package"}
              onChange={handleChange}
              placeholder={"Enter Price of Package"}
              className={`${styles.registerFields} form-control `}
            />

            <Input
              name={"duration"}
              type={"number"}
              value={state.planInfo?.duration}
              label={"Enter Duration of Package"}
              onChange={handleChange}
              placeholder={"Enter Duration of Package"}
              className={`${styles.registerFields} form-control `}
            />

            <Input
              name={"description"}
              type={"text"}
              label={"Enter Description of Package"}
              value={state.planInfo?.description}
              onChange={handleChange}
              placeholder={"Enter Description of Package"}
              className={`${styles.registerFields} form-control `}
            />

            <CButton title="Save" type="submit" onClick={handleSaveAction} />
          </div>
        </div>
      </AdminLayoutView>

      {state.isLoading && <Loader />}
    </>
  );
};

export default EditSubscriptionPlans;
