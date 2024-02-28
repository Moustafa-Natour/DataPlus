import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import Container from '../../components/Container';
import Box from '../../components/Box';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { VpnData } from '../../data/VpnData';

const VpnView = () => {
    return (
        <>
            <Container >
                <Box >
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {VpnData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {VpnData.description}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose {VpnData.title}?
                    </Typography>
                    <ul>
                        {VpnData.reasonsToChoose.map((reason, index) => (
                            <li key={index}>
                                <strong>{reason.title}: </strong>
                                {reason.description}
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {VpnData.additionalInformation}
                    </Typography>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp(VpnData.buttonMessage)} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </MuiBox>
                </Box>
            </Container>
        </>
    );
};

const Vpn = () => {
    return <VpnView />;
};

export default Vpn;
