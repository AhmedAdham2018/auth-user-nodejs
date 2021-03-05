import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
//import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    }
  }));

function Navbar({name , setName}) {
    const classes = useStyles();
    const logout = async () => {
      await fetch('http://localhost:8080/api/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      });

      setName('');
    };

    let menu;

    if (name === '') {
        menu = (
          <nav>
            <Link variant="button" color="textPrimary" href="/login" className={classes.link}>
              Login
            </Link>
            <Link variant="button" color="textPrimary" href="/register" className={classes.link}>
              Register
            </Link>
        </nav>);
    } else {
        menu = (
                <nav>
                  <Link variant="button" color="textPrimary" onClick={logout} className={classes.link}>
                    Logout
                  </Link>
                </nav>
        )
    }

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
            Home
          </Typography>
           {menu}
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;
