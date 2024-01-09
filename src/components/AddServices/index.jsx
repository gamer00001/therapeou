import React from "react";
import { Grid } from "@mui/material";
import { Field } from "formik";

import CButton from "../CButton";

import styles from "./styles.module.scss";

const AddServices = ({
  size,
  index,
  formId,
  service,
  serviceId,
  serviceForm,
  initialValues,
  handleSubmit,
  handleAddService,
  handleSaveService,
  handleFieldChange,
  removeServiceFromList,
}) => {
  return (
    <Grid container alignItems={"flex-end"}>
      <Grid item sm={10}>
        <Field
          label="Name of Service"
          placeholder="Name of Service"
          name="service"
          type="text"
          onChange={(e) => handleFieldChange(e, serviceId)}
          value={service.service}
          className={`${styles.registerFields} mr-20 form-control`}
        />

        <Field
          label="Price of Service"
          placeholder="Cost of Service"
          name="cost"
          type="number"
          onChange={(e) => handleFieldChange(e, serviceId)}
          value={service.cost}
          className={`${styles.registerFields} mr-20 form-control`}
        />
      </Grid>

      <Grid item sm={2} className={styles.servicesActions}>
        {serviceId === size - 1 && (
          <img
            alt="add-icon"
            className="cursor-pointer pl-8"
            src="/add-schedule-icon.svg"
            itemType="submit"
            onClick={handleAddService}
          />
        )}

        {(serviceId !== 0 || size > 1) &&
          (serviceId !== size - 1 ||
            service?.hasOwnProperty("therapistId")) && (
            <img
              alt="delete-icon"
              className="cursor-pointer ml-12"
              src="/delete-icon.svg"
              onClick={() => removeServiceFromList(index, serviceId)}
            />
          )}

        {!service?.hasOwnProperty("therapistId") && (
          <div className="ml-12">
            <CButton
              title="Save"
              type="submit"
              onClick={() => handleSaveService(serviceId)}
            />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default AddServices;
