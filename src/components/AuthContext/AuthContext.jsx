import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthenticationContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const userInfo = {user, setUser, createUser}

    return (
        <AuthenticationContext.Provider value={userInfo}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node
}

export default AuthContext;