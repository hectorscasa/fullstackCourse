import React from 'react'

const Total = ({parts}) => {

  let numberOfExercises = 0;

  parts.forEach(({exercises}) => {
    numberOfExercises += exercises;
  })

  return (
    <p>Number of exercises {numberOfExercises}</p>
  )
}

export default Total;