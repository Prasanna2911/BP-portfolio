const Header = () => {
  return (
    <header className="h-20 fixed top-0 left-0 w-full flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="">
            <img src="" alt="My-Logo" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button className=""></button>
          <span className="material-symbols-rounded">menu</span>
          navbar
        </div>
        <a href="" className="">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
