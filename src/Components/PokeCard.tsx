import { Component } from "react";
import { PokeCardProps } from "../Interfaces/PokedexProps";
import "./PokeCard.css"

class PokeCard extends Component<PokeCardProps, {}> {
    render() {
        const { id, name, type, base_experience } = this.props.Pokemon;
        return (
            <div className="Pokecard">
                <p className="Pokecard-title">{name}</p>
                <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name}`} />
                <p className="Pokecard-data">Type: {type}</p>
                <p className="Pokecard-data">EXP: {base_experience}</p>
            </div>
        );
    }
}

export default PokeCard;