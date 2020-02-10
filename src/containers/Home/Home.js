import React, {useEffect} from 'react';
import classes from './Home.module.css';
import {Link} from 'react-router-dom';

import Header from '../../components/ui/Header/Header';
import Button from '../../components/ui/Button/Button';
import Footer from '../../components/ui/Footer/Footer';
const Home = React.memo(props => {

    return(
        <React.Fragment>
            <Header headerType='Home'>
                <div className={classes.Home}>
                    <div className={classes.Container}>
                        <div className={classes.ContainerTitle}>
                            <h1>Foodie</h1>
                            <p>The Best <strong>Cuisine</strong> In Town</p>
                            <div className={classes.Button}>
                                <Link to='/menu'><Button>Menu</Button></Link>
                                <Link to='/order-online'><Button>Order Online</Button></Link>
                                <Link to='/about-us'><Button>About Us</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
            <Footer/>
        </React.Fragment>
    )
});

export default Home;