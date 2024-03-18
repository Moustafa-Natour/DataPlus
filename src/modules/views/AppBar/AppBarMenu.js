import React from 'react';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import { rightLink, menuStyle } from '../../utils/StyleSx';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { BASENAME } from '../../utils/EnvVar';
import logoImg from '../../assets/logo/Dataplus.svg';

const AppBarMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuSection, setMenuSection] = React.useState(null);
    const [isResidentialNestedMenuOpen, setResidentialNestedMenuOpen] = React.useState(false);
    const [residentialNestedAnchorEl, setResidentialNestedAnchorEl] = React.useState(null);
    const [isCorporateNestedMenuOpen, setCorporateNestedMenuOpen] = React.useState(false);
    const [corporateNestedAnchorEl, setCorporateNestedAnchorEl] = React.useState(null);
    const [isServicesMenuOpen, setServicesMenuOpen] = React.useState(false);
    const [servicesMenuAnchorEl, setServicesMenuAnchorEl] = React.useState(null);

    const handleMenuOpen = (event, section) => {
        setMenuSection(section);
        setAnchorEl(event.currentTarget);
        if (section === 'services') {
            setServicesMenuOpen(true);
            setServicesMenuAnchorEl(event.currentTarget);
        }
    };

    const handleNestedMenuOpen = (event, menuType) => {
        if (menuType === 'residential') {
            setResidentialNestedMenuOpen(true);
            setResidentialNestedAnchorEl(event.currentTarget);
            setCorporateNestedMenuOpen(false);
        } else if (menuType === 'corporate') {
            setCorporateNestedMenuOpen(true);
            setCorporateNestedAnchorEl(event.currentTarget);
            setResidentialNestedMenuOpen(false);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuSection(null);
        setResidentialNestedMenuOpen(false);
        setCorporateNestedMenuOpen(false);
    };

    const handleNestedMenuClose = () => {
        setResidentialNestedMenuOpen(false);
        setCorporateNestedMenuOpen(false);

    };

    const isMenuOpen = Boolean(anchorEl);

    const currentPathname = window.location.pathname;

    // Check if the current pathname already contains BASENAME
    const isBaseNameAlreadyIncluded = currentPathname.startsWith(BASENAME);

    // Function to construct URL with BASENAME
    const constructUrlWithBaseName = (path) => {
        return isBaseNameAlreadyIncluded ? `${BASENAME}${path}` : `/react${path}`;
    };

    let LogoView = () => {
        return (
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
                    href={'/home'}
                    sx={{ color: '#fff' }} // Adjust styles as needed
                >

                    <img
                        src={logoImg}
                        alt="DATA PLUS"
                        width="150"
                        height="65"
                        style={{
                            objectFit: 'cover', // Maintain aspect ratio and cover the entire container
                            display: 'block', // Ensure the image is treated as a block element
                            overflow: 'hidden', // Hide any overflow
                        }}
                    />
                </Link>
            </Box>
        )
    }

    return (
        <>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <LogoView />
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
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
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
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
                    >
                        {/* Adjusted menu items */}
                        <MenuItem onClick={handleMenuClose} component="a" href={'/broadband'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Broadband
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/adsl'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            ADSL
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/vdsl'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            VDSL
                        </MenuItem>
                    </Popover>
                    {/* Adjusted additional menu items for Corporate Internet */}
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
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
                    >
                        <MenuItem onClick={handleMenuClose} component="a" href={'/corporatedsl'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Corporate DSL
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/microwave'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Microwave
                        </MenuItem>
                    </Popover>
                </Popover>
                {/*  Services Menu Section */}
                {/* Adjusted links */}
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
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
                >
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
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
                    >
                        <MenuItem onClick={handleMenuClose} component="a" href={'/vpn'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            VPN
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/domainregister'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Domain Registration
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/voip'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            VOIP
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/webhosting'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Website Hosting
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/networksolutions'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Network Solutions
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/contentdeliverynetwork'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Content Delivery Networks
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/technicalsupport'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Technical Support
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/networkinfrastructureservices'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Network Infrastructure Services
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href={'/cloudcomputingservices'} sx={{ ...rightLink, cursor: 'pointer' }}>
                            Cloud Computing Services
                        </MenuItem>
                    </Popover>

                </Popover>
                {/*  IPTV Menu Section */}
                {/* Adjusted links */}
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
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
                >
                    <MenuItem
                        onClick={handleNestedMenuClose}
                        component="a"
                        href={'/samaflix'}
                        sx={{ ...rightLink, cursor: 'pointer' }}
                    >
                        SAMA FLIX
                    </MenuItem>
                    {/* Adjust more IPTV-related menu items as needed */}
                </Popover>
                {/*  FAQ Menu Section */}
                {/* Adjusted links */}
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
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    PaperProps={{ style: { ...menuStyle, minWidth: '200px', maxWidth: '300px' } }}
                >
                    <MenuItem onClick={handleMenuClose} component="a" href={'/aboutus'} sx={{ ...rightLink, cursor: 'pointer' }}>
                        About Us
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component="a" href={'/contactus'} sx={{ ...rightLink, cursor: 'pointer' }}>
                        Contact Us
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose} component="a" href={'/answers'} sx={{ ...rightLink, cursor: 'pointer' }}>
                        Answers
                    </MenuItem>
                </Popover>
            </Box>
        </>
    );
};

export default AppBarMenu;
