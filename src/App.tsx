import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [drink, setDrink] = useState(null);
  const [key, setKey] = useState(0);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCocktail() {
      try {
        if (!search) {
          throw new Error('Please enter a search term');
        }
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
        );
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          setDrink(data);
          setError(null);
        } else {
          throw new Error("We don't know how to do that cocktail sorry!");
        }
      } catch (error) {
        setError(error);
      }
    }
    if (search !== '') {
      fetchCocktail();
    }
  }, [search]);

  async function fetchDrink() {
    try {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      );
      const data = await response.json();
      setDrink(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
  }

  const toDisplay = () => {
    if (error) {
      return <p>{error.message}</p>;
    } else if (search && drink === null) {
      return (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>Sorry couldn't find your drink, can I serve you anything else ?</p>
      );
    } else if (drink === null && !search) {
      return <p>Please have a look at our menu...</p>;
    } else {
      return (
        <Main key={key} search={search} drink={drink} toDisplay={toDisplay} />
      );
    }
  };
  const handleFetchDrink = () => {
    fetchDrink();
    setKey(key + 1);
  };

  const handleSearchChange = () => {
    const searchValue = document.querySelector('.search-bar').value;
    console.log(searchValue);

    setSearch(searchValue);
  };

  return (
    <div className="flex h-full flex-col items-center justify-between">
      <section className="flex flex-col items-center">
        <Header />
        <SearchBar
          search={search}
          setSearch={setSearch}
          fetchDrink={handleFetchDrink}
          handleSearchChange={handleSearchChange}
        />
      </section>
      {toDisplay()}
      <Footer />
    </div>
  );
};

export default App;
