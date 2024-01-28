import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import { Input } from "@mui/material";

import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import BasicTable from "../../components/TableListing";
import { usersColumns } from "../../constants/common";
import {
  fetchAllPatientsListingApi,
  patientUpdateInfoApi,
} from "../../api/patient-api";
import { parsePatientListing } from "../../data-parsers/patient-parser";
import Loader from "../../components/Loader";

const ManageUsers = () => {
  const [state, setState] = useState({
    listing: [],
    isLoading: true,
    actions: [],
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

    patientUpdateInfoApi(data.id, updatedData)
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
    fetchAllPatientsListingApi()
      .then((res) => {
        const parseListing = parsePatientListing(res.data, handleUserStatus);
        console.log({ res });

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
      <AdminLayoutView>
        <div className={styles.usersContainer}>
          {/* <div>ManageUsers</div> */}

          <Input placeholder="Search Patients" className={styles.searchField} />

          <div className="pt-20">
            <BasicTable
              listing={state.listing}
              headers={usersColumns}
              showBorderBottom
            />
          </div>
        </div>
      </AdminLayoutView>
      {state.isLoading && <Loader />}
    </>
  );
};

export default ManageUsers;
