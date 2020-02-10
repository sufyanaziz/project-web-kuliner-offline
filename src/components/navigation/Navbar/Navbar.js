import React from 'react';
import classes from './Navbar.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Medsos from '../Medsos/Medsos';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Navbar = () => {
    return(
        <header className={classes.Navbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className= {classes.Desktop}>
                <NavigationItems/>
            </div>
            <div className={classes.Sosial}>
                <Medsos />
            </div>
            <DrawerToggle />
        </header>
    )
}
export default Navbar;