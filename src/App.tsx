import { SetStateAction, useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [drink, setDrink] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState<null | Error>(null);

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
        } else {
          throw new Error("We don't know how to do that cocktail sorry!");
        }
      } catch (error) {
        setError(error as Error);
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
      setError(error as Error);
    }
  }

  const toDisplay = () => {
    if (error instanceof Error) {
      return <p>{error.message}</p>;
    } else if (search && drink === null) {
      return (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>Sorry couldn't find your drink, can I serve you anything else ?</p>
      );
    } else if (drink === null && !search) {
      return <p>Please have a look at our menu...</p>;
    } else {
      return <Main drink={drink} />;
    }
  };
  const handleFetchDrink = () => {
    fetchDrink();
  };

  return (
    <div className="flex h-full flex-col items-center justify-between">
      <section className="flex flex-col items-center">
        <Header />
        <SearchBar setSearch={setSearch} fetchDrink={handleFetchDrink} />
      </section>
      {toDisplay()}
      <Footer />
    </div>
  );
};

export default App;
