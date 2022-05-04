import * as React from 'react';
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Auth from "../../services/AuthService";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const DestinationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChangePageDestinations = (event) => {
        event.preventDefault();
        navigate("/admin/destinations");
    };

    const [destination, setDestination] = useState([]);
    useEffect(() => {
        getDestination();
    }, [destination])

    const getDestination = () => {

            let credentials = Auth.getCredentials();

            let requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": credentials.jwt
                }
            };

            fetch(`localhost:8080/rest/api/destinations/${id}`, requestOptions)
            .then(result => {
                result.json()
                    .then(data =>
                        setDestination(data)
                    )
            })
    }

    const [destinationContacts, setDestinationContacts] = useState([]);
    useEffect(() => {
        getDestinationContacts();
    }, [])

    const getDestinationContacts = () => {

        let credentials = Auth.getCredentials();

        let requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": credentials.jwt
            }
        };

        fetch(`localhost:8080/rest/api/destination-contacts/${id}`, requestOptions)
            .then(result => {
                result.json()
                    .then(data =>
                        setDestinationContacts  (data)
                    )
            })
    }


    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid container xs={12} md={12} lg={12}>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleChangePageDestinations}>List destinací</Button>
                        <Button variant="contained" onClick={handleChangePageDestinations}>Deaktivovat destinaci</Button>
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
                            {"Popis"}
                        </Typography>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Název"
                            />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
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
                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        labelId="country-id"
                                        label="Stát"
                                    />
                                </Grid>
                                <Grid item xs={4} md={4} lg={4} >
                                    <InputLabel id="destination-type-id">Typ destinace</InputLabel>
                                    <TextField
                                        disabled
                                        id="outlined-disabled"
                                        labelId="destination-type-id"
                                        label="Typ destinace"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid container spacing={3}>
                                    <Grid item xs={2} md={2} lg={2}>
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            label="PSČ"
                                        />
                                    </Grid>
                                    <Grid item xs={5} md={5} lg={5} >
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            label="Město"
                                        />
                                    </Grid>
                                    <Grid item xs={5} md={5} lg={5}>
                                        <TextField
                                            disabled
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
                            {"Kontakty"}
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Typ kontaktu</TableCell>
                                        <TableCell align="right">Kontakt</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {destinationContacts.map((destinationContact) => (
                                        <TableRow
                                            key={destinationContact.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {destinationContact.name}
                                            </TableCell>

                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                disabled
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

export default  DestinationDetail;