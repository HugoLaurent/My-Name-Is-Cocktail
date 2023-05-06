import './style.css';

const Article = ({ title, img, description }) => {
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
          <div className="mb-2 text-xl font-bold uppercase text-gray-900">
            {title}
          </div>
          <p className="text-base text-gray-700">{description}</p>
          {/* <section className="flex gap-2 text-black">
            <p>Gin</p>
            <span>(3/4 shot)</span>
            <p>Gin</p>
            <span>(3/4 shot)</span>
            <p>Gin</p>
            <span>(3/4 shot)</span>
            <p>Gin</p>
            <span>(3/4 shot)</span>
          </section> */}
        </div>
      </div>
    </article>
  );
};

export default Article;
