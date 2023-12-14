
import Card from "./Card";
const CardList = ({pokemonData}) =>{
    return (
        <>
            {pokemonData.map((pokemon)=>{
                return <Card />
            })}
        </>
    )
}

export default CardList;