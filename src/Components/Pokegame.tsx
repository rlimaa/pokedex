import React, { Component } from "react";
import { Pokemon } from "../Interfaces/PokedexProps";
import Pokedex from "./Pokedex";
import pokemonList from "./PokemonList";

class Pokegame extends Component {
    generateHand(pokemonList: Pokemon[]) {
        let res: Pokemon[] = new Array(pokemonList.length/2);
        const listClone = pokemonList.slice();
        for(let i = 1; i <= listClone.length+1/2; i++)
        {
            const idx = Math.floor(Math.random() * listClone.length);
            res.push(listClone[idx]);
            listClone.splice(idx, 1);
        }
        return {
            player1: res, 
            player2: listClone
        };
    }

    render() {
        const { player1, player2 } = this.generateHand(pokemonList);
        const player1Xp = player1.reduce((partialSum, item) => partialSum + item.base_experience, 0);
        const player2Xp = player2.reduce((partialSum, item) => partialSum + item.base_experience, 0);

        return (
            <div className="Pokegame">
                <Pokedex isWinner={player1Xp > player2Xp} PokemonList={player1}/>
                <Pokedex isWinner={player1Xp < player2Xp} PokemonList={player2}/>
            </div>
        );
    }
}

export default Pokegame;