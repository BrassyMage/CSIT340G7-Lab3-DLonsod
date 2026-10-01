const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = 'Data Structures and Algorithms'
  const exercises1 = 3
  const part2 = 'Object-Oriented Programming'
  const exercises2 = 3
  const part3 = 'Discrete Mathematics'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App