import {useState} from 'react';

const Statistics = ({text, value}) => <p>{text} {value} {text === 'positive' ? '%' : ''}</p>;

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;
    const average = (good + bad * -1) / total;
    const positiveFeedback = (good / total) * 100;

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h1>statistics</h1>
            {
                total === 0 ? <p>No feedback given</p> :
                    <>
                        <Statistics text="good" value={good}/>
                        <Statistics text="neutral" value={neutral}/>
                        <Statistics text="bad" value={bad}/>
                        <Statistics text="total" value={total}/>
                        <Statistics text="average" value={average}/>
                        <Statistics text="positive" value={positiveFeedback}/>
                    </>

            }
        </div>
    )
};

export default App;


// urmeaza sa fac 1.10: unicafe step5