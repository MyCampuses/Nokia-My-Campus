/*
<<<<<<< HEAD
    This class holds the style for the top navigation bar and
    all the elements in it, including menu items.
=======
    Made by Atholos
    This function holds the style for the top navigation bar and
    all the elements in the top bar, including menu items.
>>>>>>> 02c3e5aae1d20e772a7218f7ac536cb89e9f3b4c
*/
import React, {Fragment, useState} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalFunctions from "../hooks/GlobalFunctions";
import Logout from "../hooks/Logout";
import strings from "../localization";
import style from "../styles/TopNavigationBarStyle";

const NaviBar = () => {
    //Top navigation bar elements & menu bar elements
    const TopNavigationBar = () => {
        const classes = style().topBar();

        const [anchorEl, setAnchorEl] = useState(null);
        const {onItemClickNavigate} = GlobalFunctions();
        const {removeToken} = Logout;

        const logoutOnClick = () => {
            removeToken();
            window.location.href = '/login';
        };

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
                        <img src={require('../assets/logo_mycampus.webp')}
                             alt={strings.logoAlt} className={classes.logo}
                             onClick={() => onItemClickNavigate('/home')}
                        />

                         <section className={classes.rightToolbar}>

                            <IconButton className={classes.menu}
                                        aria-controls='menu-appbar'
                                        aria-haspopup='true'
                                        onClick={handleClick}>
                                <MenuIcon/>
                            </IconButton>
                                <Menu
                                    id='simple-menu'
                                    anchorEl={anchorEl}
                                    elevation={3}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <MenuItem onClick={() => onItemClickNavigate('/info')}>{strings.topBarMenuItemInfo}</MenuItem>
                                    <MenuItem onClick={() => onItemClickNavigate('/home')}>{strings.topBarMenuItemHome}</MenuItem>
                                    <MenuItem onClick={() => onItemClickNavigate('/restaurant')}>{strings.topBarMenuItemRestaurant}</MenuItem>
                                    <MenuItem onClick={() => onItemClickNavigate('/parking')}>{strings.topBarMenuItemParking}</MenuItem>
                                    <MenuItem onClick={() => onItemClickNavigate('/news')}>{strings.newspage}</MenuItem>
                                    <MenuItem onClick={() => logoutOnClick()}>{strings.topBarMenuItemLogout}</MenuItem>
                                </Menu>
                         </section>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    };
    return {
        TopNavigationBar
    };
};
export default NaviBar;
