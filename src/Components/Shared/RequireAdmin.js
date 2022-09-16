import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../../firebase.init';
import Spinner from './Spinner';
import useAdmin from './../Hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Spinner/>
    }

    if(!user || !admin) {
        signOut(auth)
        return <Navigate to='/logIn' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;