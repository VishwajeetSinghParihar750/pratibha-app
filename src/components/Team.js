import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UserNode from './UserNode';

const inputField ={
    boxSizing: "border-box",
    // position: "absolute",
    width: "189px",
    // height: "44px",
    background: "rgba(217, 217, 217, 0.25)",
    border: "1px solid rgba(0, 0, 0, 0.25)",
    borderRadius: "5px"
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
//   backDrop:'10px',
//   p: 4,
};
const styleField={
    // p: 4,
    marginTop:"10px",
    marginLeft:"3%",
    paddingLeft:"40px",
    boxSizing: "border-box",
    position: "absolute",
    width: "748px",
    height: "50px",
    background: "rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius:" 5px"
};

function createData(assets, rating, position, review) {
  return { assets, rating, position, review };
}

const rows = [
  createData('Mobile Application', '6/10', 'Analyst',' '),
  createData('Mobile Application', '6/10', 'Analyst', ' '),
  createData('Mobile Application ', '6/10', 'Analyst', ' '),
  createData('Mobile Application ', '6/10', 'Analyst',' '),

]

export default function AssetTable() {
    const [age, setAge] = React.useState('');
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
    <div className='team-box'>
        <div style={{float:'left'}}>Team Members</div>
        <div style={{float:'right'}}><Button onClick={handleOpen} className='team-add-button'>Add</Button>
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="team-modal">
          <div className='heading-modal'>
          Add New Member
          </div>
          <div className='modal-line'></div>
          <div><Typography id="modal-modal-description" sx={{ pl: 3,pt:2 }}>
          Email Address
          </Typography>
          <input style={styleField} />
          </div>
          <div className='blank-box'>Asset List</div>
          <div className='asset-list'>
        
            <li style={{paddingBottom:'40px'}}>
                <div style={{float:'left'}}>Mobile Application</div>
        <div style={{float:'right'}}>
        <FormControl sx={inputField} fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
            </li><br />
            <li style={{paddingBottom:'40px'}}>
                <div style={{float:'left'}}>Team Members</div>
        <div style={{float:'right'}}>
        <FormControl sx={inputField} fullWidth>
        <InputLabel id="demo-simple-select-label">Agfee</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
            </li><br />
            <li style={{paddingBottom:'40px'}}>
                <div style={{float:'left'}}>Mobile Application</div>
        <div style={{float:'right'}}>
        <FormControl sx={inputField} fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
            </li><br />
            <li style={{paddingBottom:'40px'}}>
                <div style={{float:'left'}}>Team Members</div>
        <div style={{float:'right'}}>
        <FormControl sx={inputField} fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
            </li><br />
            <div className='modal-last-line'></div>
            <div style={{float:'right'}}><button className='team-add-button-modal'>Add</button></div>
            <div style={{float:'right', paddingTop:'25px',paddingRight:'15px'}}>Cancel</div>
            
        
          </div>
        </Box>
      </Modal>
        </div>
        <div className='user-node'>
    <UserNode />
    </div>
    </div>
  );
}

