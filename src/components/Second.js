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
import UserNode from "./UserNode";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import DataEntry from "./DataEntry";
import { Divider, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useSelector, useDispatch } from "react-redux";
import { stepsSliceActions } from "../store/stepsSlice";
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

function API() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        <b>Upload File</b>
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "150px", padding: "1%", border: "dashed" }}
          className="second-step-input"
          type="file"
        />
      </label>
    </>
  );
}
function NST() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        <b>IP Range (CIDR)</b>
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "50px", padding: "1%" }}
          className="second-step-input"
          placeholder="127.0.0.1 or 127.0.01/22"
          disabled
        />
      </label>
    </>
  );
}
function IOT() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        URL
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "50px", padding: "1%" }}
          className="second-step-input"
          placeholder="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_IN&gl=US&pli=1"
          disabled
        />
      </label>
    </>
  );
}
function WT() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        Website URL
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "50px", padding: "1%" }}
          className="second-step-input"
          placeholder="Type Here"
          disabled
        />
      </label>
      <FormControl>
        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Only this domain"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Want to add subdomain"
          />
          {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
    </>
  );
}
function CS() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        URL
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "50px", padding: "1%" }}
          className="second-step-input"
          placeholder="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_IN&gl=US&pli=1"
          disabled
        />
      </label>
    </>
  );
}
function IOS() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        <b>App Apple Store URL</b>
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "50px", padding: "1%" }}
          className="second-step-input"
          placeholder="127.0.0.1 or 127.0.01/22"
          disabled
        />
      </label>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        <b>Upload File</b>
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "150px", padding: "1%", border: "dashed" }}
          className="second-step-input"
          type="file"
        />
      </label>
    </>
  );
}
function Android() {
  return (
    <>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        <b>App Google Play Store URL</b>
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "50px", padding: "1%" }}
          className="second-step-input"
          placeholder="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_IN&gl=US&pli=1"
          disabled
        />
      </label>
      <div
        className="avatar-text"
        style={{
          display: "inline",
          marginLeft: "2%",
          fontSize: "20px",
          marginTop: "2%",
        }}
      >
        <b>Upload .APK File</b>
        <br />
      </div>
      <br />
      <label style={{ paddingLeft: "1vh", paddingTop: "50vh" }}>
        <input
          style={{ height: "150px", padding: "1%", border: "dashed" }}
          className="second-step-input"
          type="file"
        />
      </label>
    </>
  );
}

const rows = [
  createData("Mobile Application", "6/10", "Analyst", " "),
  createData("Mobile Application", "6/10", "Analyst", " "),
  createData("Mobile Application ", "6/10", "Analyst", " "),
  createData("Mobile Application ", "6/10", "Analyst", " "),
];
function DropDownOption(props) {
  const isNum = props.value;
  if (isNum === 1) return <API />;
  if (isNum === 2) return <WT />;
  if (isNum === 3) return <NST />;
  if (isNum === 4) return <IOS />;
  if (isNum === 5) return <Android />;
  if (isNum === 6) return <IOT />;
  if (isNum === 8) return <CS />;
}

export default function Second() {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.steps.activeStep);

  let navigate = useNavigate();

  const handleNextClick = (e) => {
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
  console.log(age);

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
                  <div>
                    <b>Description</b>
                  </div>

                  <div>
                    Lorem ispum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna.
                  </div>
                  <input className="second-step-input" />
                </div>

                <div>
                  <div>
                    <div className="avatar-text">
                      <b>Category</b>
                    </div>

                    <div>
                      <Select
                        sx={{
                          width: "125.2vh",
                          height: "45px",
                          backgroundColor: "#D9D9D940",
                          border: "0px solid rgba(0, 0, 0, 0.25)",
                          borderRadius: "5px",
                        }}
                        labelId="demo-simple-select-label"
                        //   id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        //   onChange={handleChange}
                      >
                        <MenuItem value={1}>API Testing</MenuItem>
                        <MenuItem value={2}>Website Testing</MenuItem>
                        <MenuItem value={3}>Network Security Testing</MenuItem>
                        <MenuItem value={4}>iOS</MenuItem>
                        <MenuItem value={5}>Android</MenuItem>
                        <MenuItem value={6}>IOT</MenuItem>
                        <MenuItem value={7}>Hardware Testing</MenuItem>
                        <MenuItem value={8}>Cloud Solution</MenuItem>
                        <MenuItem value={9}>Others</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <DropDownOption value={age} />
                  </div>

                  <div>
                    <div>
                      <b>Tags (Optional)</b>
                    </div>

                    <input
                      style={{ height: "60px" }}
                      className="second-step-input"
                    />
                  </div>

                  <button
                    className="button-2-back"
                    style={{ float: "left", marginTop: "2%" }}
                    onClick={handleBackClick}
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="button-1-step"
                    style={{ float: "right", marginTop: "2%" }}
                  >
                    Next Step
                  </button>
                </div>
              </form>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
