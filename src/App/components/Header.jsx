import logo from "../../assets/images/logo-pokemon.png";

export default function Header() {
  return (
    <header className="pt-24 bg-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-center">
          <img className="h-15 w-auto" src={logo} alt="pokemonLogo" />
        </div>
      </div>
    </header>
  );
}
