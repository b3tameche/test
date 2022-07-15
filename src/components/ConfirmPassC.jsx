import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const ConfirmPassC = (props) => {
  const { password } = props

  const [passC, setPassC] = useState('')

  let flag = false;
  if (passC !== password) flag = true;
  
  return (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        name="confirmPass"
        label="Confim Password"
        id="confirmPass"
        type="password"
        onBlur={e => {
          setPassC(e.target.value)
        }}
      />
    </Grid>
  )
}

export default ConfirmPassC