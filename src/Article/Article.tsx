import './style.css';

const Article = ({ title, img, description, glass, drink }) => {
  return (
    <article
      className=" m-4 w-full max-w-sm lg:flex lg:max-w-full"
      style={{ maxWidth: '700px', maxHeight: '700px' }}
    >
      <div
        className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
        style={{
          backgroundImage: `url(${img})`,
        }}
        title={title}
      ></div>
      <div className="flex flex-1 flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
        <div className="mb-8 flex flex-col gap-5">
          <section>
            <div className="mb-2 text-3xl font-bold uppercase text-gray-900">
              {title}
            </div>
            <p className="text-xl text-gray-700">{description}</p>
          </section>
          <h2 className="text-xl font-bold text-black">Ingredients</h2>
          <div>
            <p className="text-black">You will need : {glass}</p>
            <section className="flex flex-wrap gap-2 text-black">
              {Object.entries(drink).map(([key, value]) => {
                if (key.includes('strIngredient') && value) {
                  const ingredientIndex = key.slice(-1);
                  const measureKey = `strMeasure${ingredientIndex}`;
                  const measure = drink[measureKey];
                  if (measure) {
                    return (
                      <p className="" key={key}>
                        | <span className="font-semibold">{value}</span> (
                        {measure}) |
                      </p>
                    );
                  } else {
                    return <p key={key}>{value}</p>;
                  }
                }
                return null;
              })}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
