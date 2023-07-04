import React from 'react';
import StatisticLine from './statisticline.component';

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  const average = Math.fround((good - bad) / total);
  const positive = Math.fround(good / total);
  
  const noStats = () => {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const stats = () => {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${(positive * 100).toFixed(2)}%`} />
        </tbody>
      </table>
    )
  }

  return (
    (total === 0) ? noStats() : stats()
  )
}

export default Statistics;