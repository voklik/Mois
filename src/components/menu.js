import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Button
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navlinks: {
      display: "flex",
    },
    link: {
        textDecoration: 'none',
        borderRight: '1px solid white',
        color: 'white',
        height: 48,
        padding: '5px 30px 5px 30px',
        marginLeft: '10px',
        "&:hover": {
            color: "black"
          },
    },
    lang: {
        textDecoration: 'none',
        color: 'blue',
        backgroundColor: "white",
        height: 48,
        padding: '5px 30px 5px 30px',
        marginLeft: '10px',
        "&:hover": {
            color: "black"
          },
    }
  });


function Navbar() {
 const classes = useStyles();
 const {t, i18n} = useTranslation('common');
    

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.navlinks}>
          <div>
           <Button variant="contained" className={classes.lang} onClick={() => i18n.changeLanguage('cs')}>CZ</Button>
           <Button variant="contained" className={classes.lang} onClick={() => i18n.changeLanguage('en')}>EN</Button>
          </div>
          <div>
            <Link className={classes.link} to="/search">
                {t('menu.search')}
            </Link>
            <Link className={classes.link} to="/about">
                {t('menu.destinations')}
            </Link>
            <Link className={classes.link} to="/contact">
                {t('menu.tours')}
            </Link>
            <Link className={classes.link} to="/lastminute">
                {t('menu.lastminute')}
            </Link>
          </div>
          <div>
              <Link className={classes.link} to="/login">
                {t('menu.login')}
              </Link>
              <Link className={classes.link} to="/signin">
                {t('menu.signin')}
              </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;