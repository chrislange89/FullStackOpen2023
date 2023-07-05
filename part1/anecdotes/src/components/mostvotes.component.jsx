import propTypes from 'prop-types';

const MostVotes = ({ anecdotes, votes }) => {
  const max = Math.max(...votes);
  const index = votes.indexOf(max);

  return (
    <div>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[index]}</p>
      <p>has {max} votes</p>
    </div>
  )
}

MostVotes.propTypes = {
  anecdotes: propTypes.array.isRequired,
  votes: propTypes.array.isRequired
}


export default MostVotes;
