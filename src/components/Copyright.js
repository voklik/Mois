import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

class Copyright extends Component {

    render() {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...this.props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    FimTravel Agency
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

}

export default Copyright;