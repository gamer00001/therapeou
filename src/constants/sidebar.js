const panelSideBar = () => ({
  admin: [
    {
      text: "Dashboard",
      //   icon: (fill, width, height) => (
      //     <DashboardIcon width={width} height={height} fill={fill} />
      //   ),
      path: "/admin/dashboard",
    },
    {
      text: "Properties",
      //   icon: (fill, width, height) => (
      //     <PropertyIcon width={width} height={height} fill={fill} />
      //   ),
      path: "/admin/property",
    },
    {
      text: "Appointments",
      //   icon: (fill, width, height) => (
      //     <AppointmentSidebarIcon width={width} height={height} fill={fill} />
      //   ),
      path: "/admin/appointments",
    },
    {
      text: "All Users",
      //   icon: (fill, width, height) => (
      //     <UsersIcon width={width} height={height} fill={fill} />
      //   ),
      path: "/admin/users",
    },
  ],
});

export default panelSideBar;
