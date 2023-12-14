
import Button from "./Button";
import "./Button.css";
import './Card.css'
const Card = (props) => {
    const {theme} = props
    return(
        <>
            <div className={`card ${theme}`}>
                <span>#15</span>
                <img className="pokemon-img" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt="" />
                <span>bulbasaur</span>
                <span>Type: Normal</span>
                <Button theme={"grass"} content={"Know more..."}/>   
            </div>
        </>
    )
}

export default Card;