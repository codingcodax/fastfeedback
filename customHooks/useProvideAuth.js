import { useState, useEffect } from "react";

import firebase from "../lib/firebase";

const useProvideAuth = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) setUser(user);
			else setUser(false);
		});

		return () => unsubscribe();
	}, []);

	const signinWithGithub = () => {
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GithubAuthProvider())
			.then((response) => {
				setUser(response.user);
				return response.user;
			});
	};

	const signout = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(false);
			});
	};

	return {
		user,
		signinWithGithub,
		signout,
	};
};

export default useProvideAuth;
