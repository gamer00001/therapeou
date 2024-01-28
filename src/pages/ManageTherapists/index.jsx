import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { Input } from "@mui/material";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";

import BasicTable from "../../components/TableListing";
import { therapistColumns, therapistData } from "../../constants/common";
import {
  fetchAllTherapistApi,
  therapistUpdateInfoApi,
} from "../../api/therapist-api";
import { parseTherapistListing } from "../../data-parsers/therapist-parser";
import Loader from "../../components/Loader";

const ManageTherapists = () => {
  const [state, setState] = useState({
    listing: [],
    isLoading: true,
  });

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleUserStatus = (data) => {
    handleLoader();

    let updatedData = {
      ...data,
      active: data?.active === "true" ? false : true,
    };

    therapistUpdateInfoApi(data.id, updatedData)
      .then((resp) => {
        toast.success("User Status Updated Successfully.");

        setTimeout(() => {
          fetchPatientsListing();
        }, 500);
      })
      .catch((error) => {
        handleLoader();

        toast.success("Some Error Occured.");

        console.log({ error });
      });
  };

  const fetchPatientsListing = () => {
    fetchAllTherapistApi()
      .then((res) => {
        const parseListing = parseTherapistListing(res.data, handleUserStatus);
        console.log({ res, parseListing });

        setState((prev) => ({
          ...prev,
          isLoading: false,
          listing: parseListing,
        }));
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchPatientsListing();
  }, []);

  return (
    <>
      {state.isLoading && <Loader />}

      <AdminLayoutView>
        <div className={styles.usersContainer}>
          <Input
            placeholder="Search Therapist"
            className={styles.searchField}
          />

          <div className="pt-20">
            <BasicTable
              listing={state.listing}
              headers={therapistColumns}
              showBorderBottom
            />
          </div>
        </div>
      </AdminLayoutView>
    </>
  );
};

export default ManageTherapists;
