import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button';
import Anecdote from './components/Anecdote';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const seeAnotherAnecdote = () => {
    const newIndex = Math.floor(Math.random() * (props.anecdotes.length - 1));

    setSelected(newIndex);
  }
  
  const getAnecdoteVotesByIndex = (index) => {
    return votes[index];
  }
  
  const voteAnecdote = () => {
    const votesCopy = [...votes];
    // increment the value in position 2 by one
    votesCopy[selected] += 1;

    setVotes(votesCopy);
  }


  const anecdoteMostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={anecdotes[selected]} numVotes={getAnecdoteVotesByIndex(selected)} />
      <Button label="vote" handleClick={voteAnecdote} />
      <Button label="next anecdote" handleClick={seeAnotherAnecdote} />

      <h2>Anecdote with most votes</h2>
      <Anecdote text={anecdotes[anecdoteMostVotedIndex]} numVotes={getAnecdoteVotesByIndex(anecdoteMostVotedIndex)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)