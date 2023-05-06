import './style.css';

import drinkOne from './../assets/images/drink-one.png';
import drinkTwo from './../assets/images/drink-two.png';

const SearchBar = ({ setSearch, fetchDrink }) => {
  const handleSearchChange = () => {
    const searchValue = document.querySelector('.search-bar').value;
    setSearch(searchValue);
  };
  return (
    <section className="flex w-1/2 flex-col gap-5">
      <input
        type="text"
        className="search-bar rounded p-2"
        placeholder="What would like to drink?"
      />
      <section className="flex justify-around text-xl">
        <button onClick={handleSearchChange}>
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
    </section>
  );
};

export default SearchBar;
