export const parseAdminDashboardStats = (stats) => {
  const patientStats = [
    {
      title: "Total Revenue",
      value: "0",
      percentValue: "0",
      isHighlighted: true,
    },
    {
      title: "Total Patients",
      value: stats?.totalPatients ?? 0,
      percentValue: "0",
      isHighlighted: false,
    },
    {
      title: "New Patients",
      value: stats?.newRegisteredPatients ?? 0,
      percentValue: "0",
      isHighlighted: false,
    },
  ];

  const therapistStats = [
    {
      title: "Total Revenue",
      value: "0",
      percentValue: "0",
      isHighlighted: true,
    },
    {
      title: "Total Therapist",
      value: stats?.totalTherapists ?? 0,
      percentValue: "",
      isHighlighted: false,
    },
    {
      title: "New Therapist",
      value: stats?.newRegisteredTherapists ?? 0,
      percentValue: "0",
      isHighlighted: false,
    },
  ];

  const adminDashboardStats = {
    patient: patientStats,
    therapist: therapistStats,
  };

  return adminDashboardStats;
};
