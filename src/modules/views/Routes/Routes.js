// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import AboutUs from '../Faq/AboutUs';
import ContactUs from '../Faq/ContactUs';
import Adsl from '../Internet/Adsl';
import Vdsl from '../Internet/Vdsl';
import CorporateDsl from '../Internet/CorporateDsl';
import Microwave from '../Internet/Microwave';
import Broadband from '../Internet/Broadband/Broadband';
import SamaFlix from '../Internet/SamaFlix';
import Answers from '../Faq/Answers';
import NotFound from '../Routes/NotFound';
import ForgotPassword from '../Test/Login/ForgotPassword';
import FairUsePolicy from '../Internet/Broadband/FairUsePolicy';
import Vpn from '../Services/Vpn';
import DomainRegister from '../Services/DomainRegister';
import Voip from '../Services/Voip';
import NetworkSolutions from '../Services/NetworkSolutions';
import ContentDeliveryNetworks from '../Services/ContentDeliveryNetworks';
import TechincalSupport from '../Services/TechincalSupport';
import NetworkInfastructureService from '../Services/NetworkInfastructureService';
import CloudComputingService from '../Services/CloudComputingService';
import WebHosting from '../Services/WebHosting';
import Test from '../Test/Test';
import index from '../Analytics/index';
import { Helmet } from 'react-helmet';

const routes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/index', component: index, title: 'Analytics Dashboard' },
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
