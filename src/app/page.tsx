import { Card, Title, Text, Grid, Col } from "@tremor/react";
import { DetailsComponent } from "./components/detailsComponent";
import { getReposByUser, getUser, getUserLanguages } from "./services/githubService";
import { DesirePositionComponent } from "./components/desirePositionComponent";
import { SkillComponent } from "./components/skillComponent";
import Image from "next/image";
import { getToken } from "./api/infoJobs";
import { GitHubComponent } from "./components/gitHubComponent";
import { useContext, useEffect } from "react";
import AppContext from "./context/app-context";


export default async function Home() {
	const gitUserDetails = await getUser("midudev");
	const gitReposByUser = await getReposByUser("midudev");
	const gitLanguages = await getUserLanguages("midudev");
	const { setState } = useContext(AppContext);

	useEffect(() => {
		// https://verdant-melba-05d66d.netlify.app/?code=e15754dc-3741-4db5-84e9-33384c14250a&scopes=MY_APPLICATIONS,CV,CANDIDATE_READ_CURRICULUM_SKILLS,CANDIDATE_PROFILE_WITH_EMAIL&auth_type=api
		const url = window.location.href;
		const code = url.split(/? = &/)[2];
		console.log('code', code);
		return () => {
			setState(code);
		}
	}, [])
	
	return (
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
	);
}
