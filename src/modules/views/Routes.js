// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Adsl from './Adsl';
import Vdsl from './Vdsl';
import CorporateDsl from './CorporateDsl';
import Microwave from './Microwave';
import Broadband from './Broadband';
import SamaFlix from './SamaFlix';
import Answers from './Answers';
import NotFound from './NotFound';
import ForgotPassword from './ForgotPassword';
import Privacy from './Privacy';
import Terms from './Terms';
import FairUsePolicy from './FairUsePolicy';
import Vpn from './Vpn';
import DomainRegister from './DomainRegister';
import Voip from './Voip';
import NetworkSolutions from './NetworkSolutions';
import ContentDeliveryNetworks from './ContentDeliveryNetworks';
import TechincalSupport from './TechincalSupport';
import NetworkInfastructureService from './NetworkInfastructureService';
import CloudComputingService from './CloudComputingService';
import WebHosting from './WebHosting';
import Test from './Test';
import { Helmet } from 'react-helmet';

const routes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/aboutus', component: AboutUs, title: 'About Us' },
    { path: '/test', component: Test, title: 'Testing Page' },
    { path: '/vpn', component: Vpn, title: 'VPN' },
    { path: '/webhosting', component: WebHosting, title: 'WebHosting' },
    { path: '/domainregister', component: DomainRegister, title: 'Domain Name Register' },
    { path: '/voip', component: Voip, title: 'VOIP' },
    { path: '/networksolutions', component: NetworkSolutions, title: 'Network Solutions' },
    { path: '/contentdeliverynetwork', component: ContentDeliveryNetworks, title: 'Content Delivery Networks' },
    { path: '/technicalsupport', component: TechincalSupport, title: 'Techincal Support' },
    { path: '/networkinfrastructureservices', component: NetworkInfastructureService, title: 'Network Infastructure Service' },
    { path: '/cloudcomputingservices', component: CloudComputingService, title: 'Cloud Computing Service' },
    { path: '/contactus', component: ContactUs, title: 'Contact Us' },
    { path: '/fairusepolicy', component: FairUsePolicy, title: 'Fair Usage Policy' },
    { path: '/answers', component: Answers, title: 'FAQ' },
    { path: '/forgotpassword', component: ForgotPassword, title: 'Forgot Password' },
    { path: '/adsl', component: Adsl, title: 'ADSL' },
    { path: '/vdsl', component: Vdsl, title: 'VDSL' },
    { path: '/broadband', component: Broadband, title: 'Broadband' },
    { path: '/microwave', component: Microwave, title: 'Microwave' },
    { path: '/corporatedsl', component: CorporateDsl, title: 'Corporate DSL' },
    { path: '/samaflix', component: SamaFlix, title: 'SamaFlix' },
    { path: '/privacy', component: Privacy, title: 'Privacy' },
    { path: '/terms', component: Terms, title: 'Terms' },
    { path: '*', component: NotFound, title: '404 Not Found' },
];
function AppRoutes() {
    return (
        <>
            <Helmet>
                <title>Data Plus S.A.R.L</title>
            </Helmet>

            <Routes>
                {routes.map(({ path, component: Component, title }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <>
                                <Helmet>
                                    <title>Data Plus - {title}</title>
                                </Helmet>
                                <Component />
                            </>
                        }
                    />
                ))}
            </Routes>
        </>
    );
}

export default AppRoutes;
