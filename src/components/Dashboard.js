import { Grid } from '@mui/material';
import React from 'react'
import AssetTable from './AssetTable';
import ChartBox from './ChartBox';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ActiveVuln from './ActiveVuln';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Dashboard() {
  return (
   <>
   <div>
   <ChartBox />
   <AssetTable />
   <ActiveVuln />
   </div>
   </>
  );
}


