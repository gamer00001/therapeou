import React from "react";
import { Button, Grid } from "@mui/material";
import { Field } from "formik";
// import * as Yup from "yup";

import styles from "./styles.module.scss";

// const validationSchemaForServices = Yup.object({
//   service: Yup.string().required("Service Name is required"),
//   cost: Yup.number().required("Price is required"),
// });

const AddServices = ({
  size,
  index,
  formId,
  serviceId,
  serviceForm,
  initialValues,
  handleSubmit,
  handleAddService,
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
          value={undefined}
          className={`${styles.registerFields} mr-20 form-control`}
          //   className={`${styles.registerFields} mr-20`}
        />

        <Field
          label="Price of Service"
          placeholder="Cost of Service"
          name="price"
          type="number"
          onChange={(e) => handleFieldChange(e, serviceId)}
          value={undefined}
          className={`${styles.registerFields} mr-20 form-control`}
        />

        {/* <Formik
          enableReinitialize
          innerRef={serviceForm}
          onSubmit={() => {}}
          initialValues={initialValues}
          validationSchema={validationSchemaForServices}
        >
          {({ errors, touched, values, handleChange }) =>
            console.log({ errors, values, initialValues }) || (
              <>
                <Form>
                  <Field
                    label="Name of Service"
                    placeholder="Name of Service"
                    name="service"
                    type="text"
                    onChange={handleChange}
                    value={undefined}
                    className={`${styles.registerFields} mr-20 form-control ${
                      errors["service"] &&
                      touched["service"] &&
                      `${styles.isInvalid}`
                    }`}
                    //   className={`${styles.registerFields} mr-20`}
                  />

                  <Field
                    label="Cost of Service"
                    placeholder="Cost of Service"
                    name="cost"
                    type="number"
                    onChange={handleChange}
                    value={undefined}
                    className={`${styles.registerFields} mr-20 form-control ${
                      errors["cost"] && touched["cost"] && `${styles.isInvalid}`
                    }`}
                  />
                </Form>
              </>
            )
          }
        </Formik> */}
      </Grid>

      <Grid item sm={2} className={styles.servicesActions}>
        {serviceId === size - 1 && (
          <Button type="submit">
            <img
              alt="add-icon"
              className="cursor-pointer"
              src="/add-schedule-icon.svg"
              itemType="submit"
              onClick={handleAddService}
            />
          </Button>
        )}

        {(serviceId !== 0 || size > 1) && serviceId !== size - 1 && (
          <img
            alt="add-icon"
            className="cursor-pointer ml-12 pt-12"
            src="/delete-icon.svg"
            onClick={() => removeServiceFromList(index)}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default AddServices;
