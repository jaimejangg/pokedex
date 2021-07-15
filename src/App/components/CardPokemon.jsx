import Modal from "./Modal";
import useModal from "../hooks/useModal";
import DetailsPokemonCard from "./detailsCardPokemon/DetailsPokemonCard";

export default function CardPokemon({ pokemon }) {
  const [isOpenDetailsModal, openDetailsModal, closeDetailsModal] = useModal();

  return (
    <>
      <li
        className="py-10 px-6 dark:bg-gray-800 bg-white text-center rounded-lg xl:px-10 xl:text-left"
        key={pokemon.id}
      >
        <div className="space-y-6 xl:space-y-10">
          <img
            className="mx-auto h-40 w-40 xl:w-56 xl:h-56"
            src={pokemon.sprites.front_default}
            alt=""
          />
          <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
            <div className="font-medium text-lg leading-6 space-y-1">
              <h3 className="text-white">{pokemon.name}</h3>
              <button
                className="inline-flex items-center px-4 py-2 mb-5 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={openDetailsModal}
              >
                See Details
              </button>
              <Modal
                isOpen={isOpenDetailsModal}
                closeModal={closeDetailsModal}
                title="Login"
              >
                <DetailsPokemonCard pokemon={pokemon} />
              </Modal>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
