import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCompo({ isModalOpen, onClose }) {
  // const handleClickOpen = () => {
  //   setOpen(isModalOpen);
  // };

  // const handleClose = () => {
  //   setOpen(!isModalOpen);
  // };

  return (
    <React.Fragment>
      {/* <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog> */}
      <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Connect with me "}</DialogTitle>
        <DialogContent dividers>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <Tooltip title="GitHub">
              <IconButton
                color="inherit"
                component="a"
                href="https://github.com/omjadav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                color="primary"
                component="a"
                href="https://linkedin.com/in/omjadav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                color="error"
                component="a"
                href="https://instagram.com/_om.04__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={onClose} color="inherit">
            Close
          </IconButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
