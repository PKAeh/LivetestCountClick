import React from 'react'
import DisplayCount from './components/DisplayCount';
import Grid from '@mui/material/Unstable_Grid2';


function App() {
  return (
    <Grid container sx={{ width: '100vw', height: '100vh', justifyContent: 'center', alignContent: 'center' }} >
      <DisplayCount />
    </Grid>
  )
}

export default App;
