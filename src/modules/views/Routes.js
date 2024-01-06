// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import Pricing from './Pricing';
import Privacy from './Privacy';
import Broadband from './Broadband';
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
                    path="/pricing"
                    element={
                        <>
                            {/* Set title for the Pricing page */}
                            <Helmet>
                                <title>Data Plus - Pricing</title>
                            </Helmet>
                            <Pricing />
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
            </Routes>
        </>
    );
}

export default AppRoutes;
