import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let CloudComputingServiceView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Cloud Computing Service
                    </Typography>
                    <Typography >
                        Data Plus Cloud Computing Service is a secure, reliable, and fast Cloud Computing Service service that allows you to access the internet from anywhere in the world.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const CloudComputingService = () => {
    return (
        <CloudComputingServiceView />
    )
}

export default CloudComputingService