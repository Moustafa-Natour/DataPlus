import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';

const rightLink = {
    fontSize: { xs: 9, sm: 12, md: 16 },
    color: 'common.white',
    ml: 1,
};

function AppAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Box />
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-start',
                            height: 'auto',
                            width: 'auto',
                        }}
                    >
                        <Link
                            variant="a"
                            align="center"
                            underline="none"
                            href="/"
                            sx={{
                                fontSize: 24,
                                mt: 3,
                                height: 'auto',
                                width: 'auto',
                            }}
                        >
                            <img
                                src="/android-chrome-512x512.png"
                                alt="DATA PLUS"
                                width="160"
                                height="120"
                            />
                        </Link>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Link
                            variant="h6"
                            underline="none"
                            aria-haspopup="true"
                            onMouseEnter={handleMenuOpen}
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'Internet'}
                        </Link>
                        <Popover
                            open={isMenuOpen}
                            anchorEl={anchorEl}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            PaperProps={{
                                style: {
                                    minWidth: '200px',
                                    maxWidth: '300px',
                                },
                            }}
                        >
                            <MenuItem onClick={handleMenuClose} component="a" href="/internet-section1">
                                Section 1
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/internet-section2">
                                Section 2
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/internet-section3">
                                Section 3
                            </MenuItem>
                        </Popover>

                        <Link
                            variant="h6"
                            underline="none"
                            href="/tvsub"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'TV Bundles'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/faq"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'FAQ'}
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;
