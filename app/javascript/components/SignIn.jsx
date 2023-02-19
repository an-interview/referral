import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            theme: createTheme(),
            loginError: false
        };
    }

    processSubmit(data) {
        if (data.status == 401) {
            alert('Invalid Email OR Password');
            this.setState({loginError: true});
        }
        console.log(this.state);
    }

    handleSubmit() {
        console.log('submitting....');
        fetch('http://localhost:3000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'email', password: 'password'})
        })
            .then((data) => this.processSubmit(data))
        .catch((error) => {
          console.error('Error:', error);
        });

    } 


  render() {
    return (
    <ThemeProvider theme={this.state.theme}>
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
            Sign in
          </Typography>
          {this.state.loginError && <Alert severity="error">Invalid Email OR Password</Alert> }
          <Box component="form" onSubmit={this.handleSubmit.bind(this)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={this.state.loginError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
  
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
  
        </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  }
}
