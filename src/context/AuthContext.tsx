import React, { createContext, useReducer, useEffect } from 'react';
import { projectAuth } from '../firebase/firebase';

export const AuthContext = createContext({});

const initialState = { user: null, authIsReady: false };

export const authReducer = (
	state: typeof initialState,
	action: ActionTypes,
): AuthReducerProps => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: null };
		case 'AUTH_IS_READY':
			return { user: action.payload, authIsReady: true };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }: AuthProviderTypes) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});

	useEffect(() => {
		const unsub = projectAuth.onAuthStateChanged((user) => {
			dispatch({ type: 'AUTH_IS_READY', payload: user });
			unsub();
		});
	}, []);

	console.log('AuthContext state:', state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export type AuthProviderTypes = {
	children: React.ReactChild;
};

export type AuthReducerProps = {
	user: null | object;
	authIsReady: boolean;
};

export type ActionTypes = {
	type: 'LOGIN' | 'LOGOUT' | 'AUTH_IS_READY';
	payload: object;
};
