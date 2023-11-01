import { Grid } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Autocomplete from "react-google-autocomplete";

import { TherapistPersonalFields } from "../../constants/LoginRegister";
import CButton from "../../components/CButton";

import styles from "./styles.module.scss";
import { getGoogleApiKey } from "../../utility/common-helper";

const validationSchemaForPersonalInformation = Yup.object({
  profileTitle: Yup.string().required("Title is required"),
  fullName: Yup.string().required("Full Name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  postCode: Yup.string().required("Postal Code is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Address is required"),
  profileDescription: Yup.string().required("Profile Description is required"),
});

const PersonalInformation = ({ initialValues, handleChange, handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
        validationSchema={validationSchemaForPersonalInformation}
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
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
                          {item.fieldName === "address" ? (
                            <Autocomplete
                              // className={`${styles.profileFields} ${styles.mapAddressSearchField}`}
                              placeholder="Address"
                              className={`${styles.registerFields} ${
                                item.col === 6 && `${styles.doubleField}`
                              } form-control ${
                                errors[item.fieldName] &&
                                touched[item.fieldName] &&
                                `${styles.isInvalid}`
                              }`}
                              componentRestrictions={{ country: "us" }}
                              options={{
                                types: ["geocode", "establishment"],
                              }}
                              defaultValue={values[item.fieldName]}
                              apiKey={getGoogleApiKey()}
                              onPlaceSelected={(place) => {
                                console.log({ place });
                                setFieldValue(
                                  "address",
                                  place?.formatted_address || ""
                                );
                              }}
                            />
                          ) : (
                            <Field
                              name={item.fieldName}
                              type={item.type}
                              label={item.placeholder}
                              onChange={handleChange}
                              disabled={item?.disabled}
                              placeholder={item.placeholder}
                              className={`${styles.registerFields} ${
                                item.col === 6 && `${styles.doubleField}`
                              } form-control ${
                                errors[item.fieldName] &&
                                touched[item.fieldName] &&
                                `${styles.isInvalid}`
                              }`}
                            />
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
