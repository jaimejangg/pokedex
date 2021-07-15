import Modal from "./Modal";
import useModal from "./hooks/useModal";
import DetailsPokemonCard from "./DetailsPokemonCard";

export default function CardPokemon({ pokemon }) {
  const [isOpenDetailsModal, openDetailsModal, closeDetailsModal] = useModal();

  return (
    <>
      <li
        className="py-10 px-6 bg-gray-800 dark:bg-white text-center rounded-lg xl:px-10 xl:text-left"
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
              <button onClick={openDetailsModal}>Open Gallery Modal</button>
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
