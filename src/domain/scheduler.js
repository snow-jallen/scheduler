import scheduler from "../svc/courseService.js"

let courses = []

const setCourses = (courseList) => {
    courses = courseList
}

const getCourses = () => courses;

const getCoursesBySemester = () => {
    let semester = 'Fall'
    let year = 1

    let courseDictionary = {}
    let unscheduledCourses = [...courses]
    while(unscheduledCourses.length > 0) {

    }
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