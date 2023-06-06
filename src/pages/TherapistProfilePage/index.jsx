import React, { useState } from "react";
import TherapistProfile from "../../components/TherapistProfile";
import AdminLayoutView from "../../components/layout/AdminView";
import BookAppointment from "../../components/BookAppointment";
import { Modal } from "@mui/material";

import styles from "./styles.module.scss";
import "./modal.scss";

const TherapistProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AdminLayoutView>
      <TherapistProfile handleBookAppointment={handleClose} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        className={styles.modalContainer}
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <BookAppointment isOpen={isOpen} handleClose={handleClose} />
      </Modal>
    </AdminLayoutView>
  );
};

export default TherapistProfilePage;
