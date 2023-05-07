import { motion } from 'framer-motion';
import Article from '@/Article/Article';

const Main = ({ drink }: { drink: any }) => {
  return (
    <main className="">
      {drink && (
        <motion.div className="animation-div">
          {drink.drinks.map((drink: any, index: any) => (
            <motion.div
              key={drink.idDrink}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Article
                title={drink.strDrink}
                img={drink.strDrinkThumb}
                description={drink.strInstructions}
                glass={drink.strGlass}
                drink={drink}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  );
};

export default Main;
