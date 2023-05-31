import config from "../config";

export async function getCourses() {
	const res = await fetch(`https://www.udemy.com/api-2.0/courses/?page=1&page_size=5`, {
		headers: {
			"Content-Type": "application/json",
            "Authorization": `Basic ${config.udemyToken}`
		},
	});

	const coursesDetails = await res.json();
    console.log(coursesDetails);
	return coursesDetails;
}

export async function getCourseById(id:any) {
	const res = await fetch(`https://www.udemy.com/api-2.0/courses/${id}/`, {
		headers: {
			"Content-Type": "application/json",
            "Authorization": `Basic ${config.udemyToken}`
		},
	});

	const courseDetails = await res.json();
    console.log(courseDetails);
	return courseDetails;
}

// export async function getCourses() {
// 	const res = await fetch(`https://www.udemy.com/api-2.0/courses/?page=1&page_size=5`, {
// 		headers: {
// 			"Content-Type": "application/json",
//             "Authorization": `Basic ${config.clientSecretUdemy}`
// 		},
// 	});

// 	const coursesDetails = await res.json();
//     console.log(coursesDetails);
// 	return coursesDetails;
// }