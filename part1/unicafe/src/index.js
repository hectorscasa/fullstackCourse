import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics'
import ButtonsList from './componentsLists/ButtonsList'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicked = () => {
    setGood(good+1);
  }

  const handleNeutralClicked = () => {
    setNeutral(neutral+1);
  }

  const handleBadClicked = () => {
    setBad(bad+1);
  }

  const buttonsArray = [
    {
      handleClick: handleGoodClicked,
      label: 'good',
    },
    {
      handleClick: handleNeutralClicked,
      label: 'neutral',
    },
    {
      handleClick: handleBadClicked,
      label: 'bad',
    },
  ]

  return (
    <div>
      <h2>give feedback</h2>

      <ButtonsList buttonsArray={buttonsArray} />


      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
