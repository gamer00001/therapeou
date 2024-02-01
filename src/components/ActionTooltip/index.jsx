import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import "./styles.scss";
import styles from "./styles.module.scss";

const ActionsList = [
  {
    name: "Edit",
    icon: "/edit-icon.svg",
    action: "",
  },
  {
    name: "Delete",
    icon: "/delete-icon.svg",
    action: "",
  },
  {
    name: "Deactivate",
    icon: "/deactivate-icon.svg",
    action: "",
  },
  {
    name: "View Profile",
    icon: "/view-profile.svg",
    action: "",
  },
];

const ActionTooltip = ({
  id,
  data,
  forPatient = false,
  status,
  handleUserStatus,
}) => {
  const ref = useRef();
  const navigate = useNavigate();

  const [state, setState] = useState({
    open: false,
    actionsList: ActionsList,
  });

  const handleOpen = (isOpen) => {
    setState((prev) => ({
      ...prev,
      open: isOpen || !prev.open,
    }));
  };

  const handleAction = (action) => {
    if (action.name === "View Profile") {
      return navigate(`${action.action}/${data.id}`);
    }

    switch (action.name) {
      case "View Profile":
        return navigate(`${action.action}/${data.id}`);

      case "Activate":
      case "Deactivate":
        handleUserStatus();
        handleOpen();
        return;

      case "Edit":
        return navigate(`${action.action}/${data.id}`, {
          state: {
            userInfo: data,
          },
        });

      default:
        return;
    }
  };

  useEffect(() => {
    const { actionsList } = state;

    let list = actionsList.map((item) => {
      switch (item.name) {
        case "View Profile":
          return {
            ...item,
            action: forPatient
              ? "/admin/patient-profile"
              : "/admin/therapist-profile",
          };

        case "Activate":
        case "Deactivate":
          return {
            ...item,
            name: status === "active" ? "Deactivate" : "Activate",
          };

        case "Edit":
          return {
            ...item,
            action: forPatient
              ? `/admin/edit-patient`
              : "/admin/edit-therapist",
          };

        default:
          return {
            ...item,
          };
      }
    });

    setState((prev) => ({
      ...prev,
      actionsList: list,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (state.open && ref.current && !ref.current.contains(e.target)) {
        handleOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [state.open]);

  return (
    <div className="p-relative tooltipContainer" id={id}>
      <img
        className="cursor-pointer"
        onClick={handleOpen}
        src="/action-btn.svg"
        alt="action"
      />

      {state.open && (
        <div className={styles.tooltipContainer} ref={ref}>
          {state.actionsList?.map((action, index) => (
            <div
              key={index}
              className={styles.actionRow}
              onClick={() => handleAction(action)}
            >
              <Tooltip {...action} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionTooltip;

const Tooltip = ({ name = "", icon }) => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <img src={icon} alt={name} />
          </ListItemIcon>
          <ListItemText>{name}</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
