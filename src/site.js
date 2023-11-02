import schedulerSvc from "./svc/courseService.js"
import scheduler from "./domain/scheduler.js"


scheduler.setCourses(await schedulerSvc.GetCourses());

console.log(scheduler.getCoursesBySemester())