import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import InfoIconOutline from '@mui/icons-material/InfoOutlined';

import AuthService from "../../services/AuthService";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const columns = [
    { id: 'destination-type', label: 'Typ destinace', minWidth: 100 },
    { id: 'country', label: 'Stát', minWidth: 170 },
    { id: 'name', label: 'Název', minWidth: 100 },
    { id: 'active', label: 'Aktivní', minWidth: 50, align: 'right', format: (value) => { return <Checkbox checked={!!value} disabled /> } },
    { id: 'control-elements', label: '', minWidth: 100 },
];

const Destinations = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangePageDestinations = (event) => {
        event.preventDefault();
        navigate("/admin/destinations/create");
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        getDestinations();
    }, [destinations])

    const getDestinations = () => {

        let credentials = AuthService.getCredentials();

        let requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": credentials.jwt
            }
        };

        fetch(`http://localhost:8081/rest/api/destinations/${page}/${rowsPerPage}`, requestOptions)
            .then((result => {
                result.json().then((data) => {
                    if(data.content.length !== 0)
                        setDestinations(data.content);
                    else
                        setDestinations([]);
                });
            }));
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Grid container xs={12} md={12} lg={12}>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" onClick={handleChangePageDestinations}>Formulář pro přidání destinace</Button>
                </Stack>
            </Grid>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Divadlo
                            </TableCell>
                            <TableCell>
                                Slovensko
                            </TableCell>
                            <TableCell>
                                Vysoke tatry
                            </TableCell>
                            <TableCell>

                            </TableCell>
                            <TableCell>
                                Ano
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Hotel
                            </TableCell>
                            <TableCell>
                                Chorvatsko
                            </TableCell>
                            <TableCell>
                                Podgora
                            </TableCell>
                            <TableCell>

                            </TableCell>
                            <TableCell>
                                Ano
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            destinations.map((destination) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={destination.email}>
                                        {
                                            columns.map((column) => {
                                                const value = destination[column.id];
                                                if(column.id !== 'control-elements')
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'boolean'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                if(!!destination)
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <Link to={`/admin/destinations/${destination.id}`}>
                                                                <InfoIconOutline/>
                                                            </Link>
                                                        </TableCell>
                                                    );
                                            })
                                        }
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={destinations.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default Destinations;