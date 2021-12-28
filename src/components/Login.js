import { Container, Grid } from '@material-ui/core';
import React from 'react';

const Login = () => {
    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                Login
            </Grid>
        </Container>
    )
}

export default Login;
