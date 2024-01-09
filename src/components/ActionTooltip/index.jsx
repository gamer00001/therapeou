import React, { useEffect, useRef, useState } from "react";

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

const ActionTooltip = () => {
  const ref = useRef();

  const [state, setState] = useState({
    open: false,
  });

  const handleOpen = (isOpen) => {
    setState((prev) => ({
      ...prev,
      open: isOpen || !prev.open,
    }));
  };

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
    <>
      <img
        className="cursor-pointer"
        onClick={handleOpen}
        src="/action-btn.svg"
        alt="action"
      />

      {state.open && (
        <div className={styles.tooltipContainer} ref={ref}>
          {ActionsList.map((action) => (
            <div className={styles.actionRow}>
              <img src={action.icon} alt={action.name} />

              <span>{action.name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ActionTooltip;
