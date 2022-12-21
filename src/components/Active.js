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
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
function createData(data, dot) {
  return { data, dot };
}

const rows = [
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#128807'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#CE3733'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#C305B0'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#128807'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#128807'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#128807'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#128807'}} /></div>),
createData('Username (Company Name)  activity (closed the report) to resolved (changeable)',<div><FiberManualRecordRoundedIcon sx={{color:'#128807'}} /></div>),
];

export default function Active() {
    

  return (
    <div className=''>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell align="left"><b>Assets</b></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.data}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.data}
              </TableCell>
              <TableCell>
                {row.dot}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


