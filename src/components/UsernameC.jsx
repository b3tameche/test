import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

const UsernameC = () => {
  const [username, setUsername] = useState('')
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const obtainUser = async () => {
      if (username !== "") {
        const data = await fetch(`http://localhost:3001/user/${username}`).then(data => data.json())
        if (username.length >= 5 && username.length <= 20) {
          setFlag(data.exists)
        }
      }
    }

    obtainUser();
  }, [username])

  return (
    <Grid item xs={12}>
      <TextField
        name="username"
        required
        fullWidth
        id="username"
        label="Username"
        onBlur={(e) => {
          setUsername(e.target.value)
        }}
        autoFocus
      />
    </Grid>
  )
}

export default UsernameC