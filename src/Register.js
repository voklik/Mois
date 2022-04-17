import React, { Component } from 'react';
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

import Copyright from './components/Copyright';

class Login extends Component {

    componentDidMount() {
        document.title = "Registrace | FimTravel";
    }

    render() {
        const theme = createTheme();

        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);

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
                            Registrace
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate >
                            <Grid container sx={{ mt: 1 }}>
                                <Grid item xs>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phoneNumber"
                                        label="Tel. číslo"
                                        name="phoneNumber"
                                        autoComplete="phoneNumber"
                                        autoFocus
                                    />
                                </Grid>
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
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Příjmení"
                                        name="lastName"
                                        autoComplete="lastName"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="city"
                                        label="Město"
                                        name="city"
                                        autoComplete="city"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="postCode"
                                        label="PSČ"
                                        name="postCode"
                                        autoComplete="postCode"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="street"
                                        label="Ulice"
                                        name="street"
                                        autoComplete="street"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Heslo"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="confirmPassword"
                                        label="Zopakovat heslo"
                                        name="confirmPassword"
                                        autoComplete="confirmPassword"
                                        autoFocus
                                    />
                                </Grid>

                            <FormControlLabel
                                control={<Checkbox required color="primary" />}
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
                                    <Link href="/login" variant="body1">
                                        {"Již zaregistrován/a? Přihlašte se"}
                                    </Link>
                               {/* </Grid>
                            </Grid>*/}
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        );
    }

}

export default Login;