// Routes.js
import React, { lazy, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoadingIndicator from './LoadingIndicator'; // Import LoadingIndicator
//Lazy load
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
const AppAppBar = lazy(() => import('../AppBar/AppAppBar'));
const AppFooter = lazy(() => import('../AppBar/AppFooter'));
//Routes
//Routes
const routes = [
    {
        path: '/home',
        component: Home,
        title: 'Home',
        description: 'Welcome to Data Plus S.A.R.L. Your one-stop solution for internet services, web hosting, VPN, and more.',
        keywords: 'Data Plus, internet services, web hosting, VPN, broadband, ADSL, VDSL, corporate DSL, SamaFlix, technical support'
    },
    {
        path: '/aboutus',
        component: AboutUs,
        title: 'About Us',
        description: 'Learn more about Data Plus S.A.R.L - our mission, values, and commitment to providing top-notch internet and IT services.',
        keywords: 'about us, Data Plus, mission, values, internet services, IT services'
    },
    {
        path: '/vpn',
        component: Vpn,
        title: 'VPN',
        description: 'Explore our VPN services designed to secure your online activities and protect your privacy. Stay safe and anonymous with Data Plus VPN.',
        keywords: 'VPN, virtual private network, online security, privacy protection, Data Plus'
    },
    {
        path: '/webhosting',
        component: WebHosting,
        title: 'WebHosting',
        description: 'Discover reliable and affordable web hosting solutions for your websites. Host with Data Plus and enjoy high-performance servers and excellent support.',
        keywords: 'web hosting, hosting services, website hosting, Data Plus, server hosting'
    },
    {
        path: '/domainregister',
        component: DomainRegister,
        title: 'Domain Name Register',
        description: 'Register your domain with Data Plus and establish your online presence. Choose from a wide range of domain extensions and enjoy hassle-free registration.',
        keywords: 'domain registration, register domain, domain name registration, Data Plus, domain extensions'
    },
    {
        path: '/voip',
        component: Voip,
        title: 'VOIP',
        description: 'Experience high-quality voice communication with Data Plus VoIP services. Stay connected with your business partners and clients with our reliable VOIP solutions.',
        keywords: 'VOIP, voice over IP, voice communication, Data Plus, business communication'
    },
    {
        path: '/networksolutions',
        component: NetworkSolutions,
        title: 'Network Solutions',
        description: 'Data Plus offers comprehensive network solutions tailored to your business needs. From network setup to maintenance, trust us for reliable and efficient services.',
        keywords: 'network solutions, networking services, network setup, network maintenance, Data Plus'
    },
    {
        path: '/contentdeliverynetwork',
        component: ContentDeliveryNetworks,
        title: 'Content Delivery Networks',
        description: 'Optimize your website performance with Data Plus Content Delivery Networks. Deliver your content faster to users worldwide and enhance user experience.',
        keywords: 'content delivery network, CDN, website performance, Data Plus, user experience'
    },
    {
        path: '/technicalsupport',
        component: TechincalSupport,
        title: 'Technical Support',
        description: 'Get reliable technical support from Data Plus experts. Whether it\'s troubleshooting or guidance, our technical team is here to assist you round the clock.',
        keywords: 'technical support, IT support, customer support, Data Plus, troubleshooting'
    },
    {
        path: '/networkinfrastructureservices',
        component: NetworkInfastructureService,
        title: 'Network Infrastructure Service',
        description: 'Data Plus provides top-notch network infrastructure services to ensure smooth and efficient network operations. Trust us for robust and scalable network solutions.',
        keywords: 'network infrastructure services, network operations, network scalability, Data Plus, network solutions'
    },
    {
        path: '/cloudcomputingservices',
        component: CloudComputingService,
        title: 'Cloud Computing Service',
        description: 'Leverage the power of cloud computing with Data Plus. Our cloud computing services offer flexibility, scalability, and security for your business operations.',
        keywords: 'cloud computing services, cloud solutions, cloud security, Data Plus, business operations'
    },
    {
        path: '/contactus',
        component: ContactUs,
        title: 'Contact Us',
        description: 'Reach out to Data Plus for inquiries, support, or partnership opportunities. Our team is ready to assist you and provide the best solutions for your business needs.',
        keywords: 'contact us, Data Plus contact, support, partnership, business solutions'
    },
    {
        path: '/fairusepolicy',
        component: FairUsePolicy,
        title: 'Fair Usage Policy',
        description: 'Learn about Data Plus Fair Usage Policy - our guidelines for fair and responsible usage of our internet and IT services. Ensuring fair access for all users.',
        keywords: 'fair usage policy, usage guidelines, internet usage, IT services, Data Plus'
    },
    {
        path: '/answers',
        component: Answers,
        title: 'FAQ',
        description: 'Find answers to frequently asked questions about Data Plus services, policies, and offerings. Get the information you need quickly and conveniently.',
        keywords: 'FAQ, frequently asked questions, Data Plus services, policies, information'
    },
    {
        path: '/adsl',
        component: Adsl,
        title: 'ADSL',
        description: 'Discover reliable ADSL internet connections with Data Plus. Enjoy high-speed internet access for your home or business needs.',
        keywords: 'ADSL, internet connection, high-speed internet, Data Plus, home internet, business internet'
    },
    {
        path: '/vdsl',
        component: Vdsl,
        title: 'VDSL',
        description: 'Experience lightning-fast VDSL internet connections with Data Plus. Get blazing speeds for seamless online browsing, streaming, and more.',
        keywords: 'VDSL, internet connection, high-speed internet, Data Plus, online browsing, streaming'
    },
    {
        path: '/broadband',
        component: Broadband,
        title: 'Broadband',
        description: 'Data Plus offers high-speed broadband internet solutions for homes and businesses. Stay connected with our reliable and fast broadband services.',
        keywords: 'broadband, high-speed internet, broadband connection, Data Plus, home internet, business internet'
    },
    {
        path: '/microwave',
        component: Microwave,
        title: 'Microwave',
        description: 'Explore Data Plus Microwave internet solutions for reliable and high-speed connectivity. Get fast and stable internet access for your home or business.',
        keywords: 'Microwave internet, high-speed internet, stable internet, Data Plus, home internet, business internet'
    },
    {
        path: '/corporatedsl',
        component: CorporateDsl,
        title: 'Corporate DSL',
        description: 'Data Plus offers dedicated Corporate DSL internet solutions for businesses'
    },
    {
        path: '/samaflix',
        component: SamaFlix,
        title: 'SamaFlix',
        description: 'Explore SamaFlix IPTV service with 500+ channels offering entertainment, news, sports, and more. Enjoy seamless streaming and access to a wide range of content.',
        keywords: 'SamaFlix, IPTV, streaming service, TV channels, entertainment, news, sports'
    },
    {
        path: '/loadingindicator',
        component: LoadingIndicator,
        title: 'Loading',
        description: 'LoadingIndicator is a component used to indicate that content is being loaded. It provides visual feedback to users while waiting for content to load.',
        keywords: 'LoadingIndicator, loading spinner, loading animation, loading screen, UI component'
    },
    {
        path: '*',
        component: NotFound,
        title: '404 Not Found',
        description: 'Oops! The page you\'re looking for could not be found. Please check the URL or navigate back to the homepage.',
        keywords: '404 Not Found, page not found, error 404, Data Plus, website error'
    }

];
const RenderedRoute = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/home');
    }, [navigate]);
    return null;
};
//Routes Fn
function AppRoutes() {
    const navigate = useNavigate(); // Define navigate function
    const handleRootRedirect = () => {
        navigate('/home'); // Redirect to /home
        return null; // Return null to avoid rendering anything
    };
    return (
        <>
            <Helmet>
                <title>Data Plus S.A.R.L</title>
            </Helmet>
            {/* AppAppBar and AppFooter components */}
            <AppAppBar />
            <Suspense fallback={<LoadingIndicator />}>
                <Routes >
                    <Route path="/" element={<RenderedRoute />} />
                    {/* {basename = "/react/"} */}
                    {routes.map(({ path, component: Component, title, description, keywords }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <>
                                    <Helmet>
                                        <title>Data Plus - {title}</title>
                                        <meta name="description" content={description} />
                                        <meta name="keywords" content={keywords} />
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