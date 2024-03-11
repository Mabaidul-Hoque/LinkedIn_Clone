import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface AutocompleteModalProps {
  searchClick: () => void;
  isSearchClick: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "13%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "green",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AutocompleteModal: React.FC<AutocompleteModalProps> = ({
  searchClick,
  isSearchClick,
}) => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div
        onClick={() => {
          searchClick();
          // handleOpen();
        }}
        className={`flex text-gray-500 hover:text-black cursor-pointer ${
          isSearchClick ? "hidden" : "block"
        }`}
      >
        <FontAwesomeIcon
          className=" min-[800px]:absolute lg:top-3 min-[800px]:top-0 min-[800px]:left-16"
          icon={faMagnifyingGlass}
        />
        <p className="mt-4 lg:hidden max-[800px]:hidden">Search</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AutocompleteModal;
