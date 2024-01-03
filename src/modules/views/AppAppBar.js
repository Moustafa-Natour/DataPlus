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
    const [menuSection, setMenuSection] = React.useState(null);
    const [nestedAnchorEl, setNestedAnchorEl] = React.useState(null);

    const handleMenuOpen = (event, section) => {
        setMenuSection(section);
        setAnchorEl(event.currentTarget);
    };

    const handleNestedMenuOpen = (event) => {
        setNestedAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuSection(null);
    };

    const handleNestedMenuClose = () => {
        setNestedAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isNestedMenuOpen = Boolean(nestedAnchorEl);

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
                            onMouseEnter={(event) => handleMenuOpen(event, 'residential')}
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'Internet'}
                        </Link>
                        <Popover
                            open={isMenuOpen && menuSection === 'residential'}
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
                            <MenuItem
                                onClick={(event) => handleNestedMenuOpen(event)}
                                sx={{ cursor: 'pointer' }}
                            >
                                Residential Internet
                            </MenuItem>
                            <Popover
                                open={isNestedMenuOpen}
                                anchorEl={nestedAnchorEl}
                                onClose={handleNestedMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                    style: {
                                        minWidth: '200px',
                                        maxWidth: '300px',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleMenuClose} component="a" href="/adsl">
                                    ADSL
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose} component="a" href="/vdsl">
                                    VDSL
                                </MenuItem>
                            </Popover>
                        </Popover>

                        <Link
                            variant="h6"
                            underline="none"
                            aria-haspopup="true"
                            onMouseEnter={(event) => handleMenuOpen(event, 'corporate')}
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'Corporate Internet'}
                        </Link>
                        <Popover
                            open={isMenuOpen && menuSection === 'corporate'}
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
                            <MenuItem
                                onClick={(event) => handleNestedMenuOpen(event)}
                                sx={{ cursor: 'pointer' }}
                            >
                                Corporate Internet
                            </MenuItem>
                            <Popover
                                open={isNestedMenuOpen}
                                anchorEl={nestedAnchorEl}
                                onClose={handleNestedMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                    style: {
                                        minWidth: '200px',
                                        maxWidth: '300px',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleMenuClose} component="a" href="/broadband">
                                    Broadband
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose} component="a" href="/corporate-dsl">
                                    Corporate DSL
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose} component="a" href="/microwave">
                                    Microwave
                                </MenuItem>
                            </Popover>
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
