import {useState} from 'react';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const StatisticLine = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
        <td>{text === 'positive' ? '%' : ''}</td>
    </tr>
);

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positiveFeedback = (good / total) * 100;

    if (total === 0) {
        return <p>No feedback given</p>
    } else {
        return (
            <div>
                <table>
                    <tbody>
                    <StatisticLine text="good" value={good}/>
                    <StatisticLine text="neutral" value={neutral}/>
                    <StatisticLine text="bad" value={bad}/>
                    <StatisticLine text="total" value={total}/>
                    <StatisticLine text="average" value={average}/>
                    <StatisticLine text="positive" value={positiveFeedback}/>
                    </tbody>
                </table>
            </div>
        )
    }
}
const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text='good'/>
            <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
            <Button onClick={() => setBad(bad + 1)} text='bad'/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};

export default App;


