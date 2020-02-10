import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styled from 'styled-components';

const NavigationItems = () => (
        <div className='d-flex justify-content-center align-items-center' style={{listStyle:'none'}}>
            <NavigationItem link = '/'>Home</NavigationItem>
            <NavigationItem link = '/menu'>Menu</NavigationItem>
            <NavigationItem link = '/order-online'>Order</NavigationItem>
            <NavigationItem link = '/about-us'>About Us</NavigationItem>
        </div>
);




export default NavigationItems;