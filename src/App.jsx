import { useEffect } from 'react'

const course = {
  name: 'CSIT340 - Industry Elective 1',
  parts: [
    { name: 'CSIT321 - Applications Development and Emerging Technologies', exercises: 3 },
    { name: 'CSIT327 - Information Management 2', exercises: 3 },
    { name: 'CSITELEC1 - CSIT Elective 1', exercises: 3 },
  ],
}

const styles = {
  container: {
    fontFamily: '"Press Start 2P", monospace',
    maxWidth: '700px',
    margin: '40px auto',
    padding: '24px',
    background: '#29366f',
    border: '4px solid #000',
    boxShadow: '6px 6px 0 #000',
    color: '#fff',
    lineHeight: 1.8,
  },
  header: {
    fontSize: '18px',
    color: '#ffcd75',
    textShadow: '3px 3px 0 #b13e53',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '24px',
    lineHeight: 1.6,
  },
  part: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    marginBottom: '12px',
    background: '#333c57',
    border: '4px solid #000',
    fontSize: '10px',
  },
  units: {
    background: '#38b764',
    color: '#000',
    padding: '6px 8px',
    border: '3px solid #000',
    fontSize: '8px',
    whiteSpace: 'nowrap',
  },
  total: {
    marginTop: '20px',
    padding: '12px',
    background: '#b13e53',
    border: '4px solid #000',
    fontSize: '12px',
    textAlign: 'right',
  },
  footer: {
    marginTop: '24px',
    marginBottom: 0,
    fontSize: '8px',
    color: '#94b0c2',
    textAlign: 'center',
  },
}

const Header = (props) => (
  <h1 style={styles.header}>{props.course.name}</h1>
)

const Part = (props) => (
  <div style={styles.part}>
    <span>{props.part.name}</span>
    <span style={styles.units}>{props.part.exercises} units</span>
  </div>
)

const Content = (props) => (
  <div>
    {props.course.parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
)

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <div style={styles.total}>Total units: {total}</div>
}

const Footer = (props) => (
  <p style={styles.footer}>
    {props.name} - {props.courseCode} - {props.section}
  </p>
)

const App = () => {
  const fullName = 'D\'Lonsod, Beatrice'
  const courseCode = 'CSIT340'
  const section = 'G7'

  useEffect(() => {
    document.body.style.background = '#1a1c2c'
    document.body.style.margin = '0'
    document.body.style.padding = '0 16px'
    document.body.style.minHeight = '100vh'
    return () => {
      document.body.style.background = ''
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.body.style.minHeight = ''
    }
  }, [])

  return (
    <div style={styles.container}>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
