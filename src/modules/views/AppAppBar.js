import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function AppAppBar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Box />
                    <Link
                        variant="h1"
                        underline="none"
                        color="inherit"
                        href="/"
                        sx={{ fontSize: 24, mt: 3, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img
                            src="/android-chrome-512x512.png"
                            alt="DATA PLUS"
                            width="160"
                            height="120"
                            sx={{ align: 'center' }}
                        />
                    </Link>
                    {/* <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="/signin"
                            sx={rightLink}
                        >
                            {'Sign In'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/signup"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'Sign Up'}
                        </Link>
                    </Box> */}
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;