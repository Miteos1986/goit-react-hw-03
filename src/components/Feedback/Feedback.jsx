// import css from "./Feedback.module.css"
import PropTypes from 'prop-types';

const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback}) => {
  return (
    <div>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad} </p>
        <p>Total: {totalFeedback} </p>
        <p>PositiveFeedback: {`${positiveFeedback}%`} </p>
    </div>
  )
}

Feedback.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        totalFeedback: PropTypes.number.isRequired,
        positiveFeedback: PropTypes.number.isRequired
}

export default Feedback