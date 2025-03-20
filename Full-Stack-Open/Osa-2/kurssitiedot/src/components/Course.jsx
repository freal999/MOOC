const Course = () => {
    return (
        <div>
            <Courses courses={courses} />
        </div>
    )
}
const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]
const Courses = ({ courses }) => {
    return (
        courses.map(course =>
            <div key={course.id}>
                <Header course={course} />
                <ul>
                    <Content parts={course.parts} />
                </ul>
                <Total parts={course.parts} />
            </div>
        )
    )
}
const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}
const Content = ({ parts }) => {
    return (
        parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)
    )
}
const Total = ({ parts }) => {
    let total = 0;
    parts.map(part => total += part.exercises)
    return (<p><b>total of {total} exercises</b></p>)
}
export default Course