import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import styles from "./styles.module.scss";
import { Input } from "@mui/material";

import BasicTable from "../../components/TableListing";
import { therapistColumns, therapistData } from "../../constants/common";

const ManageTherapists = () => {
  return (
    <AdminLayoutView>
      <div className={styles.usersContainer}>
        <Input placeholder="Search Therapist" className={styles.searchField} />

        <div className="pt-20">
          <BasicTable
            listing={therapistData()}
            headers={therapistColumns}
            showBorderBottom
          />
        </div>
      </div>
    </AdminLayoutView>
  );
};

export default ManageTherapists;
