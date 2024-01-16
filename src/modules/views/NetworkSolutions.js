import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let NetworkSolutionsView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Network Solutions
                    </Typography>
                    <Typography >
                        Data Plus Network Solutions is a secure, reliable, and fast Network Solutions service that allows you to access the internet from anywhere in the world.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const NetworkSolutions = () => {
    return (
        <NetworkSolutionsView />
    )
}

export default NetworkSolutions