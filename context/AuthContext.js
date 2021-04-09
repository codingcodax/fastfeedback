import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, signInWithGithub, signOut } from '@/lib/firebase';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const signInWithGithubContext = () => {
        signInWithGithub();
        Cookies.set('fast-feedback-auth', true, { expires: 1 });
    };

    const signOutContext = () => {
        signOut();
        Cookies.remove('fast-feedback-auth');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                signInWithGithubContext,
                signOutContext,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
