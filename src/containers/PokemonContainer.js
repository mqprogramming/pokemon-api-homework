import React from 'react';
import PokemonSelector from '../components/PokemonSelector'
import PokemonDetails from '../components/PokemonDetails'

class PokemonContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemon: {}
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=493";

    fetch(url)
      .then(res => res.json())
      .then(pokemon => this.setState({pokemon: pokemon.results}))
      .then(err => console.error);
  }

  handlePokemonSelected(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
      .then(res => res.json())
      .then(pokemon => this.setState({selectedPokemon: pokemon}))
      .then(err => console.error);
  }

  render() {
    // console.log("rendering...");
    return(
      <div>
        <PokemonSelector pokemon={this.state.pokemon} onPokemonSelected={this.handlePokemonSelected}/>
        <PokemonDetails selectedPokemon={this.state.selectedPokemon}/>
      </div>
    )
  }
}

export default PokemonContainer;