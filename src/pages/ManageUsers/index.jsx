import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

import BasicTable from "../../components/TableListing";
import { usersColumns } from "../../constants/common";
import {
  fetchAllPatientsListingApi,
  patientUpdateInfoApi,
  searchPatientForAdminApi,
} from "../../api/patient-api";
import { parsePatientListing } from "../../data-parsers/patient-parser";
import Loader from "../../components/Loader";
import SearchField from "../../components/SearchFIeld";

import styles from "./styles.module.scss";

const ManageUsers = () => {
  const [state, setState] = useState({
    listing: [],
    isLoading: true,
    actions: [],
    search: "",
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

  const handlePatientSearch = async (e) => {
    const searchValue = e.target?.value || "";

    handleLoader();

    if (!isEmpty(searchValue)) {
      const searchResp = await searchPatientForAdminApi(searchValue);

      if (searchResp.status === 200) {
        const parsedData = parsePatientListing(
          searchResp.data,
          handleUserStatus
        );

        setState({ ...state, listing: parsedData, isLoading: false });
      } else {
        toast.error("Some Error Occured While Fetching Therapist Lisitng.");
      }
    } else {
      fetchPatientsListing();
    }

    setState((prev) => ({
      ...prev,
      search: searchValue,
    }));
  };

  useEffect(() => {
    fetchPatientsListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AdminLayoutView>
        <div className={styles.usersContainer}>
          <SearchField
            showIcon={false}
            name="search-patient"
            placeholder="Search Patients"
            className={styles.searchField}
            onChange={handlePatientSearch}
            setSearchType={(type) =>
              setState((prev) => ({
                ...prev,
                search: type,
              }))
            }
          />

          <div className="pt-20">
            <BasicTable
              showBorderBottom
              listing={state.listing}
              headers={usersColumns}
            />
          </div>
        </div>
      </AdminLayoutView>
      {state.isLoading && <Loader />}
    </>
  );
};

export default ManageUsers;
