import React from 'react';

const PokemonSelector = (props) => {
  // console.log("props", props)
  if (props.pokemon.length === 0) return null;
  
  const options = props.pokemon.map(mon => {
    return <option value={mon.name} key={mon.url}>{mon.name}</option>
  });

  function handleSelection(event) {
    props.onPokemonSelected(event.target.value)
  }

  return (
    <select id="pokemon-selector" defaultValue="default" onChange={handleSelection}>
      <option disabled value="default">Choose a Pokemon</option>
      {options}
    </select>
  )
}

export default PokemonSelector;