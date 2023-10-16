import React from "react";
import { Grid } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import CButton from "../../components/CButton";
import FileUpload from "../../components/FileUpload";
import { TherapistProfessionalFields } from "../../constants/LoginRegister";
import AddServices from "../../components/AddServices";

import styles from "./styles.module.scss";

const validationSchemaForProfessionalInformation = Yup.object({
  specialization: Yup.string().required("Specialization is required"),
  // experience: Yup.number().required("Experience is required"),
  fee: Yup.string().required("Fee is required"),
  education: Yup.array()
    .of(Yup.string())
    .min(1)
    .required("Education is required"),
  insurance: Yup.array().of(Yup.string()).required("Insurance is required"),
  dbsCheck: Yup.array().of(Yup.string()).required("DbsCheck is required"),
});

const ProfessionalInformation = ({
  state,
  isLoading,
  handleLoader,
  initialValues,
  handleSubmit,
  handleTabChange,
  handleAddService,
  handleFieldChange,
  removeServiceFromList,
}) => {
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchemaForProfessionalInformation}
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
          <>
            <Form>
              <div className={styles.pageTitle}>Professional Information</div>
              <Grid container padding="0px 25%" gap={2}>
                {state.list.map((service, index) => (
                  <React.Fragment key={service.id}>
                    <AddServices
                      state={state}
                      serviceId={index}
                      index={service.id}
                      handleSubmit={handleAddService}
                      handleAddService={handleAddService}
                      size={state.list.length}
                      handleFieldChange={handleFieldChange}
                      removeServiceFromList={removeServiceFromList}
                    />
                  </React.Fragment>
                ))}
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
                            value={undefined}
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
                                isLoading={isLoading}
                                setIsLoading={handleLoader}
                                name={item.fieldName}
                                title={item.title}
                                fileUploadInputChange={(filesList) => {
                                  setFieldValue(item.fieldName, filesList, {
                                    shouldValidate: true,
                                  });
                                }}
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
