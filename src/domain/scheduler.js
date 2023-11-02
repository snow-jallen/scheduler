import scheduler from "../svc/courseService.js"

let courses = []

const setCourses = (courseList) => {
    courses = courseList
}

const getCourses = () => courses;

const getCoursesBySemester = () => {
    let semester = 'Fall'
    let year = 1

    let courseDictionary = { }
    let unscheduledCourses = [...courses]
    const scheduledCourseIds = [];

    while (unscheduledCourses.length > 0) {
        const currentCourses = []; // courses we will take this semester
        const thisSemestersScheduledIds = [] // we cant say we've taken a course until the end of the semester

        unscheduledCourses.forEach((course) => {
            const filteredPrereqs = course.prereqs.filter(id => !scheduledCourseIds.includes(id));

            if (!filteredPrereqs.length) {
                currentCourses.push(course);
                thisSemestersScheduledIds.push(course.id);
            }
        });

        // move semester and year to the next values
        courseDictionary[semester + " " + year] = currentCourses;
        if (semester === "Fall") {
            semester = "Spring"
        }
        else {
            year++;
            semester = "Fall"
        }

        // remove courses we schedule from the remaining courses
        unscheduledCourses = unscheduledCourses.filter(
            (course) => !thisSemestersScheduledIds.includes(course.id)
        )

        // update past schedule with classes we took that semester
        scheduledCourseIds.push(...thisSemestersScheduledIds)

    }
    return courseDictionary;
}

export default {
    setCourses,
    getCourses,
    getCoursesBySemester,
}

/*
Today's talking points
- async / await
- this.
- list expansion
- top level statements only in site.js (because they block)
*/