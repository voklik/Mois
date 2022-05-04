import * as React from 'react';
import {Link} from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import AuthService from '../services/AuthService'

export const MenuItems = () => {

    const menu = (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <Link to="/admin/users">
                    <ListItemText primary="Uživatelé" />
                </Link>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <Link to="/admin/destinations">
                    <ListItemText primary="Destinace" />
                </Link>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <Link to="/offers">
                    <ListItemText primary="Nabídky" />
                </Link>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <Link to="/my-orders">
                    <ListItemText primary="objednávky" />
                </Link>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <Link to="/my-orders">
                    <ListItemText primary="Mé objednávky" />
                </Link>
            </ListItemButton></React.Fragment>
    );


    return (
        <React.Fragment>
            {menu}
        </React.Fragment>
    )
}