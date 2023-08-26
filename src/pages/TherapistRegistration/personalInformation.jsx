import { Grid } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { TherapistPersonalFields } from "../../constants/LoginRegister";
import CButton from "../../components/CButton";
import * as Yup from "yup";

import styles from "./styles.module.scss";

const validationSchemaForPersonalInformation = Yup.object({
  title: Yup.string().required("Title is required"),
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Address is required"),
});

const PersonalInformation = ({ initialValues, handleChange, handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaForPersonalInformation}
      >
        {({ isSubmitting, errors, touched, values, handleChange }) => (
          <>
            <Form>
              <div className={styles.pageTitle}>Personal Information</div>
              <Grid container padding="0px 25%" col>
                {TherapistPersonalFields.map((item, index) => {
                  return (
                    <>
                      <Grid
                        item
                        className={`${styles.formGroupContainer} ${
                          item.col === 6 && `${styles.doubleFieldBlock}`
                        }`}
                        key={index}
                        sm={item.col}
                        xs={12}
                      >
                        <>
                          <Field
                            name={item.fieldName}
                            type={item.type}
                            label={item.placeholder}
                            onChange={handleChange}
                            placeholder={item.placeholder}
                            className={`${styles.registerFields} ${
                              item.col === 6 && `${styles.doubleField}`
                            } form-control ${
                              errors[item.fieldName] &&
                              touched[item.fieldName] &&
                              `${styles.isInvalid}`
                            }`}
                          />
                          <ErrorMessage
                            name={item.fieldName}
                            component="div"
                            className={styles.errorMessage}
                          />
                        </>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ paddingTop: "40px" }}
              >
                <Grid item>
                  <CButton
                    formType="submit"
                    title={"Next"}
                    type="Submit"
                    width="462px"
                    height="67px"
                    style={{ paddingTop: "40px" }}
                    // onClick={() => handleChange(null, 1)}
                  />
                </Grid>
              </Grid>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformation;
