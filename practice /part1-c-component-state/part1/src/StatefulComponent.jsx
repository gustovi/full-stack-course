import {useState} from "react";

const StatefulComponent = () => {
    const [counter, setCounter] = useState(0)

    setTimeout(
        ()=> setCounter(counter + 1),
        1000
    )
    console.log(counter)
    return (
        <div>{counter}</div>
    )
}

export default StatefulComponent