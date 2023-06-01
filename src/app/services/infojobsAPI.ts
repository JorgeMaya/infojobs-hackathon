import config from "../config";

const cv_url = "https://api.infojobs.net/api/2/curriculum/";
const experience_lvl = "https://api.infojobs.net/api/2/curriculum/##CODE##/experience";
const skills = "https://api.infojobs.net/api/2/curriculum/##CODE##/skill";

export async function getCurriculumList(token: string) {
	const res = await fetch(cv_url, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${config.authorizationCode}, Bearer ${token}`,
		},
	});

	const json = await res.json();
	if (json.error) return null;

	const cv = json.filter((curriculum: any) => curriculum.principal === true)[0];
	console.log('cv: ', cv);
	if (json.error) return null;

	return cv.code;
}

export async function getCurriculumById(token: string, code: string) {
  const res = await fetch(`${cv_url}${code}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${config.authorizationCode}, Bearer ${token}`,
    },
  });

  const json = await res.json();
  if (json.error) return null;

  const cv = json.filter((curriculum: any) => curriculum.principal === true)[0];

  if (json.error) return null;

  return cv.code;
}

export async function getExperiences(token: string, curriculumId: any) {
	const url = experience_lvl.replace("##CODE##", curriculumId);
	const res = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${config.authorizationCode}, Bearer ${token}`,
		},
	});

	const json = await res.json();
	if (json.error) return null;

	let experiences = json.experience.map((experience: any) => {
		const job = experience.job;
		const categories = experience.subcategories.join(", ");
		return `${job}, ${categories}`;
	});

	experiences = experiences.join(", ");
	let words = experiences.split(" ");
	let uniqueExperiences: any = Array.from(new Set(words));
	uniqueExperiences = uniqueExperiences.join(", ").replaceAll(", ,", ",");

	return uniqueExperiences;
}

export async function getSkills(token: string, curriculumId: string) {
	const url = skills.replace("##CODE##", curriculumId);
	const res = await fetch(url, {
	headers: {
		"Content-Type": "application/json",
		Authorization: `Basic ${config.authorizationCode}, Bearer ${token}`,
	},
	});

	const json = await res.json();

	if (json.error) return null;

	let expertises = json.expertise.map((expertises: any) => {
	return expertises.skill;
	});

	return expertises;
}
