import { motion } from 'framer-motion';
import Article from '@/Article/Article';
import { useEffect } from 'react';

const Main = ({ drink }) => {
  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    if (drink) {
      const div = document.querySelector('.animation-div');
      div.style.opacity = '0';
      setTimeout(() => {
        div.style.opacity = '1';
      }, 10);
    }
  }, [drink]);

  return (
    <main className="">
      {drink && (
        <motion.div
          className="animation-div"
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {drink.drinks.map((drink) => (
            <Article
              key={drink.idDrink}
              title={drink.strDrink}
              img={drink.strDrinkThumb}
              description={drink.strInstructions}
            />
          ))}
        </motion.div>
      )}
    </main>
  );
};

export default Main;
