import { createContext } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
    auth,
    signInWithGithub,
    signInWithGoogle,
    signOut,
} from '@/lib/firebase';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    const redirect = (path = '/') => router.push(`${path}`);

    const signInWithGithubContext = async () => {
        await signInWithGithub();
        redirect('/sites');
        Cookies.set('fast-feedback-auth', true, { expires: 1 });
    };

    const signInWithGoogleContext = async () => {
        await signInWithGoogle();
        redirect('/sites');
        Cookies.set('fast-feedback-auth', true, { expires: 1 });
    };

    const signOutContext = async () => {
        await signOut();
        redirect();
        Cookies.remove('fast-feedback-auth');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                signInWithGithubContext,
                signInWithGoogleContext,
                signOutContext,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
