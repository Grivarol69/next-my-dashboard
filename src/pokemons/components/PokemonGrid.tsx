
import { SimplePokemon } from "../interfaces/simple-pokemons"
import PokemonCard from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
        {
            pokemons.map(pokemon => (
                <div key={pokemon.id} className="flex flex-col">
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                    
                    
                </div>
            ))
        }
    </>
  )
}

