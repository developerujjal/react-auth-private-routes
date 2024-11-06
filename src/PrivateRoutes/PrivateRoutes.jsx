import { useContext } from "react";
import { AuthenticationContext } from "../components/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthenticationContext)

    // if loading === true;
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>

};


PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;