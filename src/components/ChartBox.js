import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Active from './Active';
import CommonCVE from './CommonCVE';
import { Typography } from '@mui/material';
import { Nut } from './Doughnut';
import { SemiNut } from './SemiNut';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Bar, Bars } from './Bar';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height:'100px',
    color: theme.palette.text.secondary,
  }));

export default function ChartBox() {
  return (
    <div className='dashboard-box'>
        <div className='chart-box'>
            <div className='chartpage-grid'>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <div className='box-number' style={{backgroundColor:"#F5F5F5"}}><h1>6</h1>
                <div className='box-2'>Total Assets</div>
                </div>  
            </Grid>
            <Grid item xs={2}>
                <div className='box-number' style={{backgroundColor:"#F5F5F5"}}><h1>20</h1>
                <div className='box-2'>Total Vulnerabilities</div></div>
            </Grid>
            <Grid item xs={2}>
               <div className='box-number' style={{backgroundColor:"#CE3733"}}><h1>8</h1>
               <div className='box-2'>Critical</div></div>
            </Grid>
            <Grid item xs={2}>
                <div className='box-number' style={{backgroundColor:"#EC8830"}}><h1>4</h1>
                <div className='box-2'>High </div></div>
            </Grid>
            <Grid item xs={2}>
                <div className='box-number' style={{backgroundColor:"#FDBC2C"}}><h1>3</h1>
                <div className='box-2'>Medium</div></div>
            </Grid>
            <Grid item xs={2}>
                <div className='box-number' style={{backgroundColor:"#37A440"}}><h1>5</h1>
                <div className='box-2'> Low</div></div>
            </Grid>
        </Grid>
        </div>
        <div className='left-chart'>
        <div>
        <FormControl>
        <InputLabel sx={{color:'#000', }}>All</InputLabel>
        <Select
        sx={{width:'60vh',  height:'45px',backgroundColor:"#D9D9D940",border:'0px solid rgba(0, 0, 0, 0.25)', borderRadius:'5px'}}
          labelId="demo-simple-select-label"
        //   id="demo-simple-select"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        >
          <MenuItem value={10}>Asset 1</MenuItem>
          <MenuItem value={20}>Asset 2</MenuItem>
          <MenuItem value={30}>Asset 3</MenuItem>
        </Select>
      </FormControl>
          
            
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <div><SemiNut /></div>
            </Grid>
            <Grid item xs={6}>
                <div className='chart-risk-score'>A</div>
                <div className='risk-score-text'>&nbsp;&nbsp;&nbsp;&nbsp;Risk Score</div>
            </Grid>
            <Grid item xs={6}>
                <div><Nut /></div>
            </Grid>
            <Grid item xs={6}>
                <div><Bars /></div>
            </Grid>
            </Grid>
            
            
        </div>
    
        <div className='right-chart'>
           <div style={{background:'#fff', position:'relative'}}><Typography sx={{backgroundColor:"#D9D9D940", padding:"10px", border:'1px solid rgba(0, 0, 0, 0.25)', borderRadius:'5px', position:'absolute', width:'78vh',transparent:'0', marginLeft:'0.1%'}}><b>Top Vulnerabilities &nbsp;&nbsp;&nbsp;    |&nbsp;&nbsp;&nbsp;</b>Most Common CVE</Typography><br/><br/></div>
           <CommonCVE />
        </div>
        </div>
        </div>)}
    
   

