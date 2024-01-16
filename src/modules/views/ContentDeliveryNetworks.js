import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let ContentDeliveryNetworksView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Content Delivery Networks
                    </Typography>
                    <Typography >
                        Data Plus Content Delivery Networks is a secure, reliable, and fast Content Delivery Networks service that allows you to access the internet from anywhere in the world.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const ContentDeliveryNetworks = () => {
    return (
        <ContentDeliveryNetworksView />
    )
}

export default ContentDeliveryNetworks