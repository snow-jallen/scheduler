import scheduler from "../svc/courseService.js"

let courses = []

const setCourses = (courseList) => {
    courses = courseList
}

const getCourses = () => courses;

const getCoursesBySemester = () => {
    let semester = 'Fall'
    let year = 1

    let courseDictionary = {
    }
    let unscheduledCourses = [...courses]
    const scheduledCourses = [];

    while (unscheduledCourses.length > 0) {
        console.log(unscheduledCourses)
        const currentCourses = [];
        unscheduledCourses.forEach((course) => {
            if (!course.prereqs.filter(p => !scheduledCourses.includes(p)).length)
            {
                currentCourses.push(course);
                scheduledCourses.push(course.id);
            }
        });

        courseDictionary[semester + " " + year] = currentCourses;
        if (semester === "Fall") {
            semester = "Spring"   
        }
        else {
            year++;
            semester = "Fall"
        }

        console.log(currentCourses)
        unscheduledCourses = unscheduledCourses.filter((course) => {
            if (currentCourses.includes(course)) {
                return false;
            } else { 
                return true;
            }
        })

        

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