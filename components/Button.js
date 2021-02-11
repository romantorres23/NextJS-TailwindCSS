
import buttonStyles from '../styles/components/Button.module.css'

const Button = ({ color, text, className }) => {
    return <button style={{backgroundColor: color}} className={className}>{text}</button>
}

export default Button