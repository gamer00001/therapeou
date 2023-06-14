export const prepareApiDataForRegistration = (data) => {
  const apiData = {
    active: true,
    email: data.email,
    fullName: data.fullName,
    password: data.password,
  };

  return apiData;
};

export const parseTherapistListing = (data) => {
  return data.length > 0
    ? data.map((item) => {
        return {
          name: item?.fullName.length > 0 ? item?.fullName : "N/A",
          status: item.active ? "Online" : "Offline",
          profileImage: item.image,
          fee: "$ 50.00",
          rating: 4.4,
          action: "",
        };
      })
    : [];
};
