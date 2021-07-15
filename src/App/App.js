import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./Header";
import PokemonsList from "./PokemonsList";
import DocumentationPage from "./documentation/DocumentationPage";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { getPokemons, searchPokemon, getPokemonData } from "../api";
import Navbar from "./components/Navbar";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const filterPokemons = (pokemons) => {
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
    setPokemons(filteredPokemons);
  };

  const onSearch = async (pokemon, id) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon, id);
    if (!result) {
      toast.error("Pokemon Not found");
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  const onChange = (e) => {
    setSearch(e.target.value);

    if (!e.target.value) {
      setPokemons([]);
    } else {
      filterPokemons(pokemons);
    }

    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Route component={Navbar} />
      <Header />
      <div className="lg:block py-5">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="max-w-md w-full mx-auto">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UsersIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="sarch"
                name="search"
                id="search"
                className="bg-blue-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                placeholder="Search"
                onChange={onChange}
              />
              <button
                onClick={onClick}
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <SearchIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Route exact path="/documentation" component={DocumentationPage} />
      <PokemonsList
        loading={loading}
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
      />
    </>
  );
}

export default App;
