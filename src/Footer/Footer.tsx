const Footer = () => {
  const CurrentYear = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="text-center">
        <p>{currentYear} © MY NAME IS</p>
        <div>
          Icônes conçues par{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/fr/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    );
  };

  return <footer>{CurrentYear()}</footer>;
};

export default Footer;
