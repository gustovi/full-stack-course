import {useState} from "react";

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Display = ({counter}) => <div>{counter}</div>
const EventHandling = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)
    const increaseByOne = () => setCounter(counter + 1)
    console.log('increasing, value before', counter)
    const decreaseByOne = () => setCounter(counter - 1)
    console.log('decreasing, value before', counter)
    const setToZero = () => setCounter(0)
    console.log('resetting to zero, value before', counter)

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text='plus'/>
            <Button onClick={setToZero} text='zero'/>
            <Button onClick={decreaseByOne} text='minus'/>
        </div>
    )
}
export default EventHandling