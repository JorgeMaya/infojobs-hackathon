"use client";
import React, { useState } from "react";
import { GitRepo, GitUserDetails } from "../types";

const AppContext = React.createContext({
	code: "",
	setCode: (state: any) => {},
  gitUserDetails: {} as GitUserDetails,
  gitReposByUser: [] as GitRepo[],
  gitLanguages: [] as string[],
  gitUsername: "",
  setGitUserDetails: (state: any) => {},
  setGitReposByUser: (state: any) => {},
  setGitLanguages: (state: any) => {},
  setGitUsername: (username: string) => {},
});

export const AppContextProvider = (props: any) => {
	const [code, setCode] = useState("");
	const [gitUsername, setGitUsername] = useState("");
  const [gitUserDetails, setGitUserDetails] = useState({} as GitUserDetails);
	const [gitReposByUser, setGitReposByUser] = useState([] as GitRepo[]);
	const [gitLanguages, setGitLanguages] = useState([] as string[]);

	return (
		<AppContext.Provider
			value={{
				code: code,
				setCode: setCode,
        gitUserDetails: gitUserDetails,
        gitReposByUser: gitReposByUser,
        gitLanguages: gitLanguages,
        gitUsername: gitUsername,
        setGitUserDetails: setGitUserDetails,
        setGitReposByUser: setGitReposByUser,
        setGitLanguages: setGitLanguages,
        setGitUsername: setGitUsername,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;
