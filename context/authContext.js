import { createContext } from 'react';

export const AuthContext = createContext({
	authStatus: false,
	setAuthStatus: () => {},
	user: null,
	setUser: () => {},
});

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
