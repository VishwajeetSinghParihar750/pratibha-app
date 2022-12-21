import React from 'react'
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

function DataEntry() {
  return (
    <div className='data-entry'>
        <Grid container>
    <Grid xs={4}>
    Mobile Application
    </Grid>
    <Grid xs={2}>
    6 / 10
    </Grid>
    <Grid xs={2}>
    Analyst
    </Grid>
    <Grid xs={4}>
        
    </Grid>
</Grid>
<Divider sx={{pt:2, width:'97%'}} />
</div>
  )
}

export default DataEntry