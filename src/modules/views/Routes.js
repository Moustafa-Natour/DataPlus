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
import NotFound from './NotFound';

import ForgotPassword from './ForgotPassword';
import Privacy from './Privacy';
import Terms from './Terms';
import { Helmet } from 'react-helmet';

function AppRoutes() {
    return (
        <>
            {/* Wrap the entire Routes with Helmet to set default title */}
            <Helmet>
                <title>Data Plus S.A.R.L</title>
            </Helmet>

            {/* Your individual routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {/* Set title for the Home page */}
                            <Helmet>
                                <title>Data Plus - Home</title>
                            </Helmet>
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/aboutus"
                    element={
                        <>
                            {/* Set title for the Home page */}
                            <Helmet>
                                <title>Data Plus - About Us</title>
                            </Helmet>
                            <AboutUs />
                        </>
                    }
                />
                <Route
                    path="/contactus"
                    element={
                        <>
                            {/* Set title for the Home page */}
                            <Helmet>
                                <title>Data Plus - Contact Us</title>
                            </Helmet>
                            <ContactUs />
                        </>
                    }
                />
                <Route
                    path="/forgotpassword"
                    element={
                        <>
                            {/* Set title for the Forgot Password page */}
                            <Helmet>
                                <title>Data Plus - Forgot Password</title>
                            </Helmet>
                            <ForgotPassword />
                        </>
                    }
                />
                <Route
                    path="/adsl"
                    element={
                        <>
                            {/* Set title for the Pricing page */}
                            <Helmet>
                                <title>Data Plus - ADSL</title>
                            </Helmet>
                            <Adsl />
                        </>
                    }
                />
                <Route
                    path="/vdsl"
                    element={
                        <>
                            {/* Set title for the Pricing page */}
                            <Helmet>
                                <title>Data Plus - VDSL</title>
                            </Helmet>
                            <Vdsl />
                        </>
                    }
                />
                <Route
                    path="/broadband"
                    element={
                        <>
                            {/* Set title for the Broadband page */}
                            <Helmet>
                                <title>Data Plus - Broadband</title>
                            </Helmet>
                            <Broadband />
                        </>
                    }
                />
                <Route
                    path="/microwave"
                    element={
                        <>
                            {/* Set title for the Pricing page */}
                            <Helmet>
                                <title>Data Plus - Microwave</title>
                            </Helmet>
                            <Microwave />
                        </>
                    }
                />
                <Route
                    path="/corporatedsl"
                    element={
                        <>
                            {/* Set title for the Pricing page */}
                            <Helmet>
                                <title>Data Plus - Corporate DSL</title>
                            </Helmet>
                            <CorporateDsl />
                        </>
                    }
                />
                <Route
                    path="/privacy"
                    element={
                        <>
                            {/* Set title for the Privacy page */}
                            <Helmet>
                                <title>Data Plus - Privacy</title>
                            </Helmet>
                            <Privacy />
                        </>
                    }
                />

                <Route
                    path="/terms"
                    element={
                        <>
                            {/* Set title for the Terms page */}
                            <Helmet>
                                <title>Data Plus - Terms</title>
                            </Helmet>
                            <Terms />
                        </>
                    }
                />
                {/* Wildcard route for undefined routes */}
                <Route
                    path="*"
                    element={
                        <>
                            {/* Set title for the 404 Not Found page */}
                            <Helmet>
                                <title>Data Plus - 404 Not Found</title>
                            </Helmet>
                            <NotFound />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRoutes;
