import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let NetworkInfastructureServiceView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Network Infastructure Services
                    </Typography>
                    <Typography >
                        Data Plus Network Infastructure Services is a secure, reliable, and fast Network Infastructure Services service that allows you to access the internet from anywhere
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const NetworkInfastructureService = () => {
    return (
        <NetworkInfastructureServiceView />
    )
}

export default NetworkInfastructureService