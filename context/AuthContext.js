import { createContext } from "react";

import useProvideAuth from "../customHooks/useProvideAuth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
