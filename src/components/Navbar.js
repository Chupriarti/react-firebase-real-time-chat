import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    <Button variant={"outlined"}>Login</Button>
                    <Button variant={"outlined"}>Logout</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
