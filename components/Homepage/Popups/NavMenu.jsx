import React from "react";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import Typography from "../../Commons/Typography";

const NavMenu = ({ open, setOpen }) => {
  // Modal state handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="px-[1rem] py-[1rem] w-screen h-screen bg-black flex items-center justify-start flex-col gap-20">
        {/* => Close icon */}
        <div className="flex items-center justify-end w-full">
          <CloseIcon
            fontSize="large"
            sx={{ color: "white" }}
            onClick={handleClose}
          />
        </div>
        {/* => Nav Menu Items */}
        <div className="flex flex-col items-center justify-center gap-8">
          <Link href="/" passHref>
            <Typography text="about us" capitalize hover />
          </Link>
          <Link href="/" passHref>
            <Typography text="analytics" capitalize hover />
          </Link>
          <Link href="/" passHref>
            <Typography text="docs" capitalize hover />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default NavMenu;
