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
