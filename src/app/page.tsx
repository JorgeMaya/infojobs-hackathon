import { Card, Title, Text, Grid, Col } from "@tremor/react";
import { DetailsComponent } from "./components/detailsComponent";
import { GitHubComponent } from "./components/gitHubComponent";
import { getReposByUser, getUser, getUserLanguages } from "./services/githubService";
import { DesirePositionComponent } from "./components/desirePositionComponent";
import { SkillComponent } from "./components/skillComponent";

export default async function Home() {
	const gitUserDetails = await getUser("midudev");
	const gitReposByUser = await getReposByUser("midudev");
	const gitLanguages = await getUserLanguages("midudev");

	return (
		<main className="w-full border-none h-full p-4 sm:p-10 border-x border-gray-200">
			<Grid numColsLg={6} className="gap-6 mt-6">
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
				<Col numColSpanLg={1}>
					<Card>
						<SkillComponent />
					</Card>
				</Col>
				<Col numColSpanLg={1}>
					<Card>
						<SkillComponent />
					</Card>
				</Col>
				<Col numColSpanLg={1}>
					<Card>
						<SkillComponent />
					</Card>
				</Col>
				<Col numColSpanLg={1}>
					<Card>
						<SkillComponent />
					</Card>
				</Col>
				<Col numColSpanLg={1}>
					<Card>
						<SkillComponent />
					</Card>
				</Col>
				<Col numColSpanLg={1}>
					<Card>
						<SkillComponent />
					</Card>
				</Col>
			</Grid>
		</main>
	);
}
