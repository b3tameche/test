import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import UsernameC from '../components/UsernameC'
import PasswordC from '../components/PasswordC'
import ConfirmPassC from '../components/ConfirmPassC'
import SubmitC from '../components/SubmitC'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/b3tameche">
        b3tameche
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignUp = () => {
  const [password, setPassword] = useState('')

  const onChange = (pass) => {
    setPassword(pass)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const credentials = {
      username: data.get('username'),
      passwordHash: data.get('password')
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }

    fetch('http://localhost:3001/register/addUser', requestOptions)
      .then(res => console.log(res))

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <UsernameC />
              <PasswordC onChange={onChange}/>
              <ConfirmPassC password={password}/>
            </Grid>
            <SubmitC />
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp
