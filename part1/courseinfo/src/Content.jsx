import {Part} from "./Part.jsx";


export default function Content({parts}) {
    return (
        parts.map((content, index) =>
            <Part key={index} name={content.name} exercises={content.exercises}/>
        )

    )
}
