/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import '../styles/App.css';
import {
  Toolbar,
  IconButton,
  AppBar,
  Menu,
  makeStyles,
  Typography,
  LinearProgress,
  withStyles,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import strings from "../localization";
import API from "../hooks/ApiHooks";
import LocalStorageOperations from "../hooks/LocalStorageOperations";
import {Restaurant} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff"
  },
  toolBar: {
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  appBar: {
    position: "static",
    backgroundColor: "#108EE9",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  iconButton: {
    color: "white",
  },
  margin: {
    margin: theme.spacing(1),
    border: 1
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: '10%',
    height: 'auto',
  },
  menu: {
    marginLeft: "",
    edge:"end" ,
    color:"inherit",

  },
  progressLabel: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    maxHeight: "50px", // borderlinearprogress root.height
    textAlign: "center",
    textColor: "#000000",
    display: "flex",
    alignItems: "center",
    "& span": {
      width: "100%"
    }}
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 50,
    backgroundColor: ("White"),
    border: 5,
    borderColor: "#000000"
  },
  bar: {
    backgroundColor: "#108EE9",
    borderColor: "#707070",
    border: 1,
    m: 1,
    bgColor: 'background.paper',
    style: { width: '5rem', height: '5rem' }
  },
})(LinearProgress);




const P5 = (props) =>{

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyle();

  return(
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton className={classes.homeButton} edge="start" color="inherit" >
              <HomeIcon />
            </IconButton>
              <img src={require('../assets/logo_mycampus.png')}
                   className={classes.logo}
                   alt={strings.logoAlt}/>
            <IconButton className={classes.menu}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Restaurant</MenuItem>
              <MenuItem onClick={handleClose}>Parking 5</MenuItem>
              <MenuItem onClick={handleClose}>Parking 10</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <h1>Inside levels of P5</h1>
        <h3>Live Utilization</h3>
        <div className={classes.progressLabel}>
          <span>50%</span>
        </div>
        <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            value={50}
        />
      </div>
  )
};

export default P5;