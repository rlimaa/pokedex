import React, { Component } from "react"
import PokedexProps from "../Interfaces/PokedexProps";
import PokeCard from "./PokeCard";
import pokemonList from "./PokemonList";
import "./Pokedex.css"

class Pokedex extends Component<PokedexProps, {}> {
    static defaultProps: PokedexProps = {
        PokemonList: pokemonList,
        isWinner: false,
        playerName: "Pokedex"
    }

    render() {
        return (
            <div className="Pokedex">
                <div className={this.props.isWinner ? "Pokedex-winner" : "Pokedex-loser"}>
                    <h1 className="Pokedex-title">{this.props.playerName} - {this.props.isWinner ? "Winner" : "Loser"}</h1>
                    <div className="Pokedex-cards">
                        {this.props.PokemonList.map(p => (<PokeCard Pokemon={p}/>))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;