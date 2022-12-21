import React from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import DataEntry from './DataEntry';
import { Divider, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const inputField ={
    // boxSizing: "border-box",
    // position: "absolute",
    width: "189px",
    // height:'45px',
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

const styleEdit = {
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

function UserNode() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
};      

    const [openModal, setOpen] = React.useState(false);
    const [openModalEdit, setOpenEdit] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
      // setOpenEdit(false);
    }
    const handleOpenEdit = () => setOpenEdit(true);
    const handleModalClose = () => setOpen(false);
    const handleClose = () => {
        // setAnchorEl(null);
        setOpen(false);
      };
      const handleCloseEdit = () => {
        // setAnchorEl(null);
        setOpenEdit(false);
      };

  return (
    <div>
        <div className='user-top'>
        <Grid container>
            <Grid><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Grid>
            <div className='avatar-text' style={{display:'inline', paddingLeft:'10px'}}><b>Tina Verma</b><br/> tinaverma@gmail.com</div><br/>
            <div className='edit-button'><Button onClick={handleOpenEdit}><EditIcon /></Button>
            <Modal
              open={openModalEdit}
              onClose={handleCloseEdit}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
        <Box sx={styleEdit} className="edit-modal">
          <div className='heading-modal'>
          Edit Member
          </div>
          {/* <div className='modal-last-line'></div> */}
          <div className='blank-box-edit'>Asset List</div>
            <div style={{paddingLeft:'3%', paddingTop:'10%', paddingRight:'2%'}}>
            <li style={{paddingBottom:'40px'}}>
                <div style={{float:'left', paddingTop:'2%'}}>Mobile Application</div>
        <div style={{float:'right', height:'45px'}}>
        <FormControl sx={inputField}>
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
                <div style={{float:'left', paddingTop:'2%'}}>Mobile Application</div>
        <div style={{float:'right'}}>
        <FormControl sx={inputField} fullWidth>
        <InputLabel id="demo-simple-select-label">Analyst</InputLabel>
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
            </div>
          <div className='blank-box-edit'>Add More Assets</div>
          <div style={{paddingLeft:'3%', paddingTop:'10%', paddingRight:'2%'}}>
            <li style={{paddingBottom:'40px'}}>
                <div style={{float:'left', paddingTop:'2%'}}>Mobile Application</div>
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
                <div style={{float:'left', paddingTop:'2%'}}>Mobile Application</div>
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
                <div style={{float:'left', paddingTop:'2%'}}>Mobile Application</div>
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
                <div style={{float:'left', paddingTop:'2%'}}>Mobile Application</div>
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
            </div>
            <div style={{paddingTop:'5px', paddingLeft:'4%'}}>
              <Button onClick={handleOpen}><DeleteOutlineOutlinedIcon sx={{color:'#F10606'}} /><div style={{display:'inline-block', paddingTop:'-3%'}}>Delete Permanently</div></Button>
              <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="delete-modal">
          <div className='heading-modal'>
          Delete Member
          </div>
          
  
            <div className='modal-last-line'></div>
            <div style={{paddingLeft:'3%', paddingTop:'2%'}}>Are you sure, you want to delete member permanently ?</div>
            <div style={{float:'right', paddingRight:'10px'}}><button className='team-add-button-modal'>Yes</button></div>
            <div style={{float:'right', paddingTop:'25px',paddingRight:'55px'}}>No</div>
        </Box>
      </Modal>
              
            </div>
          <div>
            <div style={{float:'right', paddingRight:'10px'}}><button className='team-add-button-modal'>Yes</button></div>
            <div style={{float:'right', paddingTop:'25px',paddingRight:'55px'}}>No</div>
            </div>
        </Box>
      </Modal>

      {/* //Delete member */}
      
            </div>
        </Grid>
        
        </div>
        <div className='user-blank-strip'>
        <Grid container>
            <Grid xs={4}>
                Assets
            </Grid>
            <Grid xs={2}>
                Rating
            </Grid>
            <Grid xs={2}>
                Position
            </Grid>
            <Grid xs={4}>
                Review
            </Grid>
        </Grid>
        </div>
        <DataEntry />
        <DataEntry />
        <DataEntry />
    </div>
  )
}

export default UserNode