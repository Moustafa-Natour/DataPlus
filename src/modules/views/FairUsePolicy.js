import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Link } from '@mui/material';
import { ContainerSx, BoxSx, TypographyHeaderSx } from '../utils/StyleSx';

const FairUsePolicyView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        Fair Use Policy
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify', fontWeight: 'bold' }}>
                        Unlimited Access / Unlimited Traffic
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        Data Plus defines UNLIMITED ACCESS / UNLIMITED TRAFFIC, hereafter referred to as UNLIMITED, for the Shared Broadband Internet Access. It allows you to be on the Internet as often as you want, for as long as you want during the publicized UNLIMITED period, provided that you are actually sitting in front of the computer and actively using the service, within the same household. Under this definition, you should not share the bandwidth with other users and should refrain from downloading and/or distributing copyrighted material without the permission of the owner(s) or engaging in heavy download activity.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        <strong>Why a Fair Use Policy?</strong><br />
                        Data Plus’s Broadband Internet Access was made available at a reasonable cost based on the principle of sharing resources among subscribers; the resources being the network, the local and the international bandwidth.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        While the vast majority of our customers use our services considerately and their usage levels during peak hours don't disproportionately affect the shared network capacity, we know that a very small number of subscribers use an excessive amount of network bandwidth at peak time. Those users engage in substantial continuous download activity of a level greatly exceeding the norm for a residential service, to an extent that can impair the performance of the network, decreasing thereafter the speed of the broadband service available to all other users.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        To guarantee that all the subscribers of Data Plus have an enjoyable experience while using the Internet, Data Plus has put in place the Fair Use Policy (FUP) to ensure that there is an optimal service for all subscribers and that the service is fairly used by everyone.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        <strong>How Does the Fair Use Policy Work?</strong><br />
                        Data Plus will be monitoring the network and tracking Internet bandwidth use (capacity and not content) for each subscriber account over time. Data Plus will be dynamically computing the average subscriber consumption per day and per month for all subscribers of the same account type.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        If an account’s usage exceeds the limits Data Plus deems fair and reasonable for a residential broadband service during given periods (THREE TIMES the computed average subscriber consumption for the subscriber’s specific account type), Data Plus will apply daily and monthly speed limiting restrictions during these periods to the account in question. Daily limiting restrictions are reset every day, and monthly limiting restrictions are reset at the end of the subscription’s billing cycle. If the usage for this account continues to be very high during these periods, Data Plus reserves the right to modify or stop the service (or any part thereof), either temporarily or permanently, without any prior notice.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        <strong>Who Will Be Affected?</strong><br />
                        The Fair Use Policy applies to all the products and services provided by Data Plus. These services include ADSL, 3G, Wise, mobi, WiGo iFly, and any other service that might be offered in the future and/or listed on Data Plus’s website.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
                        Only a very few subscribers who make inappropriate use of the service will be affected by this policy. The rest of the subscribers who do not, for example, constantly download or upload videos, songs, or very large files are unlikely to be affected by the Fair Use Policy.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const FairUsePolicy = () => {
    return <FairUsePolicyView />;
};

export default FairUsePolicy;
