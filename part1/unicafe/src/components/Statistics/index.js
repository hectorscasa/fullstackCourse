import React from 'react'
import Statistic from '../Statistic';

const Statistics = ({
  good,
  neutral,
  bad,
}) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good * 100 / all;

  if (!all) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics;
