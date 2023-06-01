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
		setGitUsername,
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
		setGitUsername(localStorage.getItem("username") || "");
		console.log("gitUsername", gitUsername);
		if (gitUsername !== "") {
			getGitHubData();
		}
	}, [gitUsername]);

	const courses = [];
	for (let i = 0; i < 3; i++) {
		courses.push(
			<Col numColSpan={2}>
				<div className="container">
					<div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
						<div className="flex flex-col ">
							<div className="">
								<div className="relative h-62 w-full mb-3">
									<div className="absolute flex flex-col justify-between top-0 right-0 p-3">
										<button className="col mb-1 transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-8 h-8 text-center p-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className=""
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
												/>
											</svg>
										</button>
										<button className="col transition ease-in duration-300 bg-white  hover:text-blue-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
										</button>
									</div>
									<img
										alt="blog photo"
										src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
										className="max-h-40 w-full object-cover"
									/>
								</div>
								<div className="flex-auto justify-evenly">
									<div className="flex flex-wrap ">
										<div className="w-full flex-none text-sm flex items-center text-gray-600">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 text-red-500 mr-1"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<span className="text-gray-400 whitespace-nowrap mr-3">
												4.60
											</span>
										</div>
									</div>

									<p className="text-blue-500 text-2xl font-medium">
										Should You Get Online Education?
									</p>
									<p className="text-gray-800 text-sm font-medium mb-2">
										A comprehensive guide about online education.
									</p>
									<div className="my-4">
										<div className="flex space-x-1 items-center">
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 text-blue-600 mb-1.5"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</span>
											<p>1:34:23 Minutes</p>
										</div>
										<div className="flex space-x-1 items-center">
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 text-blue-600 mb-1.5"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
											</span>
											<p>3 Parts</p>
										</div>
										<div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
											<span className="m-1 px-2 py-1 rounded bg-blue-500">
												#online
											</span>
											<span className="m-1 px-2 py-1 rounded bg-blue-500">
												#internet
											</span>
											<span className="m-1 px-2 py-1 rounded bg-blue-500">
												#education
											</span>
										</div>
										<div className="flex items-center mt-2">
											<img
												className="w-10 h-10 object-cover rounded-full"
												alt="User avatar"
												src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
											/>

											<div className="pl-3">
												<div className="font-medium">Jean Marc</div>
												<div className="text-gray-600 text-sm">
													CTO of Supercars
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Col>
		);
	}

	return (
		<>
			<HeaderComponent />
			<main className="w-full border-none h-full p-4 sm:p-10 border-x border-gray-200">
				{!code && !gitUsername ? (
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
						<Col numColSpanLg={6}>
							<Flex justifyContent="between">
							{courses}
							</Flex>
							</Col>
					</Grid>
				)}
			</main>
		</>
	);
}
