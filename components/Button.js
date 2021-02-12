import PropTypes from 'prop-types'
import buttonStyles from '../styles/components/Button.module.css'

const Button = (props) => {
    return <button 
              className={props.className}
              onClick={props.onClick}>
                {props.children}
            </button>
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button