import schedulerSvc from "./svc/courseService.js"
import scheduler from "./domain/scheduler.js"

console.log('in site.js')
scheduler.setCourses(await schedulerSvc.GetCourses());

