import React, {useState} from 'react';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Header = ({text}) => <h1>{text}</h1>
const App = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast is to go well.'
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const handleVote = (anecdoteIndex) => {
        const votesCopy = [...votes]
        votesCopy[anecdoteIndex] = votesCopy[anecdoteIndex] + 1
        setVotes(votesCopy)
    }
    const getRandomAnecdote = () => {
        const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomAnecdote)
    }

    const maxVotesIndex = votes.indexOf(Math.max(...votes));

    return (
        <div>
            <div>
                <Header text='Anecdote of the day'/>
                <p>{anecdotes[selected]}</p>
                <p>has votes: {votes[selected] ? votes[selected] : 'no votes yet'}</p>


                <Button onClick={getRandomAnecdote} text='next anecdote'/>
                <Button onClick={() => handleVote(selected)} text='vote'/>
            </div>

            {votes[maxVotesIndex] > 0 && (
                <div>
                    <Header text='Anecdote with most votes'/>
                    <p>{anecdotes[maxVotesIndex]}</p>
                    <p>has votes: {votes[maxVotesIndex]} </p>
                </div>
            )}
        </div>
    );
};

export default App;
