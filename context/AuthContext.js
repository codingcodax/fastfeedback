import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, signInWithGithub, signOut } from '@/lib/firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <AuthContext.Provider
            value={{ user, loading, error, signInWithGithub, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
