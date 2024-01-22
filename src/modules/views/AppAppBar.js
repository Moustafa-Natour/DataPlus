// components/AppAppBar.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import { rightLink, menuStyle } from '../utils/StyleSx';


function AppAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuSection, setMenuSection] = React.useState(null);
    const [isResidentialNestedMenuOpen, setResidentialNestedMenuOpen] = React.useState(false);
    const [residentialNestedAnchorEl, setResidentialNestedAnchorEl] = React.useState(null);
    const [isCorporateNestedMenuOpen, setCorporateNestedMenuOpen] = React.useState(false);
    const [corporateNestedAnchorEl, setCorporateNestedAnchorEl] = React.useState(null);
    const [isIPTVNestedMenuOpen, setIPTVNestedMenuOpen] = React.useState(false);
    const [iptvNestedAnchorEl, setIPTVNestedAnchorEl] = React.useState(null);
    const [isServicesMenuOpen, setServicesMenuOpen] = React.useState(false);
    const [servicesMenuAnchorEl, setServicesMenuAnchorEl] = React.useState(null);

    const handleMenuOpen = (event, section) => {
        setMenuSection(section);
        setAnchorEl(event.currentTarget);
        if (section === 'iptv') {
            setIPTVNestedMenuOpen(true);
            setIPTVNestedAnchorEl(event.currentTarget);
        } else if (section === 'services') {
            setServicesMenuOpen(true);
            setServicesMenuAnchorEl(event.currentTarget);
        }
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

                        }}
                    >
                        <Link
                            variant="a"
                            align="center"
                            underline="none"
                            href="/"
                        >
                            <img
                                src="/android-chrome-512x512.png"
                                alt="DATA PLUS"
                                width="100"
                                height="60"
                                style={{
                                    objectFit: 'cover', // Maintain aspect ratio and cover the entire container
                                    display: 'block', // Ensure the image is treated as a block element
                                    marginTop: '10px', // Center the image horizontally
                                    overflow: 'hidden', // Hide any overflow
                                }}
                            />
                        </Link>
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        {/* Internet Menu Section */}

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

                        {/*  Services Menu Section */}

                        <Link
                            variant="h6"
                            underline="none"
                            aria-haspopup="true"
                            onMouseEnter={(event) => handleMenuOpen(event, 'services')}
                            sx={{ ...rightLink, color: '#58a0fa !important' }}
                        >
                            {'SERVICES'}
                        </Link>
                        <Popover
                            open={isMenuOpen && menuSection === 'services'}
                            anchorEl={servicesMenuAnchorEl}
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
                            <MenuItem onClick={handleMenuClose} component="a" href="/vpn" sx={{ ...rightLink, cursor: 'pointer' }}>
                                VPN
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/domainregister" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Domain Registration
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/voip" sx={{ ...rightLink, cursor: 'pointer' }}>
                                VOIP
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/webhosting" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Website Hosting
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/networksolutions" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Network Solutions
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/contentdeliverynetwork" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Content Delivery Networks
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/technicalsupport" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Techincal Support
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/networkinfrastructureservices" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Network Infastructure Services
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="/cloudcomputingservices" sx={{ ...rightLink, cursor: 'pointer' }}>
                                Cloud computing Services
                            </MenuItem>
                        </Popover>

                        {/*  IPTV Menu Section */}

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

                        {/*  FAQ Menu Section */}

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
