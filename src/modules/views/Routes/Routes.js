// Routes.js
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoadingIndicator from './LoadingIndicator'; // Import LoadingIndicator


const Home = lazy(() => import('../Home/Home'));
const AboutUs = lazy(() => import('../Faq/AboutUs'));
const ContactUs = lazy(() => import('../Faq/ContactUs'));
const Adsl = lazy(() => import('../Internet/Adsl'));
const Vdsl = lazy(() => import('../Internet/Vdsl'));
const CorporateDsl = lazy(() => import('../Internet/CorporateDsl'));
const Microwave = lazy(() => import('../Internet/Microwave'));
const Broadband = lazy(() => import('../Internet/Broadband/Broadband'));
const SamaFlix = lazy(() => import('../Internet/SamaFlix'));
const Answers = lazy(() => import('../Faq/Answers'));
const NotFound = lazy(() => import('../Routes/NotFound'));
const ForgotPassword = lazy(() => import('../Test/Login/ForgotPassword'));
const FairUsePolicy = lazy(() => import('../Internet/Broadband/FairUsePolicy'));
const Vpn = lazy(() => import('../Services/Vpn'));
const DomainRegister = lazy(() => import('../Services/DomainRegister'));
const Voip = lazy(() => import('../Services/Voip'));
const NetworkSolutions = lazy(() => import('../Services/NetworkSolutions'));
const ContentDeliveryNetworks = lazy(() => import('../Services/ContentDeliveryNetworks'));
const TechincalSupport = lazy(() => import('../Services/TechincalSupport'));
const NetworkInfastructureService = lazy(() => import('../Services/NetworkInfastructureService'));
const CloudComputingService = lazy(() => import('../Services/CloudComputingService'));
const WebHosting = lazy(() => import('../Services/WebHosting'));
const Test = lazy(() => import('../Test/Test'));
const index = lazy(() => import('../Analytics/index'));
const AppAppBar = lazy(() => import('../AppBar/AppAppBar'));
const AppFooter = lazy(() => import('../AppBar/AppFooter'));

const routes = [
    { path: '/home', component: Home, title: 'Home' },
    // { path: '/index', component: index, title: 'Analytics Dashboard' },
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
    { path: '/loadingindicator', component: LoadingIndicator, title: 'Loading' },
    { path: '*', component: NotFound, title: '404 Not Found' },
];



function AppRoutes() {
    return (
        <>
            <Helmet>
                <title>Data Plus S.A.R.L</title>
            </Helmet>
            {/* AppAppBar and AppFooter components */}
            <AppAppBar />
            <Suspense fallback={<LoadingIndicator />}>
                <Routes basename="/react/">
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
            </Suspense>
            <AppFooter />
        </>
    );
}

export default AppRoutes;