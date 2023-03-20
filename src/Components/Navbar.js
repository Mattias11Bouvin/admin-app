import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // set text color to white when darkMode is enabled
  },
}));

function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Admin Dashboard
          </Typography>
          <Switch checked={props.darkMode} onChange={props.handleDarkMode} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
