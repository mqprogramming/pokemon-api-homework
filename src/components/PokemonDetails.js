import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = (props) => {
  // console.log(props.selectedPokemon);
  if (Object.values(props.selectedPokemon).length == 0) { 
    return null
  } else {

    const types = [];
    for (const type of Object.values(props.selectedPokemon.types)) {
      types.push(<td>{type.type.name}</td>)
    }

    const sprites_names = [];
    const sprites_imgs = [];
    for (const sprite of Object.entries(props.selectedPokemon.sprites)) {
      if (sprite[1] !== null) {
        sprites_names.push(<th>{sprite[0]}</th>)
        sprites_imgs.push(<td><img src={sprite[1]} alt="poke sprite"></img></td>)
      };
    }

    const base_stats = [];
    for (const stat of Object.values(props.selectedPokemon.stats)) {
      base_stats.push(<td>{stat.base_stat}</td>)
    }

    return (
      <div>
        <div>
          <h2>{props.selectedPokemon.name}, #{props.selectedPokemon.id}</h2>
        </div>
        <div>
          <h3> Type(s) </h3>
          <table className="redTable">
            <tr>
              {types}
            </tr>
          </table>
        </div>
        <div>
          <h3> Form(s) </h3>
          <table className="redTable">
            <tr>
              {sprites_names}
            </tr>
            <tr>
              {sprites_imgs}
            </tr>
          </table>
          <h3> Base Stats </h3>
          <table className="redTable">
            <tr>
              <th>Speed</th>
              <th>Special Defence</th>
              <th>Special Attack</th>
              <th>Defence</th>
              <th>Attack</th>
              <th>HP</th>
            </tr>
            <tr>
              {base_stats}
            </tr>
          </table>
        </div>
      </div>
    )
  }

}

export default PokemonDetails;