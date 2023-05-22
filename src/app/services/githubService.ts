import { GitRepo, GitUserDetails } from "../types";

interface APIRepo {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Object;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: Date;
	updated_at: Date;
	pushed_at: Date;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: string;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: any[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
}

export async function getUser(id: string) {
	const res = await fetch(`https://api.github.com/users/${id}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	const userDetails: GitUserDetails = await res.json();

	return userDetails;
}

export async function getReposByUser(id: string) {
	const res = await fetch(`https://api.github.com/users/${id}/repos`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	const repos: APIRepo[] = await res.json();

	const listOfRepos: GitRepo[] = repos.map((repo) => {
		const { full_name, language, html_url, description } = repo;
		return { full_name, language, html_url, description } as GitRepo;
	});

	return listOfRepos;
}

export async function getUserLanguages(id: string) {
	const repos = await getReposByUser(id);
	const languages: string[] = [];

	for (const repo in repos) {
		if (repos[repo].language && !languages.includes(repos[repo].language))
			languages.push(repos[repo].language);
	}

	return languages;
}
