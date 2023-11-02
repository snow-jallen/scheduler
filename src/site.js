import schedulerSvc from "./svc/courseService.js"
import scheduler from "./domain/scheduler.js"
import { renderSemesters } from "./ui/schedulerUI.js";


scheduler.setCourses(await schedulerSvc.GetCourses());

const semesterDictionary = scheduler.getCoursesBySemester()

renderSemesters(semesterDictionary)