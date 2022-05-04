import React     from 'react'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Copyright(props) {

        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'SPHH© '}
                <Link color="inherit" to="/">
                    FimTravel Agency
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );

}

export default Copyright;