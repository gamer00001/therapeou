import React, { useEffect, useState } from "react";
import AdminLayoutView from "../../components/layout/AdminView";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";

import BasicTable from "../../components/TableListing";
import { therapistColumns } from "../../constants/common";
import {
  fetchAllTherapistApi,
  searchTherapistForAdminApi,
  therapistUpdateInfoApi,
} from "../../api/therapist-api";
import { parseTherapistListing } from "../../data-parsers/therapist-parser";
import Loader from "../../components/Loader";
import SearchField from "../../components/SearchFIeld";

import styles from "./styles.module.scss";

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
          fetchTherapistListing();
        }, 500);
      })
      .catch((error) => {
        handleLoader();

        toast.success("Some Error Occured.");

        console.log({ error });
      });
  };

  const fetchTherapistListing = () => {
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

  const handleTherapistSearch = async (e) => {
    const searchValue = e.target?.value || "";

    handleLoader();

    if (!isEmpty(searchValue)) {
      const searchResp = await searchTherapistForAdminApi(searchValue);

      if (searchResp.status === 200) {
        const parsedData = parseTherapistListing(
          searchResp.data,
          handleUserStatus
        );

        setState({ ...state, listing: parsedData, isLoading: false });
      } else {
        toast.error("Some Error Occured While Fetching Therapist Lisitng.");
      }
    } else {
      fetchTherapistListing();
    }

    setState((prev) => ({
      ...prev,
      search: searchValue,
    }));
  };

  useEffect(() => {
    fetchTherapistListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state.isLoading && <Loader />}

      <AdminLayoutView>
        <div className={styles.usersContainer}>
          <SearchField
            showIcon={false}
            name="search-therapist"
            placeholder="Search Therapist"
            className={styles.searchField}
            onChange={handleTherapistSearch}
            setSearchType={(type) =>
              setState((prev) => ({
                ...prev,
                search: type,
              }))
            }
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
