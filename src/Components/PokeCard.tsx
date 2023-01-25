import { Component } from "react";
import { PokeCardProps } from "../Interfaces/PokedexProps";
import "./PokeCard.css"

class PokeCard extends Component<PokeCardProps, {}> {
    render() {
        const { id, name, type, base_experience } = this.props.Pokemon;
        const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('000' + id).substring(('000'+id).length - 3 )}.png`;
        return (
            <div className="Pokecard">
                <p className="Pokecard-title">{name}</p>
                <img className="Pokecard-image"  alt={name} src={url} />
                <p className="Pokecard-data">Type: {type}</p>
                <p className="Pokecard-data">EXP: {base_experience}</p>
            </div>
        );
    }
}

export default PokeCard;