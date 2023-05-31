"use client";
import React, { useState } from "react";
import {
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	getAuth,
	GithubAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../firebase";
import { GitRepo, GitUserDetails } from "../types";
import { getReposByUser, getUser, getUserLanguages } from "../services/githubService";

const AppContext = React.createContext({
	state: "",
	setState: (state: any) => {},
	session: {},
	googleLogIn: () => {},
	gitHubLogIn: () => {},
  gitUserDetails: {} as GitUserDetails,
  gitReposByUser: [] as GitRepo[],
  gitLanguages: [] as string[],
	logout: () => {},
});

export const AppContextProvider = (props: any) => {
	const [state, setState] = useState("");
	const [session, setSession] = useState(null as any);
  const [gitUserDetails, setGitUserDetails] = useState({} as GitUserDetails);
	const [gitReposByUser, setGitReposByUser] = useState([] as GitRepo[]);
	const [gitLanguages, setGitLanguages] = useState([] as string[]);

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			setSession(user);
		} else {
			setSession(null);
		}
	});

	const googleLogIn = () => {
			signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = !credential?.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.log(errorCode, errorMessage, email, credential);
			});
	};

	const gitHubLogIn = async () => {
		await signInWithPopup(auth, new GithubAuthProvider())
			.then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = !credential?.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        const userN:string = JSON.stringify(getAdditionalUserInfo(result)?.profile?.login).trim().replace(/['"]+/g, '');

        setGitUserDetails(await getUser(userN));
        setGitReposByUser(await getReposByUser(userN));
        setGitLanguages(await getUserLanguages(userN));
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        
        console.log(errorCode, errorMessage, email, credential);
			});
	};

	const logout = async () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				console.log("Sign-out successful.");
			})
			.catch((error) => {
				console.log("An error happened. => ", error);
			});
	};

	return (
		<AppContext.Provider
			value={{
				state: state,
				setState: setState,
				session: session,
				googleLogIn: googleLogIn,
				gitHubLogIn: gitHubLogIn,
        gitUserDetails: gitUserDetails,
        gitReposByUser: gitReposByUser,
        gitLanguages: gitLanguages,
				logout: logout,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;
