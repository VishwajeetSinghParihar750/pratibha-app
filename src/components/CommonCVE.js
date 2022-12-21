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
import { Box, Typography } from '@mui/material';

import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
function createData(data, dot,box) {
  return { data, dot,box };
}

const rows = [
    
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>),
    createData(<><div><Box sx={{color:'#fff', backgroundColor:"#CE3733", height:'30px', width:'100px', textAlign:'center', verticalAlign:'center', borderRadius:'3px'}} variant="contained"><Typography variant='h6'>Critical</Typography></Box>
    </div></>,'MS17-010: Security Update for Microsoft Window...',<><div className='box-chart-small'>1</div></>)
    ];

export default function CommonCVE() {
    

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
              <TableCell align='left'>
                {row.dot}
              </TableCell>
              <TableCell align='left'>
                {row.box}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


