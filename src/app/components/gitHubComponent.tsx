"use client"
import {
	Bold,
	Flex,
	Title,
	Text,
	Accordion,
	AccordionBody,
	AccordionHeader,
	Badge,
	List,
	ListItem,
	Button,
} from "@tremor/react";
import ButtonComponent from "./buttonComponent";
import AppContext from "../context/app-context";
import { useContext } from "react";

export function GitHubComponent(props: {}) {
	const { gitUserDetails, gitReposByUser, gitLanguages } = useContext(AppContext);
	
	return (
		<div className="h-auto">
			<Flex justifyContent="start" className="space-x-4">
				<img
					src={gitUserDetails.avatar_url}
					alt="avatar"
					width={50}
					height={50}
					className="rounded-s-md"
				/>
				<Title className="truncate">{gitUserDetails.login}</Title>
			</Flex>
			<Flex className="mt-3">
				<Text>{gitUserDetails.bio}</Text>
			</Flex>
			{gitLanguages.map((language) => (
				<Badge key={language} className="mr-2 mt-3" size="xs">
					{language}
				</Badge>
			))}
			<Accordion className="mt-6">
				<AccordionHeader>
					<div className="space-y-2">
						<Text>
							Repositorios Públicos: <Bold>{gitUserDetails.public_repos}</Bold>
						</Text>
					</div>
				</AccordionHeader>
				<AccordionBody>
					<List className="mt-4 h-72 overflow-y-scroll">
						{gitReposByUser.map((repo) => (
							<ListItem
								key={repo.full_name}
								onClick={() => window.open(repo.html_url, "_blank")}
								className="cursor-pointer"
							>
								<Flex justifyContent="start" className="truncate space-x-4">
									<div className="truncate">
										<Text className="truncate">
											<Bold>{repo.full_name}</Bold>
										</Text>
										<Text className="truncate">{repo.description}</Text>
									</div>
								</Flex>
								{repo.language ? (
									<Badge className="mr-2 mt-3" size="xs">
										{repo.language}
									</Badge>
								) : null}
							</ListItem>
						))}
					</List>
				</AccordionBody>
			</Accordion>
			<Flex justifyContent="end">
				<Button
					size="sm"
					variant="secondary"
					iconPosition="right"
					className="mt-4"
					onClick={() => window.open(gitUserDetails.html_url, "_blank")}
				>
					Ir a GitHub
				</Button>
			</Flex>
		</div>
	);
}
