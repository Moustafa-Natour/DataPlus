import * as React from 'react';
import ProductSmokingHero from './ProductSmokingHero';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import withRoot from '../../withRoot';
import NewsLetter from './NewsLetter';

function Home() {
    return (
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductHowItWorks />
            <NewsLetter />
            <ProductSmokingHero />
        </React.Fragment>
    );
}

export default withRoot(Home);