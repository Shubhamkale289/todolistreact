
import Button from "./Button";
import "./Button.css";
import './Card.css'
const Card = (props) => {
    const {id, name, type, imageUrl} = props
    return(
        <>
            <div className={`card ${type}`}>
                <span>#{id}</span>
                <img className="pokemon-img" src={imageUrl} alt="" />
                <span>{name}</span>
                <span>Type: {type}</span>
                <Button type={type} content={"Know more..."}/>   
            </div>
        </>
    )
}

export default Card;