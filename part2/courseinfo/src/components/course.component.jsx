import Header from "./header.component";
import Content from "./content.component";
import Total from "./total.component";

const Course = ({ course }) => {
  return (
    <div name={course.name} id={course.id}>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course;