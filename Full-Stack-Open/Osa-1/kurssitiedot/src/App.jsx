const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const total = {
    name: 'Number of exercises',
    sum: course.parts[0].exercises
    + course.parts[1].exercises
    + course.parts[2].exercises
  }

  return (
    <>  
      <Header str={course.name}/>        
      <Content parts={course.parts}/>
      <Total name={total.name} sum={total.sum}/>
    </>
  )
}
const Header = (props) => {
  console.log('Header:', {props})
  return (<h1>{props.str}</h1>)
}
const Content = (props) => {
  console.log('Content:', {props})
  return (
    <>
      <Part str={props.parts[0].name} val={props.parts[0].exercises}/>
      <Part str={props.parts[1].name} val={props.parts[1].exercises}/>
      <Part str={props.parts[2].name} val={props.parts[2].exercises}/>
    </>
  )
}
const Total = (props) => {
  console.log('Total:', {props})
  return (<Part str={props.name} val={props.sum}/>)
}
const Part = (props) => {
  console.log('=> Part:', {props})
  return (<p>{props.str} {props.val}</p>)
}
export default App