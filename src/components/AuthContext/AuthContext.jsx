import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthenticationContext = createContext(null)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password)=> {
       return createUserWithEmailAndPassword(auth, email, password)
    }


    return (
        <AuthenticationContext.Provider value={{setUser, createUser}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node
}

export default AuthContext;