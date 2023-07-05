import React from 'react';
import './total.styles.css'

const Total = ({ parts }) => {

  const sumOfExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p className='total'>Number of exercises {sumOfExercises}</p>
  );
}

export default Total;