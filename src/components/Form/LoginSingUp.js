import React, { useState } from 'react';
import { Facebook, GitHub, Google, Twitter } from '@mui/icons-material';
import { Button, Checkbox, Container, FormControlLabel, Tab, Tabs, TextField } from '@mui/material';



function LoginSingUp() {
  const [activeTab, setActiveTab] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Registration successful');

    setActiveTab(0);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log('Login successful');
  };

  return (
    <Container className="p-3 my-5 d-flex flex-column w-50">
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>

      <div>
        <form onSubmit={handleLogin} style={{ display: activeTab === 0 ? 'block' : 'none' }}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <Facebook fontSize="small" />
              </Button>

              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <Twitter fontSize="small" />
              </Button>

              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <Google fontSize="small" />
              </Button>

              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <GitHub fontSize="small" />
              </Button>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <TextField
            className="mb-4"
            label="Email address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className="mb-4"
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <FormControlLabel
              control={<Checkbox name="flexCheck" value="" color="primary" />}
              label="Remember me"
            />
            <a href="#!">Forgot password?</a>
          </div>

          <Button className="mb-4 w-100" variant="contained" color="primary" type="submit">
            Sign in
          </Button>

          <p className="text-center">
            Not a member?{' '}
            <a href="#!" onClick={() => setActiveTab(1)}>
              Register
            </a>
          </p>
        </form>

        <form onSubmit={handleRegister} style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <Facebook fontSize="small" />
              </Button>

              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <Twitter fontSize="small" />
              </Button>

              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <Google fontSize="small" />
              </Button>

              <Button color="none" className="m-1" style={{ color: '#1266f1' }}>
                <GitHub fontSize="small" />
              </Button>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <TextField
            className="mb-4"
            label="First Name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            className="mb-4"
            label="Last Name"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            className="mb-4"
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className="mb-4"
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-center mb-4">
            <FormControlLabel
              control={<Checkbox name="flexCheck" id="flexCheckDefault" color="primary" />}
              label="I have read and agree to the terms"
            />
          </div>

          <Button className="mb-4 w-100" variant="contained" color="primary" type="submit">
            Sign up
          </Button>

          <p className="text-center">
            Already a member?{' '}
            <a href="#!" onClick={() => setActiveTab(0)}>
              Login
            </a>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default LoginSingUp;
