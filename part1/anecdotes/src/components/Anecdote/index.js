import React from 'react'

const Anecdote = ({
  text,
  numVotes,
}) => {
  return (
    <>
      <div className="anecdote">
        {text}
      </div>
      <div>{`has ${numVotes} votes`}</div>

    </>
  )
}

export default Anecdote;
