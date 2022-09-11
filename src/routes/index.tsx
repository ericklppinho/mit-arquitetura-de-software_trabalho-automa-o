import * as React from 'react';
import { Route, Routes as ReactRouterDOMRoutes } from 'react-router-dom';

import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes: React.FC = () => (
    <ReactRouterDOMRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </ReactRouterDOMRoutes>
);

export default Routes;