const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises
  return <p>Total units: {total}</p>
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 3 },
      { name: 'CSIT327 - Information Management 2', exercises: 3 },
      { name: 'CSITELEC1 - CSIT Elective 1', exercises: 3 },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App