import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const PasswordC = (props) => {
  const {onChange} = props

  return (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        type="password"
        onBlur={e => {onChange(e.target.value)}}
      />
    </Grid>
  )
}

export default PasswordC