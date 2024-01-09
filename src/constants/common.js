import ActionTooltip from "../components/ActionTooltip";
import UserInfoBlock from "../components/UserInfoBlock";

export const usersColumns = [
  {
    columnName: "All Patients",
    columnKey: "patientInfo",
  },
  {
    columnName: "Email",
    columnKey: "email",
  },
  {
    columnName: "",
    columnKey: "action",
  },
];

export const usersData = () => {
  return [
    {
      patientInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      patientInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      patientInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      patientInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      patientInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
  ];
};

export const therapistColumns = [
  {
    columnName: "All Therapist",
    columnKey: "therapistInfo",
  },
  {
    columnName: "Email",
    columnKey: "email",
  },
  {
    columnName: "",
    columnKey: "action",
  },
];

export const therapistData = () => {
  return [
    {
      therapistInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      therapistInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      therapistInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      therapistInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
    {
      therapistInfo: (
        <>
          <UserInfoBlock />
        </>
      ),
      username: "John",
      subtitle: "Weekly Visit",
      email: "john@gmail.com",
      logo: "/user-logo.png",
      action: (
        <div className="position-relative">
          <ActionTooltip />
        </div>
      ),
    },
  ];
};

export const PatientStatsCardList = [
  {
    title: "Total Revenue",
    value: "$11,334",
    percentValue: "+6.35",
    isHighlighted: true,
  },
  {
    title: "Total Patients",
    value: "$24,500",
    percentValue: "+6.35",
    isHighlighted: false,
  },
  {
    title: "New Patients",
    value: "$350",
    percentValue: "+6.35",
    isHighlighted: false,
  },
];

export const TherapistStatsCardList = [
  {
    title: "Total Revenue",
    value: "$11,334",
    percentValue: "+6.35",
    isHighlighted: true,
  },
  {
    title: "Total Therapist",
    value: "$24,500",
    percentValue: "+6.35",
    isHighlighted: false,
  },
  {
    title: "New Therapist",
    value: "$350",
    percentValue: "+6.35",
    isHighlighted: false,
  },
];

export const SubscriptionUsersInfo = [
  {
    id: 1,
    title: "Subscription",
    value: "Users",
  },
  {
    id: 2,
    title: "Standard",
    value: "1209",
  },
  {
    id: 3,
    title: "Premium",
    value: "780",
  },
];

export const SubscriptionRevenueInfo = [
  {
    id: 1,
    title: "Subscription",
    value: "Revenue",
  },
  {
    id: 2,
    title: "Standard",
    value: "$1209",
  },
  {
    id: 3,
    title: "Premium",
    value: "$780",
  },
];
