import React from "react";
import { Grid } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import CButton from "../../components/CButton";
import FileUpload from "../../components/FileUpload";
import { TherapistProfessionalFields } from "../../constants/LoginRegister";

import styles from "./styles.module.scss";

const validationSchemaForProfessionalInformation = Yup.object({
  specialization: Yup.string().required("Specialization is required"),
  experience: Yup.string().required("Experience is required"),
  fee: Yup.string().required("Fee is required"),
  education: Yup.string().required("Education is required"),
  city: Yup.string().required("City is required"),
  insurance: Yup.string().required("Insurance is required"),
  dbsCheck: Yup.string().required("DbsCheck is required"),
});

const ProfessionalInformation = ({
  initialValues,
  handleSubmit,
  handleTabChange,
}) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaForProfessionalInformation}
      >
        {({
          isSubmitting,
          errors,
          touched,
          values,
          handleChange,
          setFieldValue,
        }) => (
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

                          {item.type === "file" && (
                            <>
                              <label className={styles.fieldLabel}>
                                {item.placeholder}
                              </label>
                              <FileUpload
                                title={item.title}
                                fileUploadInputChange={(e) =>
                                  setFieldValue(item.name)
                                }
                              />
                              <div className={styles.hrLine} />
                            </>
                          )}

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
                style={{ paddingTop: "40px", paddingBottom: "40px" }}
              >
                <Grid item className="d-flex" gap={4}>
                  <CButton
                    // formType="submit"
                    title={"Previous"}
                    type="Submit"
                    width="462px"
                    height="67px"
                    style={{ paddingTop: "40px" }}
                    onClick={() => handleTabChange(null, 0)}
                  />
                  <CButton
                    formType="submit"
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
