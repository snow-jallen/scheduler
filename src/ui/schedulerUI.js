export const getSemesterElement = (semesterName, courses) => {
  const courseElements = courses.map(c => {
    const courseDiv = document.createElement('div')
    courseDiv.id = c.id
    courseDiv.classList.add("course-card")
    courseDiv.innerHTML = `
      <h4>${c.id}: ${c.title}</h4>
      <p>credits: ${c.credits}</p>
    `
    return courseDiv
  })

  const semesterDiv = document.createElement('div')
  semesterDiv.id = semesterName
  semesterDiv.classList.add("semester-column")

  semesterDiv.innerHTML = `
    <h3>${semesterName}</h3>
  `
  semesterDiv.append(...courseElements)
  return semesterDiv;
}

export const renderSemesters = (coursesDictionary) => {
  const rowDiv = document.getElementById('semester-row')
  const semesterDivs = Object
    .entries(coursesDictionary)
    .map(([semesterName, courseList]) =>
      getSemesterElement(semesterName, courseList)
    )
  rowDiv.replaceChildren(...semesterDivs)
}