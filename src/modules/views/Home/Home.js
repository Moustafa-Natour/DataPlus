import * as React from 'react';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from '../AppBar/AppFooter';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import AppAppBar from '../AppBar/AppAppBar';
import withRoot from '../../withRoot';
import NewsLetter from './NewsLetter';

function Home() {
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

export default withRoot(Home);