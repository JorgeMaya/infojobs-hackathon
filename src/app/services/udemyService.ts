export async function getCourses() {
	const res = await fetch(`https://www.udemy.com/api-2.0/courses/?page=1&page_size=5`, {
		headers: {
			"Content-Type": "application/json",
            "Authorization": "Basic V2pFQlVJUlNkb0V2UVlxRFV5TmFRMDl5eXo2cnN6ZVlPZ01SVkdCMDpKaTRVV2JHSXVhTkFsZFZjTnBNSFdZRm5hdFlMaTBUOU8zSVRRNHRaR1BjMExVNzNHcWJGa1dXZU1TemJtVGlkT3dRNEtDMW5XSEhxaWtOaG5KdHZ5SmpCNTF3blZTNkFCeFZzUkZoS012Q0R2T0IzR05aU2FmVHFGNmFERFQzWg=="
		},
	});

	const coursesDetails = await res.json();
    console.log(coursesDetails);
	return coursesDetails;
}