import { useState, useEffect } from "react";
import Button from "./componants/Button";
import Card from "./componants/Card";
import CardList from "./componants/CardList";

const INITIAL_API = 'https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1';

const App = () => {
  const [apiEndPoint, setApiEndPoint] = useState(INITIAL_API);
  const [pokemonData, setPokemonData] = useState([])

  async function getPokemonData(endPoint) {
    const response = await fetch(endPoint);
    const pokemonData = await response.json();
    setApiEndPoint(pokemonData[0].next);
    // console.log(pokemonData[0]);

    const promisePokemonArray = pokemonData[0].results.map((pokemon) => {
      return fetch(pokemon.url)
    })

    /*pokemonData[0].results.map((pokemon) -> this term is nothing but the whatever 
    the data in the first url ka result usko loop laga raha hai throught map  badme
    har ak pokemon ko pakdke ke uske url ko return kr raha aisa har pokeman ke url ka Array ban raha hai */

    let individualPromiseArrayResponse = await Promise.all(promisePokemonArray);
    // console.log(individualPromiseArrayResponse);
    individualPromiseArrayResponse = individualPromiseArrayResponse.map((pokemonResponse) => {
      return pokemonResponse.json();
    })
    const individualPromiseArrayData = await Promise.all(individualPromiseArrayResponse);
    // console.log(individualPromiseArrayData);
    const finalPokemonArrayData = individualPromiseArrayData.map((pokemonArr)=>{
      return pokemonArr[0];
    })
    setPokemonData((prev)=>{
      return [...prev, ...finalPokemonArrayData];
    })
    console.log(finalPokemonArrayData);
  }
  
  function handleFetchmorePokemon(){
    getPokemonData(apiEndPoint)
  }

  useEffect(() => {
    getPokemonData(apiEndPoint);
  }, [])

  return (
    <>
      <section>
        {pokemonData.map((pokemon)=>{
          return (
            <div>{pokemon.name}</div>
          )
        })}
      </section>        
      <Button content={'Know More...'} theme={"normal"} title={'sample1'} disabled={true} />
      <Button content={'Know More...'} theme={"grass"} title={'sample2'} disabled={false} />
      <Button theme={"grass"} title={'sample3'} disabled={false} /> 
      
      <Card theme={'grass'} />
      <CardList pokemonData={pokemonData}/>

      {apiEndPoint && <button onClick={handleFetchmorePokemon}>Get more Pokemon</button>}
      
    </>
  )
}

export default App;
