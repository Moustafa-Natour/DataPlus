import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let TechincalSupportView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Techincal Support                    </Typography>
                    <Typography >
                        Data Plus Techincal Support is a secure, reliable, and fast Techincal Support service that allows you to access the internet from anywhere in the
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const TechincalSupport = () => {
    return (
        <TechincalSupportView />
    )
}

export default TechincalSupport