import React from "react";
import AdminLayoutView from "../../components/layout/AdminView";

import { Input } from "@mui/material";

import styles from "./styles.module.scss";
import BasicTable from "../../components/TableListing";
import { usersColumns, usersData } from "../../constants/common";

const ManageUsers = () => {
  return (
    <AdminLayoutView>
      <div className={styles.usersContainer}>
        {/* <div>ManageUsers</div> */}

        <Input placeholder="Search Patients" className={styles.searchField} />

        <div className="pt-20">
          <BasicTable
            listing={usersData()}
            headers={usersColumns}
            showBorderBottom
          />
        </div>
      </div>
    </AdminLayoutView>
  );
};

export default ManageUsers;
