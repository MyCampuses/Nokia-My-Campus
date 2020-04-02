import React, {Fragment, useState} from 'react';
import {AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalFunctions from "../hooks/GlobalFunctions";

const useStyle = makeStyles((theme) => ({
    toolBar: {
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    appBar: {
        position: "static",
        backgroundColor: "#108EE9",
    },
    iconButton: {
        color: "white",
    },
    homeButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    menu: {
        marginLeft: "",
        edge:"end" ,
        color:"inherit",
    },
}));

const Navibar = () => {
    const TopNavigationbar = () => {
        const classes = useStyle();

        const [anchorEl, setAnchorEl] = useState(null);
        const {onItemClickNavigate} = GlobalFunctions();

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };


        const handleClose = () => {
            setAnchorEl(null);
        };


        return (
            <Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <IconButton className={classes.homeButton} edge="start" color="inherit">
                            <HomeIcon/>
                        </IconButton>
                        <Typography variant="h5" className={classes.logo}>
                            Nokia My Campus
                        </Typography>
                        <IconButton className={classes.menu}
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => onItemClickNavigate('home')}>Home</MenuItem>
                            <MenuItem onClick={() => onItemClickNavigate('restaurant')}>Restaurant</MenuItem>
                            <MenuItem onClick={() => onItemClickNavigate('p5')}>Parking 5</MenuItem>
                            <MenuItem onClick={() => onItemClickNavigate('p10')}>Parking 10</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    };
    return {
        TopNavigationbar
    };
};
export default Navibar;