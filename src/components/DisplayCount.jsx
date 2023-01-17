import React from 'react'
import Count from './Count';
import Grid from '@mui/material/Unstable_Grid2';

const DisplayCount = () => {
  return (
    <Grid container spacing={-3} sx={{flexDirection : 'column'}} >
      <Grid container sx={{margin : '0'}}>
        <Count />
        <Count />
        <Count />
      </Grid>
      <Grid container sx={{margin : '0'}} >
        <Count />
        <Count />
        <Count />
      </Grid>
      <Grid container sx={{margin : '0'}} >
      <Count />
        <Count />
        <Count />
      </Grid>
    </Grid>
  )
}

export default DisplayCount