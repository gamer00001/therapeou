import React from "react";
import { Box, Fade, Grid, Input, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import CButton from "../CButton";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { BookingAppointmentFields } from "../../constants/LoginRegister";
import { WEEK_DAYS } from "../../data-parsers/therapist-parser";

// import ReactDatePicker from "react-datepicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const bookingSchema = Yup.object({
  date: Yup.string().required("Date is required"),
  slot: Yup.string().required("Slot is required"),
  appointmentReason: Yup.string().required("Description is required"),
});

const BookAppointment = ({
  isOpen,
  formValues,
  timeSlots,
  handleClose,
  handleFieldChange,
  handleSubmit,
  fetchAppointmentSlots,
}) => {
  return (
    <div>
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            className={styles.startNowText}
            variant="h6"
            component="h2"
          >
            Start Now
          </Typography>
          <Typography className={styles.fieldsContainer} component="div">
            <Grid container justifyContent="center">
              <Formik
                initialValues={formValues}
                validationSchema={bookingSchema}
                onSubmit={handleSubmit}
              >
                {({
                  isSubmitting,
                  errors,
                  setFieldValue,
                  touched,
                  values,
                  handleChange,
                }) => (
                  <>
                    <Form>
                      {BookingAppointmentFields.map((item, index) => (
                        <Grid
                          item
                          className={styles.formGroupContainer}
                          key={index}
                        >
                          {item.type === "dropdown" ? (
                            <>
                              <Field
                                name={item.name}
                                value={values["slot"]}
                                type={item.type}
                                as="select"
                                placeholder={item.placeholder}
                                onChange={(e) => {
                                  setFieldValue("slot", e.target.value);
                                }}
                                className={`${
                                  styles.inputFields
                                } form-control ${
                                  item.type === "dropdown" && "w-100"
                                } ${
                                  errors[item.fieldName] &&
                                  touched[item.fieldName] &&
                                  `${styles.isInvalid}`
                                }`}
                              >
                                {timeSlots.map((time) => (
                                  <option
                                    value={time.startTime + "-" + time.endTime}
                                  >
                                    {time.startTime + "-" + time.endTime}
                                  </option>
                                ))}
                              </Field>
                            </>
                          ) : (
                            <>
                              <Field
                                name={item.fieldName}
                                type={item.type}
                                label={item.placeholder}
                                onChange={(e) => {
                                  if (e.target.name === "date") {
                                    const date = new Date(e.target.value);

                                    const dayName = WEEK_DAYS[date.getDay()];

                                    fetchAppointmentSlots(dayName);
                                  }
                                  setFieldValue(e.target.name, e.target.value);
                                }}
                                placeholder={item.placeholder}
                                className={`${
                                  styles.inputFields
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
                          )}
                        </Grid>
                      ))}
                      <Grid
                        container
                        justifyContent="center"
                        style={{ paddingTop: "40px" }}
                      >
                        <Grid item>
                          <CButton
                            title="Book now"
                            width="160px"
                            borderRadius="30px"
                            type="book"
                            formType="submit"
                            // onClick={handleSubmit}
                          />
                        </Grid>
                      </Grid>
                    </Form>
                  </>
                )}
              </Formik>
              {/* </Grid> */}
            </Grid>
          </Typography>
        </Box>
      </Fade>
    </div>
  );
};

export default BookAppointment;
