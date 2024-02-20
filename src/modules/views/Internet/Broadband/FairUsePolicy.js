// FairUsePolicy.js
import React from 'react';

import { Container, Typography, Box, Link } from '@mui/material';
import { ContainerSx, BoxSx, TypographyHeaderSx } from '../../../utils/StyleSx';
import { FairUsePolicyData } from '../../../data/FairUsePolicyData';

const FairUsePolicyView = () => {
    return (
        <>
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {FairUsePolicyData.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify', fontWeight: 'bold' }}>
                        {FairUsePolicyData.unlimitedAccessTitle}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        {FairUsePolicyData.unlimitedAccessDescription}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        <strong>{FairUsePolicyData.whyFairUse}</strong><br />
                        {FairUsePolicyData.whyFairUseDescription}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        {FairUsePolicyData.excessiveUsageDescription}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        {FairUsePolicyData.fairUsePolicyDescription}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        <strong>{FairUsePolicyData.howFairUsePolicyWorksTitle}</strong><br />
                        {FairUsePolicyData.howFairUsePolicyWorksDescription}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        <strong>{FairUsePolicyData.whoWillBeAffectedTitle}</strong><br />
                        {FairUsePolicyData.whoWillBeAffectedDescription}
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

const FairUsePolicy = () => {
    return <FairUsePolicyView />;
};

export default FairUsePolicy;
