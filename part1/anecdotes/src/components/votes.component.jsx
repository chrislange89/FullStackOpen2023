import PropTypes from "prop-types";

const Votes = ({anecdotes, votes, selected, handleVote, handleClick}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

Votes.propTypes = {
  anecdotes: PropTypes.array.isRequired,
  votes: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  handleVote: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Votes;

