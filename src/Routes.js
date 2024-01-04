// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import Pricing from './Pricing';
import Privacy from './Privacy';
import Broadband from './Broadband'
import Terms from './Terms';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    );
}

export default AppRoutes;
