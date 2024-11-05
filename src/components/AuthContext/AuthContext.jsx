import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthenticationContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                const uid = currentUser.uid;
                if (uid) {
                    console.log(currentUser)
                    setUser(currentUser);
                } else {
                    setUser(null)
                }
            } else {
                console.log("log Out")
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])



    const userInfo = { user, setUser, createUser, signInUser }

    
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