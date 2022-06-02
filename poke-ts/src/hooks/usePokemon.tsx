import { useEffect, useState } from "react"
import { getAllPokemons } from "../helpers/getAllPokemons";
import { Pokemon } from "../interfaces/getAllPokemonInterface";

export const usePokemon = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
      getAllPokemons().then(pokemons => {
        setIsLoading(false);
        setPokemons(pokemons);
      });
    }, [])
    

    return { isLoading, pokemons }
}
