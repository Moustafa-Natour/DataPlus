import * as React from 'react';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from './AppFooter';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import AppAppBar from './AppAppBar';
import withRoot from '../withRoot';
import NewsLetter from './NewsLetter';

function Index() {
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductValues />
            <ProductHowItWorks />
            <NewsLetter />
            <ProductSmokingHero />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);