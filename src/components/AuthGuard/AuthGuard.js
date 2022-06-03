import Layout from 'components/Layout';
import { useAuth } from 'hooks/useAuth';
import * as React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ component: Component }) => {
    const { authed } = useAuth();
    const location = useLocation();
    return authed
        ? <Layout>
            <Component />
        </Layout>
        : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}

export default AuthGuard;