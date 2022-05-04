import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Auth from "../../services/AuthService";



const OfferCreate = () => {
    const navigate = useNavigate();

    const handleChangePageDestinations = (event) => {
        event.preventDefault();
        navigate("/admin/destinations");
    }

    const[destinationTypesSelect, setDestinationTypeSelect] = useState([]);
    useEffect(() => {
        getDestinationTypes()
    }, [destinationTypesSelect])

    const getDestinationTypes = () => {

        let credentials = Auth.getCredentials();

        let requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": credentials.jwt
            }
        };

        fetch("localhost:8081/rest/api/destination-types/", requestOptions)
            .then(result => {
                result.json()
                    .then( data =>
                        setDestinationTypeSelect(data)
                    )
            })
    }

    const[countriesSelect, setCountriesSelect] = useState([]);
    useEffect(() => {
        getCountries()
    }, [countriesSelect])

    const getCountries = () => {

        let credentials = Auth.getCredentials();

        let requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": credentials.jwt
            }
        };

        fetch("localhost:8081/rest/api/countries/", requestOptions)
            .then(result => {
                result.json()
                    .then( data =>
                        setCountriesSelect(data)
                    )
            });
    }

    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid container xs={12} md={12} lg={12}>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleChangePageDestinations}>List destinací</Button>
                        <Button variant="contained">Vytvořit destinaci</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            {"Vytvoření destinace"}
                        </Typography>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                id="outlined-disabled"
                                label="Název"
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Popis"
                                multiline
                                rows={3}
                            />
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
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
                                    <InputLabel id="country-id">Země</InputLabel>
                                    <Select
                                        id="outlined-disabled"
                                        labelId="country-id"
                                        label="Stát"
                                    />
                                    {
                                        countriesSelect.map(
                                            country => {
                                                return (
                                                    <MenuItem value={country.id}>{country.name}</MenuItem>
                                                )
                                            }
                                        )
                                    }
                                </Grid>
                                <Grid item xs={4} md={4} lg={4} >
                                    <InputLabel id="destination-type-id">Typ destinace</InputLabel>
                                    <Select
                                        id="outlined-disabled"
                                        labelId="destination-type-id"
                                        label="Typ destinace"
                                    />
                                    {
                                        destinationTypesSelect.map(
                                            destinationType => {
                                                return (
                                                    <MenuItem value={destinationType.id}>{destinationType.name}</MenuItem>
                                                )
                                            }
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid container spacing={3}>
                                    <Grid item xs={2} md={2} lg={2}>
                                        <TextField
                                            id="outlined-disabled"
                                            label="PSČ"
                                        />
                                    </Grid>
                                    <Grid item xs={5} md={5} lg={5} >
                                        <TextField
                                            id="outlined-disabled"
                                            label="Město"
                                        />
                                    </Grid>
                                    <Grid item xs={5} md={5} lg={5}>
                                        <TextField
                                            id="outlined-disabled"
                                            multiline
                                            rows={2}
                                            label="Ulice"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
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
                                id="outlined-disabled"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                id="outlined-disabled"
                                label="Telefonní číslo"
                            />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OfferCreate;