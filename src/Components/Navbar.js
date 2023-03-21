import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  logo: {
    height: '30px',
    marginRight: '10px',
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center">
            
            <Typography variant="h6" className={classes.title}>
              React Admin Dashboard
            </Typography>
            <Switch checked={props.darkMode} onChange={props.handleDarkMode} color="default" icon={<Brightness7Icon />} checkedIcon={<Brightness4Icon />} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="temporary" anchor="left" open={openDrawer} onClose={handleDrawerClose} classes={{ paper: classes.drawerPaper }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
