import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <>
        <div className="loading loading-bars loading-lg m-auto text-center h-20"></div>
        </>
    }

    if(user){
        return children;
    }
    
    return (
        <Navigate to={"/login"} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;