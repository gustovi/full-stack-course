import Header from './Header.jsx';
import Content from './Content.jsx';
import Total from "./Total.jsx";

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