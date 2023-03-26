import { Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../storeHooks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { AppState } from '../../interface';
import { FETCH_USER_AUTHENTICATION } from '../../reducers/login';
import Link from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import { SET_CREDENTIALS } from '../../reducers/login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import dttLogo from '../../assets/dtt_logo_transparent.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef: React.Ref<HTMLInputElement> = useRef(null);
  const errorRef = useRef(null);
  const dispatch = useAppDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    isLoading: false
  });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const token = useSelector((state: AppState) => state.login.token);

  const handlePasswordVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    if (token !== '') {
      setValues({ ...values, isLoading: false });
      navigate('/destination');
    }
  }, [token]);

  const handleSignIn = () => {
    dispatch(FETCH_USER_AUTHENTICATION({ email: values.email, password: values.password }));
    setValues({ ...values, email: '', password: '', isLoading: true });
    return;
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} direction="column" justifyContent={'center'} style={{ minHeight: '100vh' }}>
        <Paper elevation={10} sx={{ padding: 5, margin: '20px auto', width: 300 }}>
          <Grid container direction="row" justifyContent="center">
            <a href="https://www.dreamteamtravels.com.au/" target="_blank">
              <img src={dttLogo} className="logo" alt="Dream Team Travels logo" width={250} height={150} />
            </a>
          </Grid>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                inputRef={emailRef}
                type="email"
                fullWidth
                label="Enter your email"
                placeholder="Email Address"
                variant="outlined"
                value={values.email}
                onChange={(e: { target: { value: any } }) => setValues({ ...values, email: e.target.value })}
              />
            </Grid>
            <Grid item>
              <TextField
                type={values.showPassword ? 'text' : 'password'}
                fullWidth
                label="Enter your password"
                placeholder="Password"
                variant="outlined"
                autoComplete="off"
                value={values.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility} aria-label="toggle password" edge="end">
                        {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                onChange={(e: { target: { value: any } }) => setValues({ ...values, password: e.target.value })}
              />
            </Grid>
            <Grid item>
              <LoadingButton
                loading={values.isLoading}
                fullWidth
                variant="contained"
                type="submit"
                loadingPosition="start"
                startIcon={<LoginIcon />}
                onClick={handleSignIn}
              >
                <span>Sign In</span>
              </LoadingButton>
            </Grid>
          </Grid>
          <Grid container direction="column" justifyContent="left" style={{ marginTop: '10px' }}>
            <Grid item>
              <Typography gutterBottom variant="body2" component="div">
                Need an account?
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="body2" component="div">
                <Link href="/sign-up" variant="body2">
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
