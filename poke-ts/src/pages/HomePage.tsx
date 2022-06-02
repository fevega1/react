import { useState } from 'react';
import { IsLoading } from '../components/IsLoading';
import { usePokemon } from '../hooks/usePokemon'
import { Pokemon } from '../interfaces/getAllPokemonInterface';

export const HomePage = () => {

  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('')

  const filteredPokemons = (): Pokemon[] => {
    if (search.length === 0) {
      return pokemons.slice(currentPage, currentPage + 5);
    }

    const filtered = pokemons.filter(poke => poke.name.includes(search));
    return filtered.slice(currentPage, currentPage + 5);
  }

  const nextPage = () => {
    if (pokemons.filter(poke => poke.name.includes(search)).length > currentPage + 5) {
      setCurrentPage(currentPage + 5);
    }
    
  }

  const prevPage = () => {
    if (currentPage > 0) { 
      setCurrentPage(currentPage - 5)
    };
  }

  const handleSearch = ( {target}: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  }

  return (
    <div className="mt-5">
      <h1>Pokemon List</h1>
      <hr />
      <input
        type="text"
        className='mb-2 form-control'
        placeholder="Search Pokemon"
        value={search}
        onChange={handleSearch}
      />
      <button className="btn btn-primary" onClick={prevPage}>Previous</button>
      <button className="btn btn-primary ml-1" onClick={nextPage}>Next</button>
      <table className="table mt-2">
        <thead>
          <tr>
            <th style={{width: 100 }}>ID</th>
            <th style={{width: 150 }}>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredPokemons().map( ({id, name, pic}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img src={pic} width={75} alt={name} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        isLoading && <IsLoading />
      }
    </div>
  )
}
