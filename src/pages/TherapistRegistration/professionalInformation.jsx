import React from "react";
import { Grid } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./styles.module.scss";
import { TherapistProfessionalFields } from "../../constants/LoginRegister";
import CButton from "../../components/CButton";
import FileUpload from "../../components/FileUpload";

const ProfessionalInformation = () => {
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
              <div className={styles.pageTitle}>Professional Information</div>
              <Grid container padding="0px 25%" gap={2}>
                {TherapistProfessionalFields.map((item, index) => {
                  return (
                    <>
                      <Grid
                        item
                        className={`${styles.formGroupContainer} `}
                        key={index}
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
                              item.type === "file" && "d-none"
                            } ${
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

                          {item.type === "file" && (
                            <>
                              <label className={styles.fieldLabel}>
                                {item.placeholder}
                              </label>
                              <FileUpload />
                              <div className={styles.hrLine} />
                            </>
                          )}
                        </>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ paddingTop: "40px", paddingBottom: "40px" }}
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

export default ProfessionalInformation;
