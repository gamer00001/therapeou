import React, { useEffect, useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import RegistrationProcess from "./registrationProcess";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";

import PersonalInformation from "./personalInformation";
import ProfessionalInformation from "./professionalInformation";
import Subscriptions from "./subscriptions";

import {
  addTherapistServiceApi,
  deleteTherapistServiceApi,
  fetchTherapistServiceApi,
  therapistUpdateInfoApi,
} from "../../api/therapist-api";
import Loader from "../../components/Loader";

import styles from "./styles.module.scss";
import "./tabs.scss";

const DEFAULT_SERVICE = {
  id: 1,
  service: "",
  cost: "",
};

const TherapistRegistration = () => {
  const location = useLocation();

  const [state, setState] = useState({
    tabValue: 0,
    isLoading: false,
    list: [DEFAULT_SERVICE],

    personalInitialValues: {
      profileTitle: "",
      fullName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      postCode: "",
      gender: "",
      address: "",
      profileDescription: "",
    },
    professionalInitialValues: {
      specialization: "",
      // experience: "",
      fee: 0,
      education: [],
      insurance: [],
      dbsCheck: [],
    },
  });

  const userInfo = location.state.userInfo;

  const handleLoader = () => {
    setState((prev) => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const handleTabChange = (event, newValue) => {
    setState((prev) => ({
      ...prev,
      tabValue: newValue,
    }));
  };

  const handlePersonalInformationSubmit = async (data) => {
    handleLoader();

    const therapistId = userInfo.id;

    const payload = {
      ...userInfo,
      ...data,
    };

    await therapistUpdateInfoApi(therapistId, payload);

    setState((prev) => ({
      ...prev,
      tabValue: 1,
      personalInitialValues: { ...data },
    }));

    handleLoader();
  };

  const handleProfessionalInformationSubmit = async (data) => {
    handleLoader();

    const therapistId = userInfo.id;

    const parseData = {
      specialization: data.specialization,
      fee: data.fee,
      experience: data.experience,
      dbsLink: data.dbsCheck,
      insuranceLink: data.insurance,
      certificateLink: data.education,
    };

    const payload = {
      ...userInfo,
      ...state.personalInitialValues,
      ...parseData,
    };

    await therapistUpdateInfoApi(therapistId, payload);

    handleLoader();

    setState((prev) => ({
      ...prev,
      tabValue: 2,
      professionalInitialValues: { ...data },
    }));
  };

  const checkIfFormFilled = () => {
    let { list } = state;
    let emptyField = false;

    list.forEach((serviceInfo) => {
      if (!serviceInfo.service) {
        emptyField = true;
        return toast.error("Enter Service Name First.");
      }

      if (!serviceInfo.cost) {
        emptyField = true;
        return toast.error("Enter Service Price First.");
      }
    });

    return emptyField;
  };

  const handleAddService = async () => {
    let { list } = state;

    let isFormNotFilled = checkIfFormFilled();

    if (isFormNotFilled) {
      return;
    }

    if (list.length > 9) {
      return toast.info("You can only add 10 services.");
    }
    const length = list.length - 1;
    list.push({
      id: list[length].id + 1,
      service: "",
      cost: "",
    });

    setState((prev) => ({
      ...prev,
      list,
    }));
  };

  const removeServiceFromList = (itemId, itemIndex = 0) => {
    const { list } = state;
    const updatedArray = list.filter((ref) => ref.id !== itemId);

    if (list[itemIndex].hasOwnProperty("therapistId")) {
      handleLoader();

      deleteTherapistServiceApi(itemId)
        .then((resp) => {
          fetchTherapistServiceListing();
          handleLoader();

          return toast.success("Service deleted successfully.");
        })
        .catch((error) => {
          console.log({ error });
          handleLoader();
        });
    }

    setState((prev) => ({
      ...prev,
      list: [...updatedArray],
    }));
  };

  const handleFieldChange = (e, index = 0) => {
    const key = e.target.name;
    const value = e.target.value;

    const { list } = state;

    list[index][key] = value;

    setState((prev) => ({
      ...prev,
      list,
    }));
  };

  const handleSaveService = (index = 0) => {
    const { list } = state;

    if (isEmpty(list[index].service) || isEmpty(list[index].cost)) {
      return toast.error("Filled the fields first.");
    }

    handleLoader();

    let dataPayload = {
      cost: list[index].cost,
      service: list[index].service,
      therapistId: userInfo?.id,
    };

    addTherapistServiceApi(dataPayload)
      .then((resp) => {
        handleLoader();

        fetchTherapistServiceListing();

        toast.success("Service Added Successfully.");
      })
      .catch((error) => {
        handleLoader();
        console.log({ error });
      });
  };

  const fetchTherapistServiceListing = () => {
    fetchTherapistServiceApi(userInfo.id)
      .then((resp) => {
        setState((prev) => ({
          ...prev,
          list: isEmpty(resp?.data) ? prev.list : resp?.data,
        }));
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchTherapistServiceListing();

    setState((prev) => ({
      ...prev,
      tabValue: location.state?.tabId || 0,
      personalInitialValues: {
        ...prev.personalInitialValues,
        ...userInfo,
        email: userInfo.email,
      },
      professionalInitialValues: {
        ...prev.professionalInitialValues,
        ...userInfo,
        // fee: userInfo.fee,
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.registrationConatiner}>
        <Grid container minHeight={"100vh"}>
          <Grid item sm={3} className={styles.sideSection} gap={2}>
            <SideSection
              tabId={state.tabValue}
              handleTabChange={handleTabChange}
            />
          </Grid>

          <Grid item sm={9}>
            <div
              index={0}
              role="tabpanel"
              value={state.tabValue}
              hidden={state.tabValue !== 0}
              id={`vertical-tabpanel-${0}`}
              aria-labelledby={`vertical-tab-${0}`}
            >
              <PersonalInformation
                handleSubmit={handlePersonalInformationSubmit}
                handleTabChange={handleTabChange}
                initialValues={state.personalInitialValues}
              />
            </div>

            <div
              role="tabpanel"
              hidden={state.tabValue !== 1}
              id={`vertical-tabpanel-${1}`}
              aria-labelledby={`vertical-tab-${1}`}
              value={state.tabValue}
              index={1}
            >
              <ProfessionalInformation
                state={state}
                isLoading={state.isLoading}
                handleLoader={handleLoader}
                handleTabChange={handleTabChange}
                handleAddService={handleAddService}
                handleSaveService={handleSaveService}
                handleFieldChange={handleFieldChange}
                removeServiceFromList={removeServiceFromList}
                handleSubmit={handleProfessionalInformationSubmit}
                initialValues={state.professionalInitialValues}
              />
            </div>

            <div
              role="tabpanel"
              hidden={state.tabValue !== 2}
              id={`vertical-tabpanel-${2}`}
              aria-labelledby={`vertical-tab-${2}`}
              value={state.tabValue}
              index={2}
            >
              <Subscriptions handleTabChange={handleTabChange} />
            </div>
          </Grid>
        </Grid>
      </div>
      {state.isLoading && <Loader />}
    </>
  );
};

export default TherapistRegistration;

const SideSection = ({ tabId, handleChange }) => {
  return (
    <>
      <Tabs
        orientation="vertical"
        value={tabId}
        // onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label={
            <RegistrationProcess
              title="Personal Information"
              icon={[1, 2].includes(tabId) ? `/green-check-1.svg` : null}
            />
          }
        />
        <Tab
          label={
            <RegistrationProcess
              title="Professional Information"
              icon={[2, 3].includes(tabId) ? "/green-check-1.svg" : null}
            />
          }
        />
        <Tab label={<RegistrationProcess title="Subscription" />} />
      </Tabs>
    </>
  );
};
