import { GetAllPokemonInterface, Pokemon, SmallPokemon } from "../interfaces/getAllPokemonInterface";
import { pokemonService } from "../services/pokemonService"

export const getAllPokemons = async(): Promise<Pokemon[]> => {
  const allPokemons = await pokemonService.get<GetAllPokemonInterface>('/pokemon?limit=1500');
  const smallPokemonList = allPokemons.data.results;
  return transformSmallPokemonIntoPokemon(smallPokemonList);
}

const transformSmallPokemonIntoPokemon = (smallPokemonList: SmallPokemon[]): Pokemon[] => {
  const pokemonArr: Pokemon[] = smallPokemonList.map(poke => {
    const id = poke.url.split('/')[6];
    return {
      id,
      name: poke.name,
      pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }
  });
  return pokemonArr;
}
