import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AssetTable from './AssetTable';
import Active from './Active';
import { Typography } from '@mui/material';
import Vulnerability from './Vulnerability';
function createData(name) {
    return { name };
  }
  
  const rows = [
    createData('Frozen yoghurt'),
    createData('Ice cream sandwich'),
    createData('Eclair'),
    createData('Cupcake'),
    createData('Gingerbread'),
  ];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ActiveVuln() {
  return (
    <div className='active-vuln'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className='active-feed'>
            <Typography variant='h5' sx={{padding:'10px', position:'absolute', backgroundColor:'#fff', width:'65vh', marginTop:'-0.4%'}}>Activity Feed</Typography>
            <br/><br/><div><Active /></div>
        </div>
        </Grid>
        <Grid item xs={6}>
          <div className='vulnerability-feed'>
          <Typography variant='h5' sx={{padding:'10px', position:'absolute', backgroundColor:'#fff', width:'65vh', marginTop:'-0.4%'}}>Vulnerability Feed</Typography>            <Vulnerability />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}