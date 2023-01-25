declare interface PokedexProps {
    PokemonList: Pokemon[],
    isWinner: boolean
}

declare interface PokeCardProps
{
    Pokemon: Pokemon
}

declare interface Pokemon {
    id: number,
    name: string,
    type: string,
    base_experience: number
}

export default PokedexProps;
export type { PokeCardProps, Pokemon };