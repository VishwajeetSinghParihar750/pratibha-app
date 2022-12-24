import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UserNode from "../UserNode";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import DataEntry from "../DataEntry";
import { Divider, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { stepsSliceActions } from "../../store/stepsSlice";
import { useNavigate } from "react-router-dom";

const inputField = {
  boxSizing: "border-box",
  // position: "absolute",
  width: "189px",
  // height: "44px",
  background: "rgba(217, 217, 217, 0.25)",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  //   backDrop:'10px',
  //   p: 4,
};
const styleField = {
  // p: 4,
  marginTop: "10px",
  marginLeft: "3%",
  paddingLeft: "40px",
  boxSizing: "border-box",
  position: "absolute",
  width: "748px",
  height: "50px",
  background: "rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: " 5px",
};

function createData(assets, rating, position, review) {
  return { assets, rating, position, review };
}

const rows = [
  createData("Mobile Application", "6/10", "Analyst", " "),
  createData("Mobile Application", "6/10", "Analyst", " "),
  createData("Mobile Application ", "6/10", "Analyst", " "),
  createData("Mobile Application ", "6/10", "Analyst", " "),
];

export default function Fourth() {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.steps.activeStep);

  let navigate = useNavigate();

  const handleNextClick = (e) => {
    //
    //
    //
    //
    dispatch(stepsSliceActions.setActiveStep(activeStep + 1));

    // Somewhere in your code, e.g. inside a handler:
    navigate(`/steps/${activeStep + 2}`);
  };

  const handleSkipClick = (e) => {
    dispatch(stepsSliceActions.setActiveStep(activeStep + 1));

    // Somewhere in your code, e.g. inside a handler:
    navigate(`/steps/${activeStep + 2}`);
  };

  const handleBackClick = (e) => {
    dispatch(stepsSliceActions.setActiveStep(activeStep - 1));

    // Somewhere in your code, e.g. inside a handler:
    navigate(`/steps/${activeStep}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if form gets validated it comes here otherwise not
    handleNextClick();
  };
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [openModal, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div className="second-box">
      <div className="first-step">
        {/* <UserNode /> */}
        <div>
          <div className="user-top">
            <Grid container>
              {/* <Grid><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Grid> */}

              <form action="" onSubmit={handleSubmit}>
                <div
                  className="avatar-text"
                  style={{ display: "inline", paddingLeft: "10px" }}
                >
                  <b>Invite Company</b>
                  <br />
                </div>
                <br />
                Lorem ispum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
                <div>
                  <label style={{ paddingLeft: "3vh", paddingTop: "50vh" }}>
                    <b>Email</b>
                    <input
                      style={{ height: "60px" }}
                      className="second-step-input"
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    <b>Share Target Summary</b>
                    <input
                      type="checkbox"
                      style={{ height: "50", float: "left", marginLeft: "4%" }}
                    />
                    <br />
                    <br />
                  </label>
                  <button
                    onClick={handleBackClick}
                    className="button-2-back"
                    style={{ float: "left", marginTop: "2%" }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="button-1-step"
                    style={{ float: "right", marginTop: "2%" }}
                  >
                    Send Invitation
                  </button>
                  <div
                    onClick={handleSkipClick}
                    style={{
                      float: "right",
                      marginTop: "3.2%",
                      textDecoration: "none",
                      marginRight: "8%",
                      color: "#2D3B51 !important",
                      cursor: "pointer",
                    }}
                  >
                    Skip
                  </div>
                </div>
              </form>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
