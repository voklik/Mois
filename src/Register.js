import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from './components/Copyright';
import AuthService from './services/AuthService';

const Register = () => {

    const theme = createTheme();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();

        let data = new FormData(event.currentTarget);

        let object = {};
        data.forEach((value, key) => {
            object[key] = value;
        });

        AuthService.signUp(object);

        navigate("/login");

    }

    return (
        <>
            <Helmet>
                <title>Registrace</title>
            </Helmet>

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
                            Registrace
                        </Typography>
                        <Box component="form" onSubmit={submitHandler} >

                            <Grid container>
                                <Grid container spacing={1} >
                                    <Grid item md={5}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="Jméno"
                                            name="firstName"
                                            autoComplete="firstName"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item md={7}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Příjmení"
                                            name="lastName"
                                            autoComplete="lastName"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phoneNumber"
                                        label="Telefon"
                                        name="phoneNumber"
                                        autoComplete="phoneNumber"
                                    />
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item md={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="postCode"
                                            label="PSČ"
                                            name="postCode"
                                            autoComplete="postCode"
                                        />
                                    </Grid>
                                    <Grid item md={8}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="city"
                                            label="Město"
                                            name="city"
                                            autoComplete="city"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="street"
                                        label="Ulice"
                                        name="street"
                                        autoComplete="street"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        margin="normal"
                                        type="password"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Heslo"
                                        name="password"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        margin="normal"
                                        type="password"
                                        required
                                        fullWidth
                                        id="confirmPassword"
                                        label="Potvrďte heslo"
                                        name="confirmPassword"
                                    />
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={<Checkbox required={true} color="primary" />}
                                label="Kliknutím zde potvrzuji, že jsem byl seznámen/a a souhlasím s pravidly a podmínkami."
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Vytvořit účet
                            </Button>
                            {/* <Grid container>
                                <Grid item>*/}
                            <Link to="/login" variant="body1">
                                {"Již zaregistrován/a? Přihlašte se"}
                            </Link>
                            {/* </Grid>
                            </Grid>*/}
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );

}

export default Register;