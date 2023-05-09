import './style.css';

import drinkOne from './../assets/images/drink-one.png';
import drinkTwo from './../assets/images/drink-two.png';
import { useState } from 'react';

const SearchBar = ({
  setSearch,
  fetchDrink,
}: {
  setSearch: any;
  fetchDrink: any;
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // On bloque le refresh provoqué par la balise form
    setSearch(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // On bloque le refresh provoqué par la balise form
    setSearch(inputValue);
  };

  return (
    <form className="flex w-1/2 flex-col gap-5" onSubmit={handleSubmit}>
      {/* remplacement de "section" par "form" et ajout de onSubmit pour gérer la validation avec la touche "Entréeé*/}
      <input
        type="text"
        className="search-bar rounded p-2"
        placeholder="What would like to drink?"
        onChange={handleSearchChange}
      />
      <section className="flex justify-around text-xl">
        <button onClick={handleClick}>
          Drink It
          <img className="ml-1 inline-block invert" src={drinkOne} />
        </button>
        <button onClick={fetchDrink}>
          Cocktail Me
          <img
            className="hover:shake ml-1 inline-block invert"
            src={drinkTwo}
          />
        </button>
      </section>
    </form>
  );
};

export default SearchBar;
