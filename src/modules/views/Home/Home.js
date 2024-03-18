import * as React from 'react';
import ProductSmokingHero from './ProductSmokingHero';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import withRoot from '../../withRoot';
import NewsLetter from './NewsLetter';
import NewOffer from './NewOffer';

function Home() {
    return (
        <React.Fragment>
            <ProductHero />
            <NewOffer />
            <ProductValues />
            <ProductHowItWorks />
            <NewsLetter />
            <ProductSmokingHero />
        </React.Fragment>
    );
}

export default withRoot(Home);