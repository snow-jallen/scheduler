import schedulerSvc from "./svc/courseService.js"
import scheduler from "./domain/scheduler.js"
import { renderSemesters } from "./ui/schedulerUI.js";
import * as jsPlumb from "/node_modules/@jsplumb/browser-ui/js/jsplumb.browser-ui.es.js"


const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')

console.log(box1, box2)

const instance = jsPlumb.newInstance({
    container: document.getElementsByClassName('container')[0]
});
instance.connect({
    source: box1,
    target: box2,
    connector: 'Straight'
})

const resp = fetch("https://raw.githubusercontent.com/snow-jallen/scheduler/master/package.json")
resp.then(r => r.json()).then(json => console.log(json))

scheduler.setCourses(await schedulerSvc.GetCourses());

const semesterDictionary = scheduler.getCoursesBySemester()

renderSemesters(semesterDictionary)

