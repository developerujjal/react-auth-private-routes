import { useContext } from "react";
import { AuthenticationContext } from "../AuthContext/AuthContext";

const Display = () => {

    const {user}= useContext(AuthenticationContext)

    return (
        <div>
            <h1 className="text-center">Email: {user?.email}</h1>
        </div>
    );
};

export default Display;