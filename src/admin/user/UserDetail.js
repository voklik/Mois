import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from "@mui/material/Checkbox";

import Auth from "../../services/AuthService";

const columns = [
    { id: 'firstName', label: 'Jméno', minWidth: 170 },
    { id: 'lastName', label: 'Příjmení', minWidth: 100 },
    { id: 'email',  label: 'Email', minWidth: 170 },
    { id: 'phoneNumber', label: 'Telefonní číslo', minWidth: 170, align: 'right' },
    { id: 'active', label: 'Aktivní', minWidth: 50, align: 'right', format: (value) => {return <Checkbox checked={!!value} disabled />} },
];

const UserDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleChangePageUsers = (event) => {
        event.preventDefault();
        navigate("/admin/users");
    };

    const userInitial = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        active: false,
        address: {
            id: 0,
            postCode: '',
            city: '',
            street: ''
        },
        role: {
            id: 0,
            name: ''
        }
    }

    const [user, setUser] = useState(userInitial);
    useEffect(() => {
        getUser();
    }, [user])

    const getUser = () => {
        let credentials = Auth.getCredentials();

        let requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": credentials.jwt
            }
        };


        fetch(`http://localhost:8080/rest/api/users/${id}`, requestOptions)
            .then(result => {
                result.json()
                    .then(data =>
                            setUser(data)
                    )
            })
    }

    const handleSwitchActive = (event) => {
        event.preventDefault();

        let credentials = Auth.getCredentials();

        let requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": credentials.jwt
            }
        };

        fetch(`http://localhost:8080/rest/api/users/deactive/${id}`, requestOptions)
            .then(result => {
                result.json()
                    .then(data =>
                        user.active = data.active
                    )
            })
    }
    
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid container xs={12} md={12} lg={12}>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleChangePageUsers}>List uživatelů</Button>
                        <Button variant="contained" onClick={handleSwitchActive}>
                            {user.active ? "Zneaktivnit uživatele" : "Zaktivovat uživatele" }
                        </Button>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4} lg={4} >

                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            {"Uživatel"}
                        </Typography>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Jméno"
                                value={user.firstName}
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Příjmení"
                                value={user.lastName}
                            />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            {"Kontakty"}
                        </Typography>
                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Email"
                                value={user.email}
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Telefonní číslo"
                                value={user.phoneNumber}
                            />
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            {"Adresa"}
                        </Typography>
                        <Grid container xs={12} md={12} lg={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={4} md={4} lg={4} >
                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        label="PSČ"
                                        value={user.address.postCode}
                                    />
                                </Grid>
                                <Grid item xs={8} md={8} lg={8} >
                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        label="Město"
                                        value={user.address.city}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container xs={12} md={12} lg={12} >
                                <Grid item >
                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        label="Ulice"
                                        value={user.address.street}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            {"Objednávky"}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )

}

export default UserDetail;