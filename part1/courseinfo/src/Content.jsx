import {Part} from "./Part.jsx";


export default function Content ({parts}){
    return(
        parts.map(content =>
            <Part key={content.name} name={content.name} exercises={content.exercises}/>
        )

    )
}
