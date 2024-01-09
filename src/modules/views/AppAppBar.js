// components/AppAppBar.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';



const menuStyle = {
    backgroundColor: '#58a0fa', // Dark background color
    borderRadius: '8px', // Rounded corners
    boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.2)', // Box shadow for depth
};

function AppAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuSection, setMenuSection] = React.useState(null);
    const [isResidentialNestedMenuOpen, setResidentialNestedMenuOpen] = React.useState(false);
    const [residentialNestedAnchorEl, setResidentialNestedAnchorEl] = React.useState(null);
    const [isCorporateNestedMenuOpen, setCorporateNestedMenuOpen] = React.useState(false);
    const [corporateNestedAnchorEl, setCorporateNestedAnchorEl] = React.useState(null);
    const [isIPTVNestedMenuOpen, setIPTVNestedMenuOpen] = React.useState(false);
    const [iptvNestedAnchorEl, setIPTVNestedAnchorEl] = React.useState(null);

    const rightLink = {
        fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
        color: 'common.white !important',
        '&:hover': {
            color: 'common.white !important',
            textDecoration: 'none',
        },
        '&:active': {
            color: 'common.white !important',
            textDecoration: 'none',
        }

    };

    const handleMenuOpen = (event, section) => {
        setMenuSection(section);
        setAnchorEl(event.currentTarget);
        if (section === 'iptv') {
            setIPTVNestedMenuOpen(true);
            setIPTVNestedAnchorEl(event.currentTarget);
        };
    }

    const handleNestedMenuOpen = (event, menuType) => {
        if (menuType === 'residential') {
            setResidentialNestedMenuOpen(true);
            setResidentialNestedAnchorEl(event.currentTarget);
            setCorporateNestedMenuOpen(false);
        } else if (menuType === 'corporate') {
            setCorporateNestedMenuOpen(true);
            setCorporateNestedAnchorEl(event.currentTarget);
            setResidentialNestedMenuOpen(false);
        } else if (menuType === 'iptv') {
            setIPTVNestedMenuOpen(true);
            setIPTVNestedAnchorEl(event.currentTarget);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuSection(null);
        setResidentialNestedMenuOpen(false);
        setCorporateNestedMenuOpen(false);
        setIPTVNestedMenuOpen(false);

    };

    const handleNestedMenuClose = () => {
        setResidentialNestedMenuOpen(false);
        setCorporateNestedMenuOpen(false);
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
                                mt: 2,
                                left: 0,
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
                            sx={{ ...rightLink, color: '#58a0fa !important' }}
                        >
                            {'INTERNET'}
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
                                    ...menuStyle,
                                    minWidth: '200px',
                                    maxWidth: '300px',
                                },
                            }}
                        >
                            <MenuItem
                                onClick={(event) => handleNestedMenuOpen(event, 'residential')}
                                sx={{ ...rightLink, cursor: 'pointer' }}
                            >
                                Residential Internet
                            </MenuItem>
                            <Popover
                                open={isResidentialNestedMenuOpen}
                                anchorEl={residentialNestedAnchorEl}
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
                                        ...menuStyle,
                                        minWidth: '200px',
                                        maxWidth: '300px',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleMenuClose} component="a" href="/broadband" sx={{ ...rightLink, cursor: 'pointer' }}>
                                    Broadband
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose} component="a" href="/adsl" sx={{ ...rightLink, cursor: 'pointer' }}>
                                    ADSL
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose} component="a" href="/vdsl" sx={{ ...rightLink, cursor: 'pointer' }}>
                                    VDSL
                                </MenuItem>
                            </Popover>

                            {/* Add additional menu items for Corporate Internet */}
                            <MenuItem
                                onClick={(event) => handleNestedMenuOpen(event, 'corporate')}
                                sx={{ ...rightLink, cursor: 'pointer' }}
                            >
                                Corporate Internet
                            </MenuItem>
                            <Popover
                                open={isCorporateNestedMenuOpen}
                                anchorEl={corporateNestedAnchorEl}
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
                                        ...menuStyle,
                                        minWidth: '200px',
                                        maxWidth: '300px',
                                    },
                                }}
                            >

                                <MenuItem onClick={handleMenuClose} component="a" href="/corporatedsl" sx={{ ...rightLink, cursor: 'pointer' }}>
                                    Corporate DSL
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose} component="a" href="/microwave" sx={{ ...rightLink, cursor: 'pointer' }}>
                                    Microwave
                                </MenuItem>
                            </Popover>
                        </Popover>
                        <Link
                            variant="h6"
                            underline="none"
                            aria-haspopup="true"
                            onMouseEnter={(event) => handleMenuOpen(event, 'iptv')}
                            sx={{ ...rightLink, color: '#58a0fa !important' }}
                        >
                            {'IPTV'}
                        </Link>
                        <Popover
                            open={isMenuOpen && menuSection === 'iptv'}
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
                                    ...menuStyle,
                                    minWidth: '200px',
                                    maxWidth: '300px',
                                },
                            }}
                        >
                            <MenuItem
                                onClick={handleNestedMenuClose}
                                component="a"
                                href="/samaflix"
                                sx={{ ...rightLink, cursor: 'pointer' }}
                            >
                                SAMA FLIX
                            </MenuItem>
                            {/* Add more IPTV-related menu items as needed */}
                        </Popover>
                        <Link
                            variant="h6"
                            underline="none"
                            aria-haspopup="true"
                            onMouseEnter={(event) => handleMenuOpen(event, 'faq')}
                            sx={{ ...rightLink, color: '#58a0fa !important' }}
                        >
                            {'FAQ'}
                        </Link>
                        <Popover
                            open={isMenuOpen && menuSection === 'faq'}
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
                                    ...menuStyle,
                                    minWidth: '200px',
                                    maxWidth: '300px',
                                },
                            }}
                        >

                            <MenuItem
                                onClick={handleMenuClose}
                                component="a"
                                href="/aboutus"
                                sx={{ ...rightLink, cursor: 'pointer' }}
                            >
                                About Us
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClose}
                                component="a"
                                href="/contactus"
                                sx={{ ...rightLink, cursor: 'pointer' }}
                            >
                                Contact Us
                            </MenuItem>
                            <MenuItem
                                onClick={handleMenuClose}
                                component="a"
                                href="/answers"
                                sx={{ ...rightLink, cursor: 'pointer' }}
                            >
                                Answers
                            </MenuItem>
                        </Popover>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default AppAppBar;
