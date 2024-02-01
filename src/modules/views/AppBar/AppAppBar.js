// components/AppAppBar.js
import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';
import AppBarMenu from './AppBarMenu';

function AppAppBar() {


    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Box />
                    <AppBarMenu />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;
