import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter({ children, ...rest }) {
    var userData = window.localStorage.getItem('tiki-user')
    
    if (!userData) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/sign-in" />
    }

    // authorized so return child components
    return <Outlet />
}

export default PrivateRouter;
