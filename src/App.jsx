import { useState, useMemo, useEffect } from 'react';
import NavBar from './layout/NavBar';
import Grid from './layout/Grid';
import clientAxios from './config/clientAxios';
import axios from 'axios';

// hook for update pokemons db
const useDB = () => {
  const [db, setDb] = useState({});

  const updateDB = (update) => {
    setDb((stale) => ({ ...stale, ...update }));
  };

  return { db, updateDB };
};

const usePokemonDB = () => {
  // state all pokemons
  const [pokemons, setPokemons] = useState([]);

  // state info pokemons
  const { db, updateDB } = useDB();

  // state total number of pokemons
  const [count, setCount] = useState('');

  // state for the change in the call api
  const [offset, setOffset] = useState(0);

  // state for loading of pokemons information
  const [loading, setLoading] = useState(false);

  // call to main api
  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const { data } = await clientAxios.get(`?offset=${offset}&limit=${20}`);

        // set all pokemons
        setPokemons(data.results);

        // set total number of pokemons
        setCount(data.count);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getAllPokemons();
    // called again when offset state change
  }, [offset]);

  // call to api to get info of each pokemon
  useEffect(() => {
    const getPokemon = async () => {
      // change state for loading
      setLoading(true);

      const infoPokemon = await Promise.all(
        pokemons.map(async (pokemon) => {
          let url = pokemon.url; // set url for each pokemon

          try {
            const { data } = await axios.get(url);

            // return each pokemon with its info
            return [data.id, data];
          } catch (error) {
            console.log(error.response.data);
          }
        })
      );

      // set an object with info of pokemon
      updateDB(Object.fromEntries(infoPokemon));

      // change state for loading
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    getPokemon();
    // call again when pokemons state change
  }, [pokemons]);

  // functions for pagination
  const hasNextPage = offset + 20 <= count;
  const hasPrevPage = offset - 20 >= 0;
  const currentPage = offset / 20 + 1;

  // next page
  const nextPage = () => {
    if (hasNextPage) setOffset(offset + 20);
  };

  // back page
  const backPage = () => {
    if (hasPrevPage) setOffset(offset - 20);
  };

  // show results 20 by 20
  const pageResults = useMemo(() => {
    return Object.entries(db).slice(offset, offset + 20);
  }, [db, offset]);

  return {
    db,
    backPage,
    count,
    currentPage,
    hasNextPage,
    hasPrevPage,
    loading,
    nextPage,
    pageResults,
    offset,
  };
};

function App() {
  const {
    loading,
    pageResults,
    currentPage,
    hasNextPage,
    hasPrevPage,
    nextPage,
    backPage,
  } = usePokemonDB();

  return (
    <>
      <NavBar />

      <Grid
        {...{
          backPage,
          pageResults,
          currentPage,
          hasNextPage,
          hasPrevPage,
          loading,
          nextPage,
        }}
      />
    </>
  );
}

export default App;
