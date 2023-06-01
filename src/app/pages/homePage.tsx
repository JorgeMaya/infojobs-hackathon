"use client";
import { Card, Grid, Col, Flex } from "@tremor/react";
import { DetailsComponent } from "../components/detailsComponent";
import { DesirePositionComponent } from "../components/desirePositionComponent";
import { GitHubComponent } from "../components/gitHubComponent";
import { useContext, useEffect } from "react";
import AppContext from "../context/app-context";
import HeaderComponent from "../components/headerComponent";
import LogInComponent from "../components/logInComponent";
import {
	getReposByUser,
	getUser,
	getUserLanguages,
} from "../services/githubService";

export function HomePage(props: {}) {
	const {
		setCode,
		gitUsername,
		setGitUserDetails,
		setGitReposByUser,
		setGitLanguages,
		code,
		setGitUsername
	} = useContext(AppContext);

	const getGitHubData = async () => {
		setGitUserDetails(await getUser(gitUsername));
		setGitReposByUser(await getReposByUser(gitUsername));
		setGitLanguages(await getUserLanguages(gitUsername));
	};

	useEffect(() => {
		const url = window.location.href;
		const code = url.split(/[?=&]/)[2];
		console.log("code", code);
		setCode(code);
		setGitUsername(sessionStorage.getItem("username") || "");
		console.log("gitUsername", gitUsername);
		if (gitUsername !== "") {
			getGitHubData();
		}
	}, [gitUsername]);

	return (
		<>
			<HeaderComponent />
			<main className="w-full border-none h-full p-4 sm:p-10 border-x border-gray-200">
				{ !code && !gitUsername ? (
					<Flex justifyContent="center">
						<LogInComponent />
					</Flex>
				) : (
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
									className="h-fit"
								>
									<DesirePositionComponent />
								</Card>
								<Card
									decoration="left"
									decorationColor="purple"
									className="h-fit"
								>
									<GitHubComponent />
								</Card>
							</div>
						</Col>
					</Grid>
				)}
			</main>
		</>
	);
}
