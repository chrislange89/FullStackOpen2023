import PropTypes from 'prop-types';

const Notification = ({ message, notificationType }) => {
  if (message === null) {
    return null;
  }
  return (
    <div className={notificationType}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  notificationType: PropTypes.string.isRequired,
}

export default Notification;