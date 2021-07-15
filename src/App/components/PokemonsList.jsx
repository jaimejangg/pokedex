import CardPokemon from "./CardPokemon";
import Pagination from "./Pagination";

export default function PokemonsList({
  pokemons,
  page,
  setPage,
  total,
  loading,
}) {
  const prevPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div className="min-h-full bg-gray-200">
      <>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {pokemons.map((pokemon, i) => {
                return <CardPokemon pokemon={pokemon} key={pokemon.id} />;
              })}
            </ul>
          </div>
        </div>
      </>
      {loading ? (
        <span />
      ) : (
        <Pagination
          page={page + 1}
          totalPages={total}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
}
