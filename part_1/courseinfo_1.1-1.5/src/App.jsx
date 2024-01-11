const Part = ({name, exercises}) => <p>{name} {exercises}</p>


const Total = ({totalExercises}) => <p>Total Exercises: {totalExercises}</p>


const Content = ({parts}) => {
    return (
        parts.map((content, index) =>
            <Part key={index} name={content.name} exercises={content.exercises}/>
        )

    )
}

const Header = (props) => {
    return (
            <h1>{props.name}</h1>
    )
}
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
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total totalExercises={course.parts.reduce((accum, currentValue) => accum + currentValue.exercises, 0)
            }/>
        </div>
    )
}

export default App