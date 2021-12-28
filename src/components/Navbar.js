import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    const user = true;
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button variant={"outlined"}>Logout</Button>
                        :
                        <Button variant={"outlined"}>Login</Button>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
