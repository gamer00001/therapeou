import { Grid } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { TherapistPersonalFields } from "../../constants/LoginRegister";
import CButton from "../../components/CButton";

import styles from "./styles.module.scss";

const PersonalInformation = () => {
  return (
    <div>
      <Formik
      //   initialValues={initialValues}
      //   validationSchema={
      //     formType === "Login"
      //       ? validationSchemaForLogin
      //       : validationSchemaForSignup
      //   }
      //   onSubmit={handleSubmit}
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
                    disabled={isSubmitting}
                    title={"Submit"}
                    type="Submit"
                    width="462px"
                    height="67px"
                    style={{ paddingTop: "40px" }}
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
