import { NextResponse } from "next/server";

const gitToken = "wqeqwe";

export async function getOfferDescriptionById(id: string) {
	const res = await fetch(`https://api.github.com/users/${id}/repos`);
	const description = await res.json();

	console.log(description);

	return description;
}

