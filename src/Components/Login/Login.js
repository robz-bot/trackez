import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';

function LoginForm() {
  return (
    
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh" 
    >
      <Box mb={3}>
        <h1 style={{ textDecoration: 'underline' }}>TrackEz</h1>
      </Box>
      <div className="login-form">
        <h3>Welcome to Trackez !</h3>
        <TextField
          label="Username or Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
         <Box mt={2}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>

        <Box mt={2}>
          <Button variant="contained" color="primary">
            Register!
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default LoginForm;
