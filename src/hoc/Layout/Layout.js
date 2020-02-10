import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/navigation/Navbar/Navbar';

const Layout = React.memo(props=> {
    return(
        <React.Fragment>
            <Navbar />
            <Container>
                {props.children}
            </Container>
        </React.Fragment>
    )
});

const Container = styled.div`
    margin-top : 10vh;
`;

export default Layout