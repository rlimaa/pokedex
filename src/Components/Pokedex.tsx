import React, { Component } from "react"
import PokedexProps from "../Interfaces/PokedexProps";
import PokeCard from "./PokeCard";
import pokemonList from "./PokemonList";

class Pokedex extends Component<PokedexProps, {}> {
    static defaultProps: PokedexProps = {
        PokemonList: pokemonList,
        isWinner: false
    }

    render() {
        const winnerHtml = (<h1>This Hand wins!</h1>);
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-cards">
                    {this.props.PokemonList.map(p => (<PokeCard Pokemon={p}/>))}
                </div>
                {this.props.isWinner && winnerHtml}
            </div>
        );
    }
}

export default Pokedex;