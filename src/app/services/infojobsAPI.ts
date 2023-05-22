const infoJobsTokenBasic ="NWViZGVlZDA0ZjlkNDAzM2I5YmEwYWY0NzRiNTEyZTg6REd5bGExcUw2UEhMVVc5NEg4cXRXT3R3MWVqNXEyN3E1MXlwQktMaHBGUEh0bXB4SFo=";
const infoJobsTokenBearer = "79981398-2fb1-4b76-8d3d-33300e22bf77";

export async function getCandidateInfo() {
	const res = await fetch("https://api.infojobs.net/api/6/candidate", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${infoJobsTokenBasic}, Bearer ${infoJobsTokenBearer}`,
		},
	});

	const item = await res.json();

	return item;
}
