import Grid from '@mui/material/Unstable_Grid2';
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import  Typography  from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';

const Count = () => {
    const [result, setResult] = useState(0)

  const clickPush = () => {
    setResult(result + 1)
  }

  const clickMinus = () => {
    if (result > 0) {
      setResult(result - 1)
    }
  }
  return (
    <Grid container sx={{alignContent:'center', border: '1px solid rgba(0,0,0,0.1)', padding : '5px' }}>
       <Button variant="contained" sx={{padding : '10px'}} onClick={clickPush}><AddIcon sx={{fontSize: 'medium'}}/></Button>
       <Typography sx={{width : '50px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{result}</Typography>
      <Button variant="outlined" sx={{padding : '10px'}} onClick={clickMinus}><RemoveIcon sx={{fontSize: 'medium'}}/></Button>
    </Grid>
  )
}

export default Count