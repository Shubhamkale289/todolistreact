
import './Button.css'

const Button = (props) =>{
    const {content = 'Know more...', theme} = props
    return (
        <>
            <button className={`btn ${theme}`} {...props}>{content}</button>
        </>
    )
}

export default Button;