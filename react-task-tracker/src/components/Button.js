import PropTypes from 'prop-types'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Button = ({ color, text, showAdd, onClick }) => {
  return (
    <button 
      className="btn"
      style={{ background: color }}
      onClick={onClick}
    >
      {text} {!showAdd ? <FaCheck size={'0.8em'} /> : <FaTimes size={'0.8em'} />}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button