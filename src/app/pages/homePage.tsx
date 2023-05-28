"use client";
import { Card, Grid, Col } from "@tremor/react";
import { DetailsComponent } from "../components/detailsComponent";
import {
	getReposByUser,
	getUser,
	getUserLanguages,
} from "../services/githubService";
import { DesirePositionComponent } from "../components/desirePositionComponent";
import { GitHubComponent } from "../components/gitHubComponent";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/app-context";
import HeaderComponent from "../components/headerComponent";
import { GitUserDetails } from "../types";
import { GitRepo } from "../types";

export function HomePage(props: {}) {
	const [gitUserDetails, setGitUserDetails] = useState({} as GitUserDetails);
	const [gitReposByUser, setGitReposByUser] = useState([] as GitRepo[]);
	const [gitLanguages, setGitLanguages] = useState([] as string[]);

	const getGitData = async () => {
		setGitUserDetails(await getUser("midudev"));
		setGitReposByUser(await getReposByUser("midudev"));
		setGitLanguages(await getUserLanguages("midudev"));
	};
	const { setState } = useContext(AppContext);

	useEffect(() => {
		const url = window.location.href;
		const code = url.split(/[?=&]/)[2];
		console.log("code", code);
		setState(code);
		getGitData();
	}, []);

	return (
		<>
			<HeaderComponent />
			<main className="w-full border-none h-full p-4 sm:p-10 border-x border-gray-200">
				<Grid numColsLg={6} className="gap-6">
					<Col numColSpanLg={4}>
						<Card className="h-full">
							<DetailsComponent />
						</Card>
					</Col>

					<Col numColSpanLg={2}>
						<div className="space-y-6">
							<Card
								decoration="left"
								decorationColor="cyan"
								key={gitUserDetails.login}
								className="h-fit"
							>
								<DesirePositionComponent />
							</Card>
							<Card
								decoration="left"
								decorationColor="purple"
								key={gitUserDetails.login}
								className="h-fit"
							>
								<GitHubComponent
									gitUserDetails={gitUserDetails}
									gitRepos={gitReposByUser}
									gitUserLanguages={gitLanguages}
								/>
							</Card>
						</div>
					</Col>
				</Grid>
			</main>
		</>
	);
}
