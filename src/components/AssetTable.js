import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DotButton from './DotButton';
function createData(assets, rating, totalver, severity, btn) {
  return { assets, rating, totalver, severity, btn };
}

const rows = [
  createData(' Mobile Application', '6/10', '20',
  
<ButtonGroup variant="contained" aria-label="outlined primary button group">
 <Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
 <Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
 <Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
 <Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>
</ButtonGroup>, <DotButton />

),
  createData('Website', '6/10', '20', <><ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
 <Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
 <Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
 <Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>
 
</ButtonGroup></>,<DotButton />),
  createData('Website 2', '6/10', '20', <><ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
 <Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
 <Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
 <Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>
 
</ButtonGroup></>,<DotButton />),
  createData('Mobile Application A', '6/10', '20',<><ButtonGroup variant="contained" aria-label="outlined primary button group">
     <Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
 <Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
 <Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
 <Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>
 
</ButtonGroup></>,<DotButton />),
  createData('Mobile Application B', '6/10', '20', <><ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
 <Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
 <Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
 <Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>
 
</ButtonGroup></>,<DotButton />),
createData('Mobile Application B', '6/10', '20', <><ButtonGroup variant="contained" aria-label="outlined primary button group">
<Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
<Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
<Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
<Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>

</ButtonGroup></>,<DotButton />),
createData('Mobile Application B', '6/10', '20', <><ButtonGroup variant="contained" aria-label="outlined primary button group">
<Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
<Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
<Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
<Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>

</ButtonGroup></>,<><DotButton /></>),
createData('Mobile Application B', '6/10', '20', <><ButtonGroup variant="contained" aria-label="outlined primary button group">
<Button sx={{backgroundColor:"#CE3733" , borderWidth:'0 !important'}}><b>8</b></Button>
<Button sx={{backgroundColor:"#EC8830", borderWidth:'0 !important'}}><b>4</b></Button>
<Button sx={{backgroundColor:"#FDBC2C" , borderWidth:'0 !important'}}><b>3</b></Button>
<Button sx={{backgroundColor:"#37A440" , borderWidth:'0 !important'}}><b>5</b></Button>

</ButtonGroup></>,<DotButton />),
];

export default function AssetTable() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='table-box'>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Assets</b></TableCell>
            <TableCell align="right"><b>Rating</b></TableCell>
            <TableCell align="right"><b>Total vulnerabilities</b></TableCell>
            <TableCell align="right"><b>Severity</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody sx={{overflow:'scroll !important'}}>
          {rows.map((row) => (
            <TableRow
              key={row.assets}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:"#00f"}}>
                {row.assets}
              </TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.totalver}</TableCell>
              <TableCell align="right">{row.severity}</TableCell>
              <TableCell align="right">{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


